//@ts-nocheck
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {AuthProvider} from './contexts';
import Routes from './routes/';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
