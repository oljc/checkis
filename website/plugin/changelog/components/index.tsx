import { usePageData } from '@rspress/core/runtime';
import { useMemo, useState } from 'react';
import type { Commits } from '../index';
import './index.less';

interface PageData {
  page: { commits?: Commits };
}

function relativeTime(date: string, locale = 'zh'): string {
  const now = Date.now();
  const diff = (new Date(date).getTime() - now) / 1000;
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

  const divisions: [number, Intl.RelativeTimeFormatUnit][] = [
    [60, 'second'],
    [60, 'minute'],
    [24, 'hour'],
    [30, 'day'],
    [12, 'month'],
  ];

  let duration = diff;
  for (const [amount, unit] of divisions) {
    if (Math.abs(duration) < amount) return rtf.format(Math.round(duration), unit);
    duration /= amount;
  }
  return rtf.format(Math.round(duration), 'year');
}

const formatDate = (t: string, lang = 'zh') => new Date(t).toLocaleString(lang);

const renderCommit = (commit: string, repo: string) => {
  return commit.split(/(\(#\d+\)|#\d+)/).map((part, i) => {
    const match = part.match(/\(?#(\d+)\)?/);
    return match ? (
      part[0] === '(' ? (
        <span key={i}>
          (
          <a
            href={`https://github.com/${repo}/pull/${match[1]}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            #{match[1]}
          </a>
          )
        </span>
      ) : (
        <a
          key={i}
          href={`https://github.com/${repo}/issues/${match[1]}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          #{match[1]}
        </a>
      )
    ) : (
      part
    );
  });
};

export default function ChangeLog({ repo = 'oljc/checkis' }) {
  const { page } = usePageData() as PageData;
  const [isExpanded, setIsExpanded] = useState(false);

  const commits = page.commits ?? [];
  const latest = commits[0];

  const commitList = useMemo(
    () =>
      commits.map((c) => (
        <div className="changelog-item" key={c.hash}>
          <a
            className="hash"
            href={`https://github.com/${repo}/commit/${c.fullHash}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {c.hash}
          </a>
          <span className="separator">-</span>
          <span className="commit">{renderCommit(c.message, repo)}</span>
          <span className="date">{relativeTime(c.date)}</span>
        </div>
      )),
    [commits, repo],
  );

  return (
    <div className="changelog rp-mt-8">
      <div className="changelog-header" onClick={() => setIsExpanded((v) => !v)}>
        <span>Last Updated: </span>
        <span className="latest">
          {formatDate(latest.date)} · {latest.hash}
        </span>
        <div className="changelog-toggle">
          <span className="commit-count">{commits.length} commits</span>
          <svg
            className={`expand-icon ${isExpanded ? 'expanded' : ''}`}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-label="Toggle changelog"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
      <div className={`changelog-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
        {commitList}
      </div>
    </div>
  );
}
