import { readFileSync } from 'fs';
import { describe, expect, test } from '@jest/globals';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { expect, test } from '@jest/globals';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import genDiff from '../src/index.js';

const filename = fileURLToPath(import.meta.url);
const dirName = dirname(filename);
const readFile = (nameOfFile) => readFileSync(resolve(dirName, '..', '__fixtures__', nameOfFile), 'utf-8');

const cases = [
  ['__fixtures__/file1.json', '__fixtures__/file2.json', readFile('jsonTest.txt'), 'json'],
];

describe('output format', () => {
  test.each(cases)('difference %s and %s', (a, b, result, format = 'stylish') => {
    expect(genDiff(a, b, format)).toEqual(result);
  });
});
