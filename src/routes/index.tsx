import React, {useContext} from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import {AuthContext} from '../contexts';

const Routes: React.FC = () => {
  const {user} = useContext(AuthContext);

  return user?.token ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
