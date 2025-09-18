import { promises as fs } from 'node:fs';
import { join } from 'node:path';
import fse from 'fs-extra';

const ROOT = process.cwd();             // 项目根目录
const CORE = join(ROOT, 'core');        // core 目录
const DIST = join(CORE, 'dist');        // 构建产物
const PUBLISH = join(ROOT, 'dist');  // 临时发布目录

const main = async () => {
  try {
    await fse.remove(PUBLISH);
    await fse.ensureDir(PUBLISH);
    await fse.copy(DIST, PUBLISH);
    await fse.copy(join(ROOT, 'README.md'), join(PUBLISH, 'README.md'));

    const pkgPath = join(CORE, 'package.json');
    const pkg = JSON.parse(await fs.readFile(pkgPath, 'utf8'));

    const newPkg = {
      ...pkg,
      main: './cjs/index.cjs',
      module: './esm/index.js',
      types: './types/index.d.ts',
      exports: {
        ".": {
          import: './esm/index.js',
          require: './cjs/index.cjs',
          types: './types/index.d.ts'
        },
        "./types": './types/index.d.ts',
        "./package.json": './package.json'
      },
      unpkg: './checkis.min.js',
      browser: './checkis.min.js',
      files: [
        'cjs',
        'esm',
        'types',
        'checkis.js',
        'checkis.min.js',
        'README.md'
      ]
    };

    // 写入临时目录
    await fs.writeFile(join(PUBLISH, 'package.json'), JSON.stringify(newPkg, null, 2));

    // 6️⃣ 发布
    console.log('📦 发布目录准备完毕:', PUBLISH);
    console.log('现在可以执行：');
    console.log('  cd core/publish && npm publish --access public');

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

main();
