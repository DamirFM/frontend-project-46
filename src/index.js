
import _ from 'lodash';
const obj1 = path.resolve('../__fixtures__/file1.json');
const obj2 = path.resolve('../__fixtures__/file2.json');

const firstObj = JSON.parse(obj1);
const secondObj = JSON.parse(obj2);
// BEGIN (write your solution here)
export default function genDiff(firstObj, secondObj) {
    const current = {};
    const keys1 = Object.keys(firstObj);
    const keys2 = Object.keys(secondObj);
    const uni = _.union(keys1, keys2);
    for (const key of uni) {
      const check1 = Object.hasOwn(firstObj, key);
      const check2 = Object.hasOwn(secondObj, key);
      if (!check2) {
        current[key] = 'deleted';
      } else if (check2) {
        current[key] = 'added';
      } if (check1 && check2) {
        current[key] = 'changed';
      } if (firstObj[key] === secondObj[key]) {
        current[key] = 'unchanged';
      }
    }
    return current;
  }
  
  // END