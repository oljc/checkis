import { IconMoon, IconSun } from '@arco-design/web-react/icon';
import { ThemeContext } from '@rspress/core/runtime';
import { useContext, useCallback } from 'react';
import styles from './index.module.less';
import { cn } from '@/utils/cn';

const SwitchTheme = () => {
  const { theme, setTheme = () => {} } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const toggleTheme = useCallback(() => {
    setTheme(isDark ? 'light' : 'dark');
  }, [isDark, setTheme]);


  return (
    <button
      type="button"
      className={cn(styles.switchTheme, isDark && styles.dark)}
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label="Toggle theme"
    >
      <IconSun className={styles.sun} />
      <IconMoon className={styles.moon} />
    </button>
  );
};

export default SwitchTheme;
