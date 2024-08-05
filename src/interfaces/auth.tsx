import {iModal} from './components';

export interface iUser {
  id: number;
  pv: number;
  name: string;
  avatar?: string;
  email: string;
  phone: string;
  access_token: string;
  phone_confirmed: boolean;
  profile?: iProfile;
  status: number;
  total_coins: number;
  vehicles?: [
    {
      id: number;
      brand: string;
      model: string;
    },
  ];
  company?: {};
}

export interface iAuth {
  user: iUser;
  signIn: (values: iUser) => void;
  signOut: () => void;
  isLogged: () => {};
  updateUser: (data: iUser) => void;
}

export interface iProfile {
  address?: iAddress;
  birth_date: string;
  cnh_expiry_date: any;
  document: string;
}

export interface iAddress {
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
