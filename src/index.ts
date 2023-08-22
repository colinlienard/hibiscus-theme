import { writeFileSync } from 'fs';
import { getTheme } from './theme.ts';

const theme = getTheme('Theme name');
writeFileSync('themes/generated.json', JSON.stringify(theme));
