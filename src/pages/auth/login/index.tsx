import * as yup from 'yup';
import {useFormik} from 'formik';
import React, {useContext, useState} from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';

import styles from './styles';
import {UserHooks} from '../../../hooks';
import {Logo} from '../../../assets/svg';
import {AuthContext} from '../../../contexts';

import {iSession} from '../../../interfaces/hooks/user';
import {Divider, Text} from '../../../components/atoms';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, errorMessages} from '../../../assets/config';
import {Button, TextInput} from '../../../components/molecules';
import {iModal} from '../../../interfaces/components';
import {Modal} from '../../../components/organism';
import {Mask} from '@tboerc/maskfy';
import ButtonGradient from '../../../components/molecules/button-gradient';
const Login = ({navigation}: any) => {
  const {signIn} = useContext(AuthContext);
  const [modal, setModal] = useState({} as iModal);

  const onSubmit = async (values: iSession) => {
    await UserHooks.session(setModal, values, signIn);
  };

  const formik = useFormik({
    initialValues: {
      phone: '',
      password: '',
    },
    validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          keyboardShouldPersistTaps={'always'}
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Logo.Original />
          </View>

          <Divider size="lg" />

          <View style={styles.body}>
            <TextInput
              keyboardType="phone-pad"
              autoCapitalize="none"
              value={formik.values.phone}
              onChangeText={v =>
                formik.setFieldValue('phone', Mask.phone.value(v))
              }
              onBlur={formik.handleBlur('phone')}
              touched={formik.touched.phone}
              error={formik.errors.phone}
              showUserIcon
            />
            <Divider size="xs" />
            <TextInput
              label="Senha"
              secureTextEntry={true}
              autoCapitalize="none"
              value={formik.values.password}
              onChangeText={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
              touched={formik.touched.password}
              error={formik.errors.password}
            />
            <Divider size="md" />
            <ButtonGradient
              width={'full'}
              label={'FAZER LOGIN'}
              outline
              gradientType="orange"
              isLoading={formik.isSubmitting}
              onPress={() => formik.handleSubmit()}
            />
            <Divider size="md" />
            <Text style={styles.recoveryAccount}>Esqueci minha senha</Text>
            <Divider size="biggest" />
            <Text weight="300" style={styles.createdAccount}>
              Ainda não tenho uma conta
            </Text>
            <Divider size="sm" />
            <ButtonGradient
              width={'full'}
              outline
              gradientType="black"
              label={'CRIAR UMA CONTA GRÁTIS'}
              onPress={() => navigation.navigate('Register')}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Modal {...modal} />
    </SafeAreaView>
  );
};

const validationSchema = yup.object().shape({
  phone: yup.string().required(errorMessages.required),
  password: yup
    .string()
    .min(6, errorMessages.minLength(6))
    .required(errorMessages.required),
});

export default Login;
