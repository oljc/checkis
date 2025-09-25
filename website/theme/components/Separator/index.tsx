import { cn } from '@/utils/cn'
import styles from './index.module.less';

type SeparatorProps = {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
};

export function Separator({
  orientation = 'horizontal',
  className,
}: SeparatorProps) {
  return (
    <hr
      className={cn(styles.separator, styles[orientation], className)}
      aria-orientation={orientation}
    />
  );
}
