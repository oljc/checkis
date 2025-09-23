import { join } from 'node:path';
import fse from 'fs-extra';

const ROOT = process.cwd();
const CORE = join(ROOT, 'core');
const PUBLISH = join(ROOT, 'dist');

const main = async () => {
  try {
    await fse.remove(PUBLISH);
    await fse.ensureDir(PUBLISH);
    await fse.copy(join(CORE, 'dist'), PUBLISH);
    await fse.copy(join(ROOT, 'README.md'), join(PUBLISH, 'README.md'));

    const pkgPath = join(CORE, 'package.json');
    const pkg = await fse.readJson(pkgPath);
    const newPkg = {
      ...pkg,
      main: './cjs/index.cjs',
      module: './esm/index.js',
      types: './types/index.d.ts',
      exports: {
        '.': {
          import: './esm/index.js',
          require: './cjs/index.cjs',
          types: './types/index.d.ts',
        },
        './types': './types/index.d.ts',
        './package.json': './package.json',
      },
      unpkg: './checkis.min.js',
      browser: './checkis.min.js',
      files: ['cjs', 'esm', 'types', 'checkis.js', 'checkis.min.js', 'README.md'],
    };
    await fse.writeJson(join(PUBLISH, 'package.json'), newPkg, { spaces: 2 });
    console.log('Prepared:', PUBLISH);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

main();
