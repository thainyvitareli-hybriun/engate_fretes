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

const Login = ({navigation}: any) => {
  const {signIn} = useContext(AuthContext);
  const [modal, setModal] = useState({} as iModal);

  const onSubmit = async (values: iSession) => {
    await UserHooks.session(setModal, values, signIn);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
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
              label="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              value={formik.values.email}
              onChangeText={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
              touched={formik.touched.email}
              error={formik.errors.email}
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
            <Divider size="xs" />
            <Text style={styles.recoveryAccount}>Recuperar conta</Text>
            <Divider size="md" />
            <Button
              width={'full'}
              label={'Acessar conta'}
              isLoading={formik.isSubmitting}
              onPress={() => formik.handleSubmit()}
            />
            <Divider size="lg" />
            <Text weight="300" style={styles.createdAccount}>
              Registre-se
            </Text>
            <Divider size="sm" />
            <Button
              width={'full'}
              outline
              color={colors.primary}
              label={'Registrar uma nova conta'}
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
  email: yup
    .string()
    .email(errorMessages.email)
    .required(errorMessages.required),
  password: yup
    .string()
    .min(6, errorMessages.minLength(6))
    .required(errorMessages.required),
});

export default Login;
