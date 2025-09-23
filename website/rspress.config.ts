import * as path from 'node:path';
import { pluginLess } from '@rsbuild/plugin-less';
import { defineConfig } from '@rspress/core';
import { pluginLlms } from '@rspress/plugin-llms';
import { pluginChangelog } from './plugin/changelog';

export default defineConfig({
  plugins: [pluginLlms(), pluginChangelog()],
  root: path.join(__dirname, 'docs'),
  title: 'Checkis',
  lang: 'zh',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    enableScrollToTop: true,
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
    locales: [
      {
        lang: 'zh',
        label: '简体中文',
        editLink: {
          docRepoBaseUrl: 'https://github.com/web-infra-dev/rspress/tree/main/website/docs',
          text: '📑 编辑此页',
        },
        nextPageText: '下一页',
        prevPageText: '上一页',
        outlineTitle: '目录',
        overview: {
          filterNameText: '过滤',
          filterPlaceholderText: '输入关键词',
          filterNoResultText: '未找到匹配的 API',
        },
      },
      {
        lang: 'en',
        label: 'English',
        editLink: {
          docRepoBaseUrl: 'https://github.com/web-infra-dev/rspress/tree/main/website/docs',
          text: '📝 Edit this page on GitHub',
        },
      },
    ],
  },
  globalStyles: path.join(__dirname, 'theme/styles/base.less'),
  builderConfig: {
    plugins: [pluginLess()],
  },
});
