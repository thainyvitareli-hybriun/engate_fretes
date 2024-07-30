import {iModal} from './components';

export interface iUser {
  name: string;
  email: string;
  token: string;
}

export interface iAuth {
  user: iUser;
  signIn: (values: iUser) => void;
  signOut: () => void;
  isLogged: () => {};
}
