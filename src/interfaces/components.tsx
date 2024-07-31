import {CheckBoxProps} from '@react-native-community/checkbox';
import {TextInputProps, TouchableOpacityProps} from 'react-native';
import {TextProps} from 'react-native-svg';

export interface iModal {
  icon: 'success' | 'error' | 'warning';
  title?: string;
  content?: string;
  isVisible: boolean;
  onClose?: any;
  buttons?: Array<iButton>;
}

export interface iDivider {
  direction?: 'horizontal' | 'vertical';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'biggest';
  line?: boolean;
}

export interface iInput extends TextInputProps {
  hasError?: boolean | undefined;
  showUserIcon?: boolean;
}

export interface iText extends TextProps {
  type?: 'paragraph' | 'title' | 'subtitle' | 'small';
  weight?:
    | 'bold'
    | 'normal'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  style?: any;
  color?: string;
}

export interface iButton extends TouchableOpacityProps {
  isLoading?: boolean;
  backgroundColor?: string;
  width?: number | 'full';
  height?: any;
  label?: string;
  children?: any;
  color?: string;
  weight?:
    | 'bold'
    | '100'
    | 'normal'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  outline?: boolean;
  gradientType?: 'orange' | 'blue' | 'black';
}

export interface iHeader {
  hasBack?: boolean;
}

export interface iTextInput extends TextInputProps {
  label?: string;
  touched?: boolean;
  error?: string;
  showUserIcon?: boolean;
}

export interface iCheckBox extends CheckBoxProps {
  label?: any;
}
