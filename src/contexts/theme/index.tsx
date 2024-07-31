import React, {createContext, useContext} from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {View} from 'react-native';

const ThemeContext = createContext('ThemeContext');

export const useTheme = () => useContext(ThemeContext);

const themeValue = {
  colors: {
    primary: '#E1FDFE',
    secondary: '#F9FEFA',
    tertiary: '#FDF6DD',
    accent: '#FFF4D1',
  },
  // Adicione qualquer outra propriedade de tema que você queira compartilhar
};

const CustomThemeProvider = ({children}: any) => {
  return (
    <ThemeContext.Provider value={'themeValue'}>
      <LinearGradient
        colors={['#E1FDFE', '#F9FEFA', '#F9FEFA', '#FDF6DD', '#FFF4D1']}
        style={styles.gradient}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}>
        {children}
      </LinearGradient>
    </ThemeContext.Provider>
  );
};

export default CustomThemeProvider;
