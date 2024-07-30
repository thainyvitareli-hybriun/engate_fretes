import React from 'react';
import {Text as RNText} from 'react-native';

import styles from './styles';
import {iText} from '../../../interfaces/components';

const Text = ({
  children,
  type = 'paragraph',
  weight,
  color,
  ...props
}: iText) => {
  const style = props.style;
  delete props.style;
  return (
    <RNText
      children={children}
      style={[
        style,
        styles[type],
        color && {color},
        styles.fontFamily,
        weight && {fontWeight: weight},
      ]}
      {...props}
    />
  );
};

export default Text;
