import { RFC_STANDARD_EMAIL } from '../constants/regex';

export const regexValidator = (email: string): boolean => {
  const status = RFC_STANDARD_EMAIL.test(email);
  return status;
};
