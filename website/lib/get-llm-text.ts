import type { Page } from '@/lib/source';

export async function getLLMText(page: Page) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title}
URL: ${page.url}

${processed}`;
}
