import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';
import {Icons} from '../../../assets/svg';
import {colors} from '../../../assets/config';
import {iInput} from '../../../interfaces/components';

const Input = ({hasError, ...props}: iInput) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(
    props.secureTextEntry ?? false,
  );

  return (
    <View
      style={[
        styles.container,
        hasError && styles.error,
        isFocused && styles.focus,
      ]}>
      <TextInput
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={styles.input}
        secureTextEntry={showPassword}
      />
      {props.secureTextEntry && (
        <TouchableOpacity
          style={styles.showPassword}
          onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <Icons.Eye fill={colors.input.icon} />
          ) : (
            <Icons.EyeOff fill={colors.input.icon} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
