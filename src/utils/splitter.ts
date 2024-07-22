export const splitEmail = (email: string) => {
  const [localPart, domain] = email.split('@');
  const tld = domain.split('.').pop();
  return { localPart, domain, tld };
};
