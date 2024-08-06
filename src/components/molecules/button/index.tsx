/* eslint-disable react-native/no-inline-styles */
import pr from 'pr-unit';
import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  View,
} from 'react-native';

import {Text} from '../../atoms';
import {iButton} from '../../../interfaces/components';
import {colors, metrics} from '../../../assets/config';
import Animated, {
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import styles from './styles';

const WindowsWidth =
  Dimensions.get('window').width - metrics.body.padding * pr * 2;

const Button = ({
  label,
  children,
  isLoading,
  width = 270,
  height = 40,
  outline = false,
  backgroundColor = colors.darkLight,
  color = colors.darkLight,
  weight = 'normal',
  ...props
}: iButton) => {
  const returnSize = width !== 'full' ? width : WindowsWidth;
  const btnSize = useSharedValue(returnSize);
  const [showText, setShowText] = useState(true);

  const changeSize = () => {
    if (isLoading) {
      btnSize.value = withTiming(height);
    } else {
      const returnSize = width !== 'full' ? width : WindowsWidth;

      setTimeout(() => {
        btnSize.value = withTiming(returnSize);
      }, 500);
    }
  };

  const showContent = (result: any) => {
    setShowText(result.value > returnSize / 2);
  };

  useAnimatedReaction(
    () => {
      return btnSize;
    },
    result => {
      runOnJS(showContent)(result);
    },
  );

  const styled = useAnimatedStyle(() => {
    return {
      width: btnSize.value,
    };
  });

  useEffect(() => {
    changeSize();
  }, [isLoading, width]);

  return (
    <TouchableOpacity
      style={styles.container}
      disabled={isLoading}
      activeOpacity={0.8}
      {...props}>
      <Animated.View
        style={[
          styles.button,
          outline
            ? {borderColor: backgroundColor, borderStyle: 'dashed'}
            : {backgroundColor, borderColor: backgroundColor},
          {
            width: width !== 'full' ? width : '100%',
            height,
          },
          styled,
        ]}>
        {isLoading ? (
          <ActivityIndicator size={'small'} color={colors.button.color} />
        ) : children ? (
          children
        ) : showText ? (
          <Text
            weight={weight}
            color={color}
            style={{color: colors.button.color}}>
            {label}
          </Text>
        ) : (
          <ActivityIndicator size={'small'} color={colors.button.color} />
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Button;
