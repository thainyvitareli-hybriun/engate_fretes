import {View} from 'react-native';
import React, {useContext, useEffect} from 'react';

import {AuthContext} from '../../contexts';

const News: React.FC = ({navigation}: any) => {
  const {isLogged} = useContext(AuthContext);

  const validate = async () => {
    const logged = await isLogged();

    if (!logged) {
      navigation.replace('Login');
    }
  };

  useEffect(() => {
    validate();
  }, []);
  return <View />;
};

export default News;
