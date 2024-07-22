import dns from 'dns';

export const dnslookup = async (domain: string) => {
  return await dns.promises.resolveMx(domain);
};
