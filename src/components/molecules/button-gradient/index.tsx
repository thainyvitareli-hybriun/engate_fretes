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
import LinearGradient from 'react-native-linear-gradient';

const WindowsWidth =
  Dimensions.get('window').width - metrics.body.padding * pr * 2;

const ButtonGradient = ({
  label,
  children,
  isLoading,
  width = 270,
  height = 40,
  outline = false,
  backgroundColor = colors.primary,
  color = 'white',
  weight = 'bold',
  gradientType,
  ...props
}: iButton) => {
  const returnSize = width !== 'full' ? width : WindowsWidth;
  const btnSize = useSharedValue(returnSize);
  const [showText, setShowText] = useState(true);

  const getGradientProps = (type: string) => {
    switch (type) {
      case 'orange':
        return {
          colors: ['#FF912C', '#FFCC17'],
          start: {x: 0.15, y: 0},
          end: {x: 1.07, y: 1},
        };
      case 'blue':
        return {
          colors: ['#20D7FF', '#2A69E3'],
          start: {x: 0.03, y: 0},
          end: {x: 1.01, y: 1},
        };
      // Adicione mais casos conforme necessário
      default:
        return {
          colors: ['#3D4151', '#686C7B'],
          start: {x: 0.0323, y: 0},
          end: {x: 1.035, y: 1},
        };
    }
  };

  const gradientProps = getGradientProps(gradientType || '');

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
    <LinearGradient
      colors={gradientProps.colors}
      start={gradientProps.start}
      end={gradientProps.end}
      style={styles.button}>
      <TouchableOpacity
        style={styles.container}
        disabled={isLoading}
        activeOpacity={0.8}
        {...props}>
        <Animated.View
          style={[
            styles.button,
            outline
              ? {borderColor: backgroundColor}
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
    </LinearGradient>
  );
};

export default ButtonGradient;
