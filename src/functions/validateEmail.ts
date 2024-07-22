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
export const validateEmail: ValidateEmail = async (email) => {
  let isRegexValid = regexValidator(email);
  if (!isRegexValid) {
    return {
      isEmail: false,
    };
  }

  let { domain, tld, localPart } = splitEmail(email);

  let result: ValidateEmailReturn = {
    isEmail: true,
    email: email,
    domain: domain,
    tld: `.${tld}`,
    localPart: localPart,
    mx: [],
    isDisposable: false,
  };

  let lookup = await dnslookup(domain);
  let isDisposableMail = await isDisposable(lookup);

  result['mx'] = lookup;
  result['isDisposable'] = isDisposableMail;

  return result;
};
