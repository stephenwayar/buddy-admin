export type User = {
  id: number;
  token: string;
  email: string;
  first_name: string;
  last_name: string;
  created_at: string;
  updated_at: string;
  email_verified_at: string | null;
}

export type UserState = { value: User | null }

export enum Key { BUDDY_USER = 'buddy-user' }