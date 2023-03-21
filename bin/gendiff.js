#!/usr/bin/env node
const { program } = require('commander');
import sample from '../src/sample.js'

const program = new Command();

program
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1', '-V, --version', 'output the version number')
    .option('-f, --format <type>', 'output format')
    .argument('<filepath1>', 'path to file1')
    .argument('<filepath2>', 'path to file2')
    .action((filepath1, filepath2) => {
     
      console.log(sample(filepath1, filepath2));
    });


  program.parse(process.argv);