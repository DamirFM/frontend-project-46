import genDiff from 'bin/genDiff';
const result = genDiff(pathToFile1, pathToFile2);
console.log(result);

import fs from 'fs';
import path from 'path';

const readFile = (path) => {
  const fullPath = path.resolve(path, process.cwd()); 
  const data = fs.readFileSync(fullPath).toString();
  return data;
}

export default (path1, path2) => {
  const data1 = readFile(path1);
  const data2 = readFile(path2);
  const current = {};
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const uni = _.union(keys1, keys2);
  for (const key of uni) {
    const check1 = Object.hasOwn(data1, key);
    const check2 = Object.hasOwn(data2, key);
    if (!check2) {
      current[key] = 'deleted';
    } else if (check2) {
      current[key] = 'added';
    } if (check1 && check2) {
      current[key] = 'changed';
    } if (data1[key] === data2[key]) {
      current[key] = 'unchanged';
    }
  }
  return current;
  // остальной код
};