// Prevent accidentally republishing affiliate/referral links in production source.
// Scans maintained application code and public HTML, not historical documentation.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const roots = ['app', 'src', 'public'];
const allowed = /\\.(?:js|jsx|ts|tsx|html|mdx)$/i;
const patterns = [
  { name: 'affiliate merchant URL', rx: /(?:https?:\\/\\/)?(?:[\\w-]+\\.)?(?:iherb\\.com|amzn\\.to|amazon\\.[a-z.]+\\/[^\\s\"'<>]*[?&]tag=)/i },
  { name: 'referral tracking parameter', rx: /[?&](?:rcode|referral_code|affiliate_id|aff_id|tag)=/i },
  { name: 'known suspended referral code', rx: /FKX4668/i },
  { name: 'explicit affiliate purchase invitation', rx: /(?:use (?:my|our) referral code|shop (?:our|the) supplement stack|why we only sell)/i },
];
const failures = [];
function walk(path) {
  for (const name of readdirSync(path)) {
    const file = join(path, name);
    if (statSync(file).isDirectory()) { walk(file); continue; }
    if (!allowed.test(file)) continue;
    const lines = readFileSync(file, 'utf8').split(/\\r?\\n/);
    lines.forEach((line, i) => {
      for (const p of patterns) if (p.rx.test(line)) failures.push(`${relative('.', file)}:${i + 1}: ${p.name}`);
    });
  }
}
roots.forEach(walk);
if (failures.length) {
  console.error('Commercial link guard failed:\\n' + failures.join('\\n'));
  process.exitCode = 1;
} else {
  console.log('Commercial link guard passed.');
}
