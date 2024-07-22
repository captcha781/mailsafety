export interface MXRecord {
  priority: number;
  exchange: string;
}

export interface ValidateEmailReturn {
  isEmail: boolean;
  localPart?: string;
  domain?: string;
  tld?: string;
  email?: string;
  mx?: [] | MXRecord[];
  isDisposable?: boolean;
  isValid?: boolean;
}

export type ValidateEmail = (email: string) => Promise<ValidateEmailReturn | null>;

export type IsDisposable = (records: MXRecord[]) => Promise<boolean>;

export type RetrieveMxRecords = (domain: string) => Promise<MXRecord[] | null>;
