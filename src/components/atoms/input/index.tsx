import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';
import {Icons} from '../../../assets/svg';
import {colors} from '../../../assets/config';
import {iInput} from '../../../interfaces/components';
import LinearGradient from 'react-native-linear-gradient';

const Input = ({hasError, showIcon = false, icon, ...props}: iInput) => {
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
      {props.secureTextEntry && (
        <TouchableOpacity
          style={styles.showPassword}
          onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <Icons.CloseLock fill={colors.input.icon} />
          ) : (
            <Icons.OpenLock fill={colors.input.icon} />
          )}
        </TouchableOpacity>
      )}
      {showIcon && <View style={styles.showUserIcon}>{icon}</View>}
      <TextInput
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={styles.input}
        secureTextEntry={showPassword}
      />
    </View>
  );
};

export default Input;
