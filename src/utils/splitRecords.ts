export const splitRecords = (mxRecord: string): string => {
  const splittedRecord = mxRecord.split('.');
  const domain = splittedRecord.slice(1).join('.');
  return domain;
};
