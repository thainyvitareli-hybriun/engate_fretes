import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';
import {Icons} from '../../../assets/svg';
import {colors} from '../../../assets/config';
import {iInput} from '../../../interfaces/components';
import LinearGradient from 'react-native-linear-gradient';

const Input = ({hasError, showUserIcon = false, ...props}: iInput) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(
    props.secureTextEntry ?? false,
  );

  return (
    // <LinearGradient
    //   colors={['#E1FDFE', '#F9FEFA', '#F9FEFA', '#FDF6DD', '#FFF4D1']}
    //   style={styles.gradient}
    //   start={{x: 1, y: 0}}
    //   end={{x: 0, y: 1}}>
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
      {showUserIcon && (
        <View style={styles.showUserIcon}>
          <Icons.User />
        </View>
      )}
      <TextInput
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={styles.input}
        secureTextEntry={showPassword}
      />
    </View>
    // </LinearGradient>
  );
};

export default Input;
