import * as yup from 'yup';
import {useFormik} from 'formik';
import {Mask} from '@tboerc/maskfy';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';

import styles from './styles';
import {UserHooks} from '../../../hooks';
import {Modal} from '../../../components/organism';
import {iModal} from '../../../interfaces/components';
import {Divider, Text} from '../../../components/atoms';
import {iRegister} from '../../../interfaces/hooks/user';
import {
  Button,
  CheckBox,
  Header,
  TextInput,
} from '../../../components/molecules';

const Register: React.FC = () => {
  const [modal, setModal] = useState<iModal>();
  const onSubmit = async (values: iRegister) => {
    await UserHooks.register(setModal, values, formik.resetForm);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
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
          <Header hasBack={true} />
          <View style={styles.body}>
            <Text type="title">Criar conta</Text>

            <Divider size="md" />
            <TextInput
              {...{
                label: 'Nome completo',
                value: formik.values.name,
                onChangeText: formik.handleChange('name'),
                onBlur: formik.handleBlur('name'),
                touched: formik.touched.name,
                error: formik.errors.name,
              }}
            />
            <Divider size="xs" />
            <TextInput
              {...{
                label: 'E-mail',
                keyboardType: 'email-address',
                autoCapitalize: 'none',
                value: formik.values.email,
                onChangeText: formik.handleChange('email'),
                onBlur: formik.handleBlur('email'),
                touched: formik.touched.email,
                error: formik.errors.email,
              }}
            />
            <Divider size="xs" />
            <TextInput
              {...{
                label: 'Celular',
                keyboardType: 'phone-pad',
                value: formik.values.phone,
                onChangeText: value => {
                  formik.setFieldValue('phone', Mask.phone.value(value));
                },
                onBlur: formik.handleBlur('phone'),
                touched: formik.touched.phone,
                error: formik.errors.phone,
              }}
            />
            <Divider size="xs" />
            <TextInput
              {...{
                label: 'Crie uma senha',
                secureTextEntry: true,
                value: formik.values.password,
                onChangeText: formik.handleChange('password'),
                onBlur: formik.handleBlur('password'),
                touched: formik.touched.password,
                error: formik.errors.password,
              }}
            />

            <Divider size="xs" />
            <CheckBox {...{label: <Text>Aceito os termos de uso</Text>}} />
          </View>

          <View style={styles.footer}>
            <Button
              width={'full'}
              label="Criar conta"
              isLoading={formik.isSubmitting}
              onPress={formik.handleSubmit}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Modal {...modal} />
    </SafeAreaView>
  );
};

const validationSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup
    .string()
    .email('Informe um e-mail válido')
    .required('Campo obrigatório'),
  phone: yup.string().required('Campo obrigatório'),
  password: yup
    .string()
    .min(6, 'Insira pelo menos 6 caracteres')
    .required('Campo obrigatório'),
});

export default Register;
