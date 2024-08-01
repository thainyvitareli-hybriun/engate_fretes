import {iModal} from './components';

export interface iUser {
  id: number;
  pv: number;
  name: string;
  phone: string;
  access_token: string;
  phone_confirmed?: boolean;
  profile?: Profile;
  status: number;
  total_coins: number;
}

export interface iAuth {
  user: iUser;
  signIn: (values: iUser) => void;
  signOut: () => void;
  isLogged: () => {};
}

export interface Profile {
  address?: Address;
  birth_date: string;
  cnh_expiry_date: any;
  document: string;
}

export interface Address {
  city: string;
  complement: string;
  created_at: string;
  id: number;
  latitude: string;
  longitude: string;
  neighborhood: string;
  number: string;
  state: string;
  street: string;
  updated_at: string;
  zip_code: string;
}
