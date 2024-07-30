import {iModal} from './components';

export interface iUser {
  pv: number;
  name: string;
  phone: string;
  access_token: string;
}

export interface iAuth {
  user: iUser;
  signIn: (values: iUser) => void;
  signOut: () => void;
  isLogged: () => {};
}
