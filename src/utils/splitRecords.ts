export const splitRecords = (mxRecord: string): string => {
  let splittedRecord = mxRecord.split('.');
  let domain = splittedRecord.slice(1).join('.');
  return domain;
};
