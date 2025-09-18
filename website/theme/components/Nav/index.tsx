import { Dropdown, Menu } from '@arco-design/web-react';
import { IconGithub, IconLanguage } from '@arco-design/web-react/icon';
import { useLocation, useNav } from '@rspress/core/runtime';
import Search from '../Search';
import SwitchTheme from '../SwitchTheme';
import './index.less';
import type { NavItem } from '@rspress/shared';

const dropList = (
  <Menu>
    <Menu.Item key="1">Beijing</Menu.Item>
    <Menu.Item key="2">Shanghai</Menu.Item>
    <Menu.Item key="3">Guangzhou</Menu.Item>
  </Menu>
);

const NavMenu = ({ items, pathname }: { items: NavItem[]; pathname: string }) => (
  <nav className="nav-menu">
    {items.map((item) => {
      if ('items' in item || Array.isArray(item)) {
        return <div>TODO</div>;
      } else {
        const isActive = new RegExp(item.activeMatch || item.link).test(pathname);
        return (
          <a key={item.text} href={item.link} className={`nav-item ${isActive ? 'active' : ''}`}>
            {item.text}
          </a>
        );
      }
    })}
  </nav>
);

const NavBar = () => {
  const { pathname } = useLocation();
  const menuItems = useNav();
  const rightMenuItems = menuItems.filter((item) => (item.position ?? 'right') === 'right');

  return (
    <header className="nav-wrap">
      <div className="nav-left">Checkis</div>
      <div className="nav-right">
        <Search />
        <NavMenu items={rightMenuItems} pathname={pathname} />
        <SwitchTheme />
        <Dropdown droplist={dropList} position="br">
          <IconLanguage />
        </Dropdown>
        <a href="https://github.com/arco-design/checkis" target="_blank" rel="noopener noreferrer">
          <IconGithub />
        </a>
      </div>
    </header>
  );
};

export default NavBar;
