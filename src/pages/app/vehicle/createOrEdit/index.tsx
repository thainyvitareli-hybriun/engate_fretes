import React, {useEffect, useState} from 'react';
import {
  iCreateVehicle,
  iUpdateVehicle,
  iVehicle,
} from '../../../../interfaces/vehicle';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {Header, TextInput} from '../../../../components/molecules';
import {Divider, Text} from '../../../../components/atoms';
import ButtonGradient from '../../../../components/molecules/button-gradient';
import Icons from '../../../../assets/svg/icons';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {useFormik} from 'formik';
import {errorMessages} from '../../../../assets/config';
import * as Yup from 'yup';
import {VehicleHooks} from '../../../../hooks';
import {Mask} from '@tboerc/maskfy';
import {
  vehicleStatusText,
  vehicleStatusBagdeWidth,
  vehicleStatusColor,
  vehicleStatusTextColor,
} from '../../../../assets/config/vehicle-status';

const INITIAL_VALUES = {
  license_plate: '',
  color: '',
  model: '',
  brand: '',
  year: '',
  vehicle_front: {uri: '', type: '', fileName: ''},
  vehicle_back: {uri: '', type: '', fileName: ''},
  vehicle_left: {uri: '', type: '', fileName: ''},
  vehicle_right: {uri: '', type: '', fileName: ''},
  document: {uri: '', type: '', fileName: ''},
  status: '',
  id: '',
};

const DOC_ICONS: any = {
  vehicle_front: <Icons.CarFront />,
  vehicle_back: <Icons.CarFront />,
  vehicle_rigth: <Icons.CarFront />,
  vehicle_left: <Icons.CarFront />,
  document: <Icons.Document />,
};

export default function CreateOrEditVehicle({route: {params}}: any) {
  const [editable, setEditable] = useState(false);
  const [vehicle, setVehicle] = useState<iVehicle>({} as iVehicle);
  const [isLoading, setIsLoading] = useState(false);

  let {id} = params || {};

  useEffect(() => {
    console.log('CHAMOU O EFFECT !!!!!', id);
    getVehicle();
  }, [id]);

  useEffect(() => {
    isEditable();
  }, [id]);

  const isEditable = () => {
    if (id) setEditable(true);
  };

  const getVehicle = async () => {
    const result = await VehicleHooks.findOne({id: id});

    if (result) {
      setFormikValues(result);
      setVehicle(vehicle);
    }
  };

  const setFormikValues = (values: iVehicle) => {
    console.log(values);
    formik.setFieldValue('id', values?.id);
    formik.setFieldValue(
      'license_plate',
      Mask.custom.value(values.license_plate, 'AAA-9S99'),
    );
    formik.setFieldValue('status', values.status);
    formik.setFieldValue('brand', values.brand);
    formik.setFieldValue('model', values.model);
    formik.setFieldValue('color', values.color);
    formik.setFieldValue('year', values.year.toString());
  };

  const onCreate = async (values: iCreateVehicle) => {
    setIsLoading(true);

    try {
      const result = await VehicleHooks.create(values);

      if (result) {
        Alert.alert('Cadastrado com sucesso');
        setFormikValues(result);
        setEditable(true);
      }
    } catch (error: any) {
      console.log(error);
      Alert.alert('Erro ao realizar ação', error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onUpdate = async (values: iUpdateVehicle) => {
    setIsLoading(true);

    try {
      const result = await VehicleHooks.update({
        color: values.color,
        license_plate: values.license_plate,
        status: values.status ? values.status : undefined,
        id: id,
      });

      setFormikValues(result);
    } catch (error: any) {
      Alert.alert('Erro', error?.response?.data?.message);
      console.log(error?.response?.data);
      setFormikValues(vehicle);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (values: any) => {
    if (id) {
      onUpdate(values);
    } else {
      onCreate(values);
    }
  };

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit: onSubmit,
  });

  const onSelectDocImage = (res: ImagePickerResponse, field: string) => {
    if (!res.didCancel) {
      const file = res.assets?.[0];

      if (file) {
        formik.setFieldValue(field, file);
      }
    }
  };

  const onDeleteImage = (field: string) => {
    formik.setFieldValue(field, {uri: '', type: '', fileName: ''});
  };

  const DocImagePicker = ({
    field,
    label,
    from,
  }: {
    field: string;
    label: string;
    from: 'galery' | 'camera';
  }) => (
    <TouchableOpacity
      onPress={async () => {
        from == 'camera'
          ? await launchCamera(
              {
                mediaType: 'photo',
                quality: 0.7,
                maxWidth: 500,
                maxHeight: 500,
                cameraType: field === 'doc_image_selfie' ? 'front' : 'back',
              },
              res => onSelectDocImage(res, field),
            ).catch(error => console.log(error))
          : await launchImageLibrary(
              {
                mediaType: 'photo',
                quality: 0.7,
                maxWidth: 500,
                maxHeight: 500,
              },
              res => onSelectDocImage(res, field),
            ).catch(error => console.log(error));
      }}
      activeOpacity={0.7}
      style={styles.docImageWrapper}>
      {
        //@ts-ignore
        formik?.values[field]?.uri ? (
          <>
            <Image
              //@ts-ignore
              source={{uri: formik.values[field]?.uri}}
              resizeMode="cover"
              style={styles.docImage}
            />
            <TouchableOpacity
              style={styles.docImageIcon}
              onPress={() => onDeleteImage(field)}>
              <Icons.Close />
            </TouchableOpacity>
          </>
        ) : (
          <View
            style={[
              styles.unselectedDocImage,
              //@ts-ignore
              formik.touched[field] &&
                //@ts-ignore
                formik.errors[field] &&
                styles.borderError,
            ]}>
            {DOC_ICONS[field]}

            <Divider size="xs" />

            <Text
              type="small"
              color={
                //@ts-ignore
                formik.touched[field] && formik.errors[field]
                  ? 'red'
                  : '#95B7F1'
              }
              style={styles.textCenter}>
              {label}
            </Text>
          </View>
        )
      }
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          keyboardShouldPersistTaps={'always'}
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}>
          <Header.Alt hasBack title="Meus veículos" />

          <View style={styles.form}>
            <Text style={styles.formTitle} type="subtitle">
              Informações do veículo
            </Text>

            <TextInput
              label="Placa"
              placeholder="Placa"
              onChangeText={e => {
                const custom = Mask.custom.value(e.toUpperCase(), 'AAA-9S99');
                formik.setFieldValue('license_plate', custom);
              }}
              value={formik.values.license_plate}
              touched={formik.touched.license_plate}
              error={formik.errors.license_plate}
              showIcon
              icon={<Icons.Document />}
            />
            <TextInput
              label="Marca do veículo"
              placeholder="Marca"
              onChangeText={e =>
                formik.setFieldValue('brand', e.toLocaleUpperCase())
              }
              touched={formik.touched.brand}
              error={formik.errors.brand}
              value={formik.values.brand}
              showIcon
              icon={<Icons.CarFront />}
              editable={!id}
            />
            <TextInput
              label="Modelo do veículo"
              placeholder="Modelo"
              value={formik.values.model}
              onChangeText={e =>
                formik.setFieldValue('model', e.toLocaleUpperCase())
              }
              touched={formik.touched.model}
              error={formik.errors.model}
              showIcon
              editable={!id}
              icon={<Icons.CarFront />}
            />
            <TextInput
              label="Cor do veículo"
              placeholder="Cor"
              showIcon
              value={formik.values.color}
              onChangeText={e =>
                formik.setFieldValue('color', e.toLocaleUpperCase())
              }
              touched={formik.touched.color}
              error={formik.errors.color}
              icon={<Icons.CarFront />}
            />
            <TextInput
              label="Ano do veículo"
              placeholder="Ano"
              showIcon
              value={formik.values.year}
              editable={!id}
              onChangeText={e => {
                const custom = Mask.custom.value(e.toUpperCase(), '9999');

                formik.setFieldValue('year', custom);
              }}
              icon={<Icons.CarFront />}
              touched={formik.touched.year}
              error={formik.errors.year}
            />
            {editable && Number(formik.values.status) == 2 ? (
              <ButtonGradient
                gradientType="black"
                outline
                label="Inativar veículo"
              />
            ) : null}

            {!editable && (
              <View style={styles.contentImage}>
                <View style={styles.row}>
                  <DocImagePicker
                    field="document"
                    label="Documento do veículo"
                    from="galery"
                  />
                  <DocImagePicker
                    field="vehicle_front"
                    label="Frente do veículo"
                    from="galery"
                  />
                  <DocImagePicker
                    field="vehicle_back"
                    label="Traseira do veículo"
                    from="galery"
                  />
                </View>
                <View style={styles.row}>
                  <DocImagePicker
                    field="vehicle_left"
                    label="Lateral esqueda"
                    from="galery"
                  />
                  <DocImagePicker
                    field="vehicle_right"
                    label="Lateral direita"
                    from="galery"
                  />
                </View>
              </View>
            )}
            <ButtonGradient
              gradientType="orange"
              outline
              color="white"
              label={editable ? 'Salvar' : 'Adicionar'}
              onPress={() => formik.handleSubmit()}
              isLoading={isLoading}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const validationSchema = Yup.object().shape({
  vehicle_front: Yup.object().when('id', {
    is: (id: string | number) => id == '',
    then: schema =>
      schema.test('has-uri', errorMessages.required, val => {
        //@ts-ignore
        return val['uri'];
      }),
    otherwise: schema => schema.notRequired(),
  }),
  vehicle_back: Yup.object().when('id', {
    is: (id: string | number) => id == '',
    then: schema =>
      schema.test('has-uri', errorMessages.required, val => {
        //@ts-ignore
        return val['uri'];
      }),
    otherwise: schema => schema.notRequired(),
  }),

  vehicle_right: Yup.object().when('id', {
    is: (id: string | number) => id == '',
    then: schema =>
      schema.test('has-uri', errorMessages.required, val => {
        //@ts-ignore    //@ts-ignore
        return val['uri'];
      }),
    otherwise: schema => schema.notRequired(),
  }),
  vehicle_left: Yup.object().when('id', {
    is: (id: string | number) => id == '',
    then: schema =>
      schema.test('has-uri', errorMessages.required, val => {
        //@ts-ignore
        return val['uri'];
      }),
    otherwise: schema => schema.notRequired(),
  }),
  status: Yup.string().optional(),
  license_plate: Yup.string().required(errorMessages.required),
  color: Yup.string().required(errorMessages.required),
  model: Yup.string().required(errorMessages.required),
  brand: Yup.string().required(errorMessages.required),
  year: Yup.string().when('id', {
    is: (id: string | number) => id == '',
    then: schema =>
      schema
        .min(4, 'Insira o ano com os 4 digitos')
        .max(4, 'Quantidade máxima de digitos excedido')
        .required(errorMessages.required),

    otherwise: schema => schema.notRequired(),
  }),
});
