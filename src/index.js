import fs from 'fs';
import  _  from 'lodash';

const genDiff = (data1, data2, replacer =' ') => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2); 
  const sortedKeys = _.sortBy(keys);

  const indentSize = 1; // размер пробела
  const currentIndent = replacer.repeat(indentSize); //формирование отступа для текущей строки
  const brecketIndent = replacer.repeat(indentSize - 1);


  const lines = sortedKeys.map((key) => {
    if (!Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
      return `${currentIndent}+${currentIndent}${key}` //added

    } else if (Object.hasOwn(data1, key) && !Object.hasOwn(data2, key)) {
      return `${currentIndent}-${currentIndent}${key}` //deleted

    } else if (data1[key] === data2[key]) {
      return `${currentIndent}${currentIndent}${key}`  //unchanged

    // } else {
    //   result[key] = 'unchanged';
     }
  
  });

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

