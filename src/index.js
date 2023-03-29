import fs from 'fs';
import  _  from 'lodash';

const genDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2); 

  const result = {};
  for (const key of keys) {
    //console.log(key)
    if (!Object.hasOwn(data1, key)) {
      result[key] = '+';
    } else if (!Object.hasOwn(data2, key)) {
      result[key] = '-';
    // } else if (data1[key] !== data2[key]) {
    //   result[key] = 'changed';
    } else {
      result[key] = '';
    }
  }
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

