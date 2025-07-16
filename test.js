/*
  pnpm test       # Runs all tests normally
  pnpm test 1     # Runs all tests in src/components/1 or src/components/01
*/

import { spawn } from 'node:child_process';
import path from 'node:path';
import { existsSync } from 'node:fs';

const arg = process.argv[2];

let args = ['vitest', 'watch']; // default args

if (arg && !isNaN(arg)) {
  const padded = String(arg).padStart(2, '0'); // "01"
  const plain = String(Number(arg)); // "1"

  const baseDir = path.resolve('src', 'components');
  const paddedPath = path.join(baseDir, padded);
  const plainPath = path.join(baseDir, plain);

  let testDir;

  if (existsSync(paddedPath)) {
    testDir = paddedPath;
  } else if (existsSync(plainPath)) {
    testDir = plainPath;
  } else {
    console.error(
      `Test folder not found: tried "${paddedPath}" and "${plainPath}"`
    );
    process.exit(1);
  }

  console.log('Running tests in:', testDir);
  args.push('--dir', testDir);
} else if (arg) {
  console.error(`Invalid argument: "${arg}". Must be a number or empty.`);
  process.exit(1);
} else {
  console.log('Running all tests...');
}

const child = spawn('npx', args, {
  stdio: 'inherit',
  shell: true
});

child.on('exit', code => process.exit(code));
