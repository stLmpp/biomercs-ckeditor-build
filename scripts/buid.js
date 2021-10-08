const { resolve } = require('path');
const { writeFileSync, copyFileSync } = require('fs');
const { spawn } = require('child_process')

async function build() {
  const child = spawn('yarn', ['build-webpack']);

  let data = "";
  for await (const chunk of child.stdout) {
    console.log('stdout chunk: '+chunk);
    data += chunk;
  }
  let error = "";
  for await (const chunk of child.stderr) {
    console.error('stderr chunk: '+chunk);
    error += chunk;
  }
  const exitCode = await new Promise( resolve => {
    child.on('close', resolve);
  });

  if( exitCode) {
    throw new Error( `subprocess error exit ${exitCode}, ${error}`);
  }
  return data;
}

const pathDestination = resolve(process.cwd(), '../biomercs-ng/src/app/shared/ckeditor');
const pathOrigin = resolve(process.cwd(), 'build');

const tsFile = `import { CKEditor5 } from '@ckeditor/ckeditor5-angular/ckeditor';

declare const ClassicEditor: CKEditor5.EditorConstructor;

export default ClassicEditor;`;

const files = ['ckeditor.d.ts', 'ckeditor.js', 'ckeditor.js.map'];

(async () => {
  await build();
  writeFileSync(resolve(pathOrigin, 'ckeditor.d.ts'), tsFile);
  for (const file of files) {
    copyFileSync(resolve(pathOrigin, file), resolve(pathDestination, file));
  }
})();
