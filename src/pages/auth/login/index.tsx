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
import LinearGradient from 'react-native-linear-gradient';

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
    // <LinearGradient
    //   colors={['#E1FDFE', '#F9FEFA', '#F9FEFA', '#FDF6DD', '#FFF4D1']}
    //   style={styles.gradient}
    //   // locations={[1, 1, 0.2]}
    //   start={{x: 1, y: 0}}
    //   end={{x: 0, y: 1}}>
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
              label="Telefone"
              keyboardType="phone-pad"
              autoCapitalize="none"
              value={formik.values.phone}
              onChangeText={v =>
                formik.setFieldValue('phone', Mask.phone.value(v))
              }
              onBlur={formik.handleBlur('phone')}
              touched={formik.touched.phone}
              error={formik.errors.phone}
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
    // </LinearGradient>
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
