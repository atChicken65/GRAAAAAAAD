
export enum UserRole {
  OWNER = 'OWNER',
  ADMIN = 'ADMIN',
  GUEST = 'GUEST'
}

export interface FileRecord {
  id: string;
  name: string;
  size: string;
  type: string;
  cid: string;
  hash: string;
  owner: string;
  timestamp: string;
  status: 'Encrypted' | 'IPFS Uploaded' | 'Blockchain Recorded';
}

export interface AuditLog {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  details: string;
  txHash: string;
}
