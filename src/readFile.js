import fs from 'fs';
// eslint-disable-next-line import/named
import { genDiff } from './index.js';

export default (filepath1, filepath2) => {
  const data1 = fs.readFileSync(filepath1, 'utf-8');
  const data2 = fs.readFileSync(filepath2, 'utf-8');
  const parsedData1 = JSON.parse(data1);
  const parsedData2 = JSON.parse(data2);
  genDiff(parsedData1, parsedData2);
};
