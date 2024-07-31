import {View} from 'react-native';
import React, {useContext, useEffect} from 'react';

import {AuthContext} from '../../contexts';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Initial: React.FC = ({navigation}: any) => {
  const {isLogged} = useContext(AuthContext);

  const validate = async () => {
    const logged = await isLogged();

    if (!logged) {
      const viewedIntro = await AsyncStorage.getItem('@viewedIntro');

      if (viewedIntro) {
        navigation.replace('Login');
      } else {
        navigation.replace('Intro');
      }
    }
  };

  useEffect(() => {
    validate();
  }, []);
  return <View />;
};

export default Initial;
