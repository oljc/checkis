import { useI18n, usePageData } from '@rspress/core/runtime';
import Bck from './background';
import HeroTitle from './HeroTitle';
import Install from './Install';
import './index.less';

export const HomeLayout = () => {
  const t = useI18n();
  const pageData = usePageData();
  const { features } = pageData.page.frontmatter;

  return (
    <main className="home-container">
      <Bck />
      <div className="hero-main">
        <HeroTitle />
        <h2 className="hero-subtitle">为现代开发者设计的验证工具库</h2>
        <p className="hero-desc">
          提供丰富的验证函数，从基础类型到复杂格式，让数据校验变得简单可靠
        </p>
        <Install />
        <button className="start-button">快速开始</button>
      </div>
      <div className="feature-main">
        {features?.map((item) => (
          <div className="feature-item" key={item.title}>
            <div className="feature-item-icon">{item.icon}</div>
            <h2 className="feature-item-title">{item.title}</h2>
            <p className="feature-item-desc">{item.details}</p>
          </div>
        ))}
      </div>
      <div className="footer">© 2025-present Checkis. All rights reserved.</div>
    </main>
  );
};
