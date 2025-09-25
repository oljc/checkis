import { useLocation, useNav } from '@rspress/core/runtime';
import { IconLanguage, IconGithub } from '@arco-design/web-react/icon';
import { cn } from '@/utils/cn'
import Search from '../Search';
import SwitchTheme from '../SwitchTheme';
import { Separator } from '../Separator';
import styles from './index.module.less';
import type { NavItem } from '@rspress/shared';

const NavMenu = ({ items, pathname }: { items: NavItem[]; pathname: string }) => (
  <nav>
    {items.map((item) => {
      if ('items' in item || Array.isArray(item)) {
        return <div>TODO</div>;
      } else {
        const isActive = new RegExp(item.activeMatch || item.link).test(pathname);
        return (
          <a key={item.text} href={item.link} className={cn(styles.btn, isActive && styles.active)}>
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
    <header className={styles.nav}>
      <div className={styles.left}>Checkis</div>
      <div className={styles.right}>
        <Search />
        <NavMenu items={rightMenuItems} pathname={pathname} />
        <Separator orientation="vertical" />
        <SwitchTheme />
        <Separator orientation="vertical" />
        <button className={styles.btn}>
          <IconLanguage />
        </button>
        <Separator orientation="vertical" />
        <a className={styles.btn} href="https://github.com/oljc/checkis" target="_blank" rel="noopener noreferrer">
          <IconGithub />
          <span>1 Stars</span>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
