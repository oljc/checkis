import { IconCopy, IconDownload } from '@arco-design/web-react/icon';
import { useState } from 'react';

import './index.less';

const cmd = 'npm install checkis@latest';
const IconSuccess = () => (
  <svg
    className="done"
    role="presentation"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="24" cy="24" r="18" />
    <path d="M15 22 L22 29 L33.5 17.5" />
  </svg>
);

const Install = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cmd);

      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  return (
    <div className="install">
      <IconDownload style={{ opacity: 0.8 }} />
      <code>{cmd}</code>
      {copied ? <IconSuccess /> : <IconCopy className="copy" onClick={handleCopy} />}
    </div>
  );
};

export default Install;
