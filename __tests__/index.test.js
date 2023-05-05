import { readFileSync } from 'fs';
import { expect, test } from '@jest/globals';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { expect, test } from '@jest/globals';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import genDiff from '../src/index.js';

const filename = fileURLToPath(import.meta.url);
const dirName = dirname(filename);
const readFile = (nameOfFile) => readFileSync(resolve(dirName, '..', '__fixtures__', nameOfFile), 'utf-8');

test('TEST', () => {
  expect(genDiff(JSON.parse(readFile('file1.json')), JSON.parse(readFile('file2.json')))).toEqual(readFile('jsonTest.txt'));
});
