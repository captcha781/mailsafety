import { IsDisposable } from '../types';
import disposableList from '../conf/disposable.json';
import path from 'path';
import { splitRecords } from './splitRecords';

export const isDisposable: IsDisposable = async (records) => {
  const fileContents = disposableList;
  for (const record of records) {
    if (fileContents.includes(splitRecords(record.exchange))) {
      return true;
    }
  }
  return false;
};
