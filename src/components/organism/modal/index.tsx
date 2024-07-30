import {View} from 'react-native';
import Lottie from 'lottie-react-native';
import React, {useEffect, useState} from 'react';
import {default as RNModal} from 'react-native-modal';

import styles from './styles';
import {Divider, Text} from '../../atoms';
import {iModal} from '../../../interfaces/components';

const Icon = {
  error: require('../../../assets/animations/error.json'),
  success: require('../../../assets/animations/success.json'),
  warning: require('../../../assets/animations/warning.json'),
};

const Title = {
  success: 'Tudo certo!',
  error: 'Tivemos um problema!',
  warning: 'Atenção',
};

const Modal = ({...props}: iModal) => {
  return (
    <RNModal
      animationIn={'fadeInUp'}
      animationOut={'fadeOutDown'}
      isVisible={props.isVisible}
      style={styles.container}
      onBackdropPress={props.onClose}>
      <View style={styles.containerModal}>
        <View style={{width: '100%', height: 100}}>
          <Lottie source={Icon[props.icon]} autoPlay loop={false} />
        </View>
        <Text type="subtitle">{props.title ?? Title[props.icon]}</Text>
        <Divider size="xs" />
        <Text type="paragraph" style={styles.paragraph}>
          {props.content}
        </Text>

        {props.buttons?.map((button: any, index: number) => {
          return (
            <View key={index}>
              <Divider size="xs" />
              {button}
            </View>
          );
        })}
      </View>
    </RNModal>
  );
};

export default Modal;
