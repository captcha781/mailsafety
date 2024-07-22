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

export interface ValidateEmail {
  (email: string): Promise<ValidateEmailReturn | null>;
}

export interface IsDisposable {
  (records: MXRecord[]): Promise<boolean>;
}

export interface RetrieveMxRecords {
  (domain: string): Promise<MXRecord[] | null>;
}
