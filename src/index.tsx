//@ts-nocheck
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {AuthProvider} from './contexts';
import Routes from './routes/';
import CustomThemeProvider from './contexts/theme';

const theme = {
  ...DefaultTheme,
  colors: {...DefaultTheme.colors, background: 'transparent'},
};

const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <NavigationContainer theme={theme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </CustomThemeProvider>
  );
};

export default App;
