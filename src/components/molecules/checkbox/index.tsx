import React from 'react';
import {View} from 'react-native';
import {default as RNCheckBox} from '@react-native-community/checkbox';

import styles from './styles';
import {Text} from '../../atoms';
import {iCheckBox} from '../../../interfaces/components';

const Checkbox = ({label, ...props}: iCheckBox) => {
  return (
    <View style={styles.container}>
      <RNCheckBox {...props} />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

export default Checkbox;
