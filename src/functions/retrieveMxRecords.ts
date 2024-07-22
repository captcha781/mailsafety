import { RetrieveMxRecords } from '../types';
import { dnslookup } from '../utils/dnsLookup';
import { isValidDomain } from '../utils/isValidDomain';

export const retrieveMxRecords: RetrieveMxRecords = async (domain) => {
  const isValid = isValidDomain(domain);
  if (!isValid) {
    throw new TypeError('Invalid domain encountered');
  }

  const records = dnslookup(domain);
  return records;
};
