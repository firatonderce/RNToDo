let fs = require('fs');
let path = require('path');
let tag = 'SvgIcon';
let dirPath = '../assets/';
let importPath = '../assets/';
let basepath = path.resolve(__dirname, dirPath);
let icons = [];

const getFilesFromDir = (dir, fileTypes) => {
  let filesToReturn = [];
  const walkDir = currentPath => {
    let files = fs.readdirSync(currentPath);
    for (let index in files) {
      var curFile = path.join(currentPath, files[index]);
      if (
        fs.statSync(curFile).isFile() &&
        fileTypes.indexOf(path.extname(curFile)) != -1
      ) {
        let f = curFile.replace(currentPath + '/', '').replace('.svg', '');
        filesToReturn.push({
          tag: tag + capitalize(camelCase(f)),
          name: capitalize(camelCase(f)),
          path: importPath + curFile.replace(currentPath + '/', '')
        });
      } else if (fs.statSync(curFile).isDirectory()) {
        walkDir(curFile);
      }
    }
  };
  walkDir(dir);
  return filesToReturn;
};

const capitalize = string => {
  if (typeof string !== 'string') return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const camelCase = string =>
  string
    .toLowerCase()
    .trim()
    .split(/[.\-_\s]/g)
    .reduce((string, word) => string + word[0].toUpperCase() + word.slice(1));

icons = getFilesFromDir(basepath, ['.svg']);

let output = `import React from "react";
import {SvgXml} from "react-native-svg";
${icons
  .map(icon => {
    return `import ${icon.name} from '${icon.path}';
`;
  })
  .toString()
  .split(',')
  .join('')}
${icons
  .map(icon => {
    return `export const ${icon.tag} = props => {
  return <SvgXml xml={${icon.name}} {...props}/>;
};
`;
  })
  .toString()
  .split(',')
  .join('')}`;

fs.writeFileSync(
  path.resolve(__dirname.replace('bin', 'core'), 'icons.js'),
  output
);

console.log('Generated SVG icon file.');
