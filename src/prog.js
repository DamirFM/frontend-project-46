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

  // остальной код
};