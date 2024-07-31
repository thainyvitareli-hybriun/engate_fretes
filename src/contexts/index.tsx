import {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {api} from '../services';
import {iAuth, iUser} from '../interfaces/auth';

export const AuthContext = createContext<iAuth>({} as iAuth);

export const AuthProvider: React.FC = ({children}: any) => {
  const [user, setUser] = useState<iUser>({} as iUser);

  const signIn = async (values: iUser) => {
    await AsyncStorage.setItem('@user', JSON.stringify(values));
    setUser(values);
  };

  const signOut = async () => {
    await AsyncStorage.clear();
    setUser({} as iUser);
  };

  const isLogged = async () => {
    let rawUser = (await AsyncStorage.getItem('@user')) || '{}';
    rawUser = JSON.parse(rawUser);

    //@ts-ignore
    if (rawUser?.access_token) {
      //@ts-ignore
      api.defaults.headers['Authorization'] = `Bearer ${rawUser.access_token}`;

      try {
        await api.get('/auth/me');
      } catch (error) {
        return false;
      }

      //@ts-ignore
      setUser(rawUser);
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{user, signIn, signOut, isLogged}}>
      {children}
    </AuthContext.Provider>
  );
};