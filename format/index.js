import fs from 'fs';

const PATH = './themes/theme.json';

const json = fs.readFileSync(PATH, 'utf8');
const object = JSON.parse(json);
const sortedColors = {};
Object.keys(object.colors)
  .sort()
  .forEach((key) => {
    sortedColors[key] = object.colors[key];
  });
object.colors = sortedColors;
console.log(object);

fs.writeFileSync(PATH, JSON.stringify(object));
