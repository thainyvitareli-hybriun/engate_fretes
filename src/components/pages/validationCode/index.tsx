import React, {useState} from 'react';
import {View} from 'react-native';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';

import {Divider, Text} from '../../atoms';
import {colors} from '../../../assets/config';
import {iValidationCode} from '../../../interfaces/components';
import styles from './styles';
import ButtonGradient from '../../molecules/button-gradient';
import ContentModal from '../../organism/contentModal';
import {Mask} from '@tboerc/maskfy';
import {Icons} from '../../../assets/svg';

const CELL_COUNT = 6;

const ValidationCode = ({
  rightCode,
  onSubmit,
  phone,
  sendVerificationCode,
}: iValidationCode) => {
  const [code, setCode] = useState<string>('');

  const [showError, setShowError] = useState<boolean>(false);

  const validateCode = () => {
    if (rightCode.toString() === code) {
      setShowError(false);
      onSubmit();
    } else {
      setShowError(true);
    }
  };

  const formatPhoneNumber = (phoneNumber: string) => {
    const regex = /^(\(\d{2}\) )(\d{5})-(\d{4})$/;

    if (!regex.test(phoneNumber)) {
      throw new Error('Número de telefone inválido');
    }

    return phoneNumber.replace(regex, '$1*****-$3');
  };

  return (
    <ContentModal isVisible={true}>
      <View style={styles.content}>
        <Text type="title" weight="700" style={styles.textCenter}>
          Confirme seu número
        </Text>

        <Divider size="xs" />
        <Text
          type="subtitle"
          color="#8E95AE"
          weight="600"
          style={styles.textCenter}>
          {formatPhoneNumber(Mask.phone.value(phone))}
        </Text>
        <Divider size="sm" />

        {rightCode ? (
          <>
            <Text color={colors.text.color} style={styles.textCenter}>
              Insira abaixo o código recebido
            </Text>
            <Divider size="sm" />

            <CodeField
              value={code}
              onChangeText={setCode}
              cellCount={CELL_COUNT}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <View
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}>
                  <Text style={styles.textCenter}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              )}
            />
            <Divider size="xs" />
          </>
        ) : (
          <>
            <Text color={colors.text.color} style={styles.textCenter}>
              Você já confirmou seu número de telefone? Se não, solicite o
              código de confirmação.
            </Text>
            <Divider size="sm" />
            <Icons.DashedLine />
            <Divider size="sm" />
            <Text style={styles.textCenter}>
              {' '}
              O código chegará ao número de telefone cadastrado.{' '}
            </Text>
          </>
        )}
        <Divider size="sm" />

        {showError && <Text color={'red'}>Código inválido</Text>}

        {rightCode ? (
          <ButtonGradient
            disabled={code.length !== CELL_COUNT}
            width={'full'}
            label="Confirmar"
            onPress={validateCode}
            gradientType="orange"
            outline
          />
        ) : (
          <ButtonGradient
            width={'full'}
            label="Solicitar Código"
            onPress={sendVerificationCode}
            gradientType="orange"
            outline
          />
        )}
      </View>
    </ContentModal>
  );
};

export default ValidationCode;
