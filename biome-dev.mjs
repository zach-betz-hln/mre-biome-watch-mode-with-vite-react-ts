import { execSync } from 'node:child_process';

try {
  const output = execSync('npx @biomejs/biome check .', {
    encoding: 'utf-8',
    // Keep colors. See https://github.com/nodejs/help/issues/2183
    stdio: 'inherit',
  })
    // stdout is null on success
    .replace(/^null$/, '');
  console.log(output);
} catch {
  // Ignored because the error has dup info
}
