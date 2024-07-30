import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import {Icons, Logo} from '../../../assets/svg';
import {iHeader} from '../../../interfaces/components';

const Header = ({hasBack}: iHeader) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {hasBack && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons.ArrowLeft fill={'#000000'} />
        </TouchableOpacity>
      )}
      {!hasBack && <View />}

      <Logo.Small />
    </View>
  );
};

export default Header;
