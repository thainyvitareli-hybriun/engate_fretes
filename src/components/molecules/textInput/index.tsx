import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import {Divider, Text, Input} from '../../atoms';
import {iTextInput} from '../../../interfaces/components';

const TextInput = ({label, touched, error, ...props}: iTextInput) => {
  return (
    <View>
      {label && (
        <>
          <Text>{label}</Text>
          <Divider direction="vertical" size="xs" />
        </>
      )}

      <Input hasError={touched && !!error} {...props} />
      <Divider direction="vertical" size="xs" />
      {touched && error && (
        <Text type="small" style={styles.labelError}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default TextInput;
