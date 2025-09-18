import { IconMoon, IconSun } from '@arco-design/web-react/icon';
import { ThemeContext } from '@rspress/core/runtime';
import { useContext } from 'react';
import './index.less';

const SwitchTheme = () => {
  const { theme, setTheme = () => {} } = useContext(ThemeContext);

  const handleClick = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const cls = `switch-theme ${theme === 'dark' ? 'dark' : 'light'}`;

  return (
    <button
      type="button"
      className={cls}
      onClick={handleClick}
      aria-pressed={theme === 'dark'}
      aria-label="Toggle theme"
    >
      <IconSun className="icon sun" />
      <IconMoon className="icon moon" />
    </button>
  );
};

export default SwitchTheme;
