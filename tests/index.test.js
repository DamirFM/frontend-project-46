import fs from 'fs';
// eslint-disable-next-line import/no-extraneous-dependencies
import { expect, test } from '@jest/globals';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import genDiff from '../src/index.js';

const filename = fileURLToPath(import.meta.url);
const dirName = dirname(filename);

const getFixturePath = (FileName) => fs.readFileSync(resolve(dirName, '..', '__fixtures__', FileName), 'utf-8');

test('genDiff', () => {
  expect(genDiff(JSON.parse(getFixturePath('file1.json')), JSON.parse(getFixturePath('file2.json')))).toEqual(getFixturePath('jsonTest.txt'));
});
