import {readFileSync} from 'fs';

export default function (filepath1, filepath2)  {

const data1 = readFileSync(filepath1, 'utf-8');
const data2 = readFileSync(filepath2, 'utf-8');
const parsedData1 = JSON.parse(data1);
const parsedData2 = JSON.parse(data2);

console.log(parsedData1)
console.log(parsedData2)
}  

function compare (path1, path2)  {
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