interface MXRecord {
  priority: number;
  exchange: string;
}

interface ValidateEmailReturn {
  isEmail: boolean;
  localPart?: string;
  domain?: string;
  tld?: string;
  email?: string;
  mx?: [] | MXRecord[];
  isDisposable?: boolean;
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
