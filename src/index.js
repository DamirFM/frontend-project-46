import fs from 'fs';
import  _  from 'lodash';

const genDiff = (data1, data2, replacer =' ') => {
  // const keys1 = Object.keys(data1);
  // const keys2 = Object.keys(data2);
  // const keys = _.union(keys1, keys2); 

  const indentSize = 1; // размер пробела
  const currentIndent = replacer.repeat(indentSize); //формирование отступа для текущей строки
  const brecketIndent = replacer.repeat(indentSize - 1);

  const mergedObjects = Object.assign(data1, data2);
  const array = Object.entries(mergedObjects);
  //console.log(mergedObjects[value])
  const lines = array.map(([key, val]) => `${currentIndent}${key}:  ${val}`);
  const result = [`{`, ...lines, `${brecketIndent}}`].join('\n');

  

  console.log(result)
  return result;
};


export default function (filepath1, filepath2)  {

  
const data1 = fs.readFileSync(filepath1, 'utf-8');
const data2 = fs.readFileSync(filepath2, 'utf-8');
const parsedData1 = JSON.parse(data1);
const parsedData2 = JSON.parse(data2);

// console.log(parsedData1)
// console.log(parsedData2)
genDiff(parsedData1,parsedData2);
}  

