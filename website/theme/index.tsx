import { Layout as BasicLayout } from '@rspress/core/theme';
import ChangeLog from '../plugin/changelog/components/index';
import Nav from './components/Nav';
import { HomeLayout } from './home';

const NotFoundLayout = () => <div>404</div>;

const Layout = () => <BasicLayout beforeDocFooter={<ChangeLog />} />;

export { Layout, HomeLayout, NotFoundLayout, Nav };

export * from '@rspress/core/theme';
