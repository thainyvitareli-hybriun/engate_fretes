import pr from 'pr-unit';
import React from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {default as RNModal} from 'react-native-modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Divider, Text} from '../../atoms';
import {colors} from '../../../assets/config';
import {iContentModal} from '../../../interfaces/components';
import styles from './styles';

const ContentModal = ({...props}: iContentModal) => {
  const safeArea = useSafeAreaInsets();

  return (
    <RNModal
      animationIn={'fadeInUp'}
      animationOut={'fadeOutDown'}
      isVisible={props.isVisible}
      style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          width: '100%',
        }}>
        <View
          style={[
            styles.containerModal,
            {padding: safeArea.bottom || 50 * pr},
            props.full && {height: '100%'},
          ]}>
          <ScrollView keyboardShouldPersistTaps="always">
            {(!!props.onClose || props.title) && (
              <>
                <View style={styles.header}>
                  <Text type="subtitle">{props.title}</Text>

                  {props.onClose && (
                    <TouchableOpacity onPress={props.onClose}>
                      <Text type="title" color={colors.text.color}>
                        X
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>

                <Divider />
              </>
            )}

            {props.children}
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </RNModal>
  );
};

export default ContentModal;
