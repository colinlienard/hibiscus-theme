import { writeFileSync } from 'fs';
import { getTheme } from './theme';

try {
  const theme = getTheme('Hibiscus');
  writeFileSync('themes/generated.json', JSON.stringify(theme));
  console.log('\x1b[32m', '✔ Theme generated');
} catch (e) {
  console.error('\x1b[31m', e);
}
