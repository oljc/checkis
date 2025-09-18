import { writeFile } from 'node:fs/promises';
import { basename, join } from 'node:path';
import fg from 'fast-glob';

const main = async () => {
  try {
    const dirs = await fg('core/src/is*/', { onlyDirectories: true });
    const funNames = dirs.map((dir) => basename(dir)).sort();

    // const imports = funNames.map((name) => `import { ${name} } from './${name}';`).join('\n');
    const exports = funNames.map((name) => `export { ${name} } from './${name}';`).join('\n');
    // const defaultExport = `export default {\n  ${funNames.join(',\n  ')}\n};`;
    const header = `// Auto-generated. Do not edit manually\n// 自动生成，请勿手动修改\n`;
    // const content = `${header}${imports}\n\n${exports}\n\n${defaultExport}\n`;
    const content = `${header}${exports}\n`;
    const indexPath = join(process.cwd(), 'core/src/index.ts');
    await writeFile(indexPath, content, 'utf8');

    console.log('Build Success!');
  } catch (error) {
    console.error('Build Index:', error);
  }
};

main();
