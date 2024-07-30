// @ts-nocheck
import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import {iDivider} from '../../../interfaces/components';

const Divider = ({direction = 'vertical', size = 'sm', line}: iDivider) => {
  return (
    <View
      style={[
        direction === 'horizontal'
          ? styles.horizontal[size]
          : styles.vertical[size],
        line && styles.line,
      ]}
    />
  );
};

export default Divider;
