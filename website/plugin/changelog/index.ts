import type { RspressPlugin } from '@rspress/core';
import { execa } from 'execa';

export interface Commit {
  fullHash: string;
  hash: string;
  date: string;
  author: string;
  email: string;
  message: string;
  relativeTime: string;
}

export type Commits = Commit[];

const gitFormat = ['%H', '%h', '%ai', '%an', '%ae', '%s', '%ar'].join('%x00');

async function getFileGitHistory(filePath: string) {
  try {
    const rootDir = process.cwd();

    const { stdout } = await execa(
      'git',
      ['log', '--follow', `--pretty=format:${gitFormat}%x1e`, '--', filePath],
      {
        cwd: rootDir,
        reject: false,
        maxBuffer: 50 * 1024 * 1024,
        encoding: 'utf8',
        timeout: 10000,
      },
    );
    const logs = [];
    const commits = stdout.split('\x1e').filter(Boolean);
    for (const commit of commits) {
      const parts = commit.split('\0').map((p) => p.trim());
      if (parts.length < 7) continue;
      const [fullHash, hash, date, author, email, message, relativeTime] = parts;
      logs.push({
        fullHash,
        hash,
        date,
        author,
        email,
        message,
        relativeTime,
      });
    }
    return logs;
  } catch (_e) {
    /* noop */
  }
}

export function pluginChangelog(): RspressPlugin {
  return {
    name: 'rspress-plugin-changelog',
    async extendPageData(pageData) {
      const commits = await getFileGitHistory(pageData._filepath);
      // @ts-expect-error
      pageData.commits = commits;
    },
  };
}
