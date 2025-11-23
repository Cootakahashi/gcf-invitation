export enum AppState {
  LOCKED = 'LOCKED',
  UNLOCKING = 'UNLOCKING',
  UNLOCKED = 'UNLOCKED',
  ACCEPTED = 'ACCEPTED',
  DESTROYED = 'DESTROYED'
}

export interface InvitationDetails {
  host: string;
  title: string;
  date: string;
  time: string;
  location: string;
  message: string;
}