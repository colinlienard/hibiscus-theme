import fs from 'fs';

const PATH = './themes/Glace-color-theme.json';

const json = fs.readFileSync(PATH, 'utf8');
const object = JSON.parse(json);

// Sort by alphabetical order
const sortedColors = {};
Object.keys(object.colors)
  .sort()
  .forEach((key) => {
    sortedColors[key] = object.colors[key];
  });

object.colors = sortedColors;

fs.writeFileSync(PATH, JSON.stringify(object));
