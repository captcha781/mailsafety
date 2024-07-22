import { IsDisposable } from '../types';
import fs from 'fs';
import path from 'path';
import { splitRecords } from './splitRecords';

export const isDisposable: IsDisposable = async (records) => {
  const fileContents = await fs.promises.readFile(path.join(__dirname, '..', 'conf', 'disposable.txt'), 'utf8');
  for (let record of records) {
    if (fileContents.includes(splitRecords(record.exchange))) {
      return true;
    }
  }
  return false;
};
