export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  access_token: string;
}

export type UserState = { value: User | null }

export enum Key { BUDDY_USER = 'buddy-user' }