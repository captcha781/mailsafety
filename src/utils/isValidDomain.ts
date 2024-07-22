import { RFC_STANDARD_DOMAIN } from '../constants/regex';

export const isValidDomain = (domain: string): boolean => {
  const isValid = RFC_STANDARD_DOMAIN.test(domain);
  return isValid;
};
