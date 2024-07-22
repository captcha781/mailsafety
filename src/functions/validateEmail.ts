import { ValidateEmail, ValidateEmailReturn } from '../types';
import { dnslookup } from '../utils/dnsLookup';
import { isDisposable } from '../utils/isDisposable';
import { regexValidator } from '../utils/regex';
import { splitEmail } from '../utils/splitter';

/**
 * This function validates the email address and returns an object containing the email and its components.
 *
 * @param email string
 * @returns {Promise<ValidateEmailReturn | any | null | void>}
 *
 */
export const validateEmail: ValidateEmail = async (email): Promise<ValidateEmailReturn | null> => {
  const isRegexValid = regexValidator(email);
  if (!isRegexValid) {
    return {
      isEmail: false,
    };
  }

  const { domain, tld, localPart } = splitEmail(email);

  const result: ValidateEmailReturn = {
    isEmail: true,
    email,
    domain,
    tld: `.${tld}`,
    localPart,
    mx: [],
    isDisposable: false,
  };

  const lookup = await dnslookup(domain);
  const isDisposableMail = await isDisposable(lookup);

  result.mx = lookup;
  result.isDisposable = isDisposableMail;

  return result;
};
