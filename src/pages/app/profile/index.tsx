import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import Text from '../../../components/atoms/text';
import Header from '../../../components/molecules/header';
import {useContext, useEffect, useRef, useState} from 'react';
import {AuthContext} from '../../../contexts';
import Icons from '../../../assets/svg/icons';
import {iAddress} from '../../../interfaces/auth';
import {Mask} from '@tboerc/maskfy';
import userPvs from '../../../assets/config/user-pvs';
import {Divider} from '../../../components/atoms';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {UserHooks} from '../../../hooks';
import ContentModal from '../../../components/organism/contentModal';
import ButtonGradient from '../../../components/molecules/button-gradient';
import {
  userStatusColor,
  userStatusText,
} from '../../../assets/config/user-status';
import {metrics} from '../../../assets/config';

export default function Profile({id}: {id?: any}) {
  const {user, updateUser} = useContext(AuthContext);

  const [updatePhone, setUpdatePhone] = useState(false);
  const [updateEmail, setUpdateEmail] = useState(false);
  const [updateAddress, setUpdateAddress] = useState(false);

  const [newValue, setNewValue] = useState('');

  const [isMyProfile, setIsMyProfile] = useState(true);
  const [isOpenPictureModal, setIsOpenPictureModal] = useState(false);

  const typeUser = {
    1: 'Consumidor',
    2: 'Motorista autônomo',
    3: 'Motorista casual',
    4: 'Transportadora',
    5: 'Colaborador',
  };

  const onFocusInputStyle = {
    borderBlockColor: 'orange',
    borderBottomWidth: 1,
  };

  const updateProfile = async ({
    name,
    value,
  }: {
    name: string;
    value: string;
  }) => {
    const formData = new FormData();

    if (name == 'address') {
      //@ts-ignore
      value = parseAddress(value);
    }

    formData.append(name, JSON.stringify(value));

    try {
      const result = await UserHooks.update(formData);

      if (result) {
        setUpdateAddress(false);
        setUpdateEmail(false);
        setUpdatePhone(false);

        setNewValue('');

        updateUser({
          email: result.email,
          phone: result.phone,
        });
      }
    } catch (error: any) {
      Alert.alert('Erro', error?.response?.data?.message);
    }
  };

  const parseAddress = (addressString: string) => {
    const addressPattern =
      /(.+),\s*(\d+)\s*-\s*(.+),\s*(.+)\s*-\s*(\w+)\s*-\s*(\d+)/;
    const match = addressPattern.exec(addressString);

    if (!match) {
      throw new Error('Endereço no formato inválido');
    }

    return {
      street: match[1].trim(),
      number: match[2].trim(),
      neighborhood: match[3].trim(),
      city: match[4].trim(),
      state: match[5].trim(),
      zip_code: match[6].trim(),
      complement: '',
    };
  };

  const RenderInfo = ({
    label,
    value,
    canUpdate = false,
    openUpdate,
    setOpenUpdate = false,
    name,
  }: {
    label: string;
    value: string;
    name: string;
    canUpdate?: boolean;
    openUpdate?: any;
    setOpenUpdate?: any;
  }) => {
    const inputRef = useRef(null);

    if (openUpdate) {
      setTimeout(() => {
        //@ts-ignore
        inputRef.current.focus();
      }, 100);
    }

    return (
      <View style={{justifyContent: 'space-between'}}>
        <View style={styles.row}>
          <Icons.CircleOrange />
          <Text>{label} -</Text>

          <TextInput
            editable={canUpdate}
            style={openUpdate ? onFocusInputStyle : {}}
            ref={inputRef}
            value={newValue && openUpdate ? newValue : value}
            onChangeText={e => {
              name == 'phone'
                ? setNewValue(Mask.phone.value(e))
                : setNewValue(e);
            }}
          />

          {canUpdate ? (
            openUpdate ? (
              //@ts-ignore
              <View style={styles.updateIcons}>
                <TouchableOpacity
                  onPress={() => updateProfile({name, value: newValue})}>
                  <Icons.Check />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setOpenUpdate(), setNewValue('');
                  }}>
                  <Icons.Close />
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity onPress={setOpenUpdate}>
                <Text>Alterar</Text>
              </TouchableOpacity>
            )
          ) : null}
        </View>
      </View>
    );
  };

  const onTakePicture = async (res: ImagePickerResponse) => {
    if (!res.didCancel) {
      const file = res.assets?.[0];

      if (file) {
        const formData = new FormData();

        formData.append('avatar', {
          uri: file.uri,
          name: file.fileName,
          type: file.type,
        });

        const resp = await UserHooks.update(formData);

        // ??
        updateUser({
          profile: {
            // @ts-ignore
            avatar: file.uri,
          },
        });
        // }

        return true;
      }
    }
  };

  const pickImageFromCamera = async () => {
    await launchCamera(
      {
        mediaType: 'photo',
        quality: 0.7,
        maxWidth: 500,
        maxHeight: 500,
        cameraType: 'front',
      },
      onTakePicture,
    );

    setIsOpenPictureModal(false);
  };

  const pickImageFromGalery = async () => {
    await launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.7,
        maxWidth: 500,
        maxHeight: 500,
      },
      onTakePicture,
    );

    setIsOpenPictureModal(false);
  };

  const Status = () => (
    <View style={[styles.status]}>
      <View style={styles.row}>
        <Icons.CircleOrange />
        <Text>Situação do cadastro</Text>
      </View>
      <View
        style={{
          //@ts-ignore
          backgroundColor: userStatusColor[user.status],
          width: 100,
          alignItems: 'center',
          borderRadius: metrics.button.radius,
        }}>
        <Text color="white" weight="600">
          {
            //@ts-ignore
            userStatusText[user.status]
          }
        </Text>
      </View>
    </View>
  );

  const formateAddressToString = (address?: iAddress) => {
    if (!address) return '';

    return `${address.street}, ${address.number} - ${address.neighborhood}, ${address.city} - ${address.state} - ${address.zip_code}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header.Alt hasBack title="Meu Perfil" userName={user.name} />
      <View style={styles.user}>
        {user.avatar ? (
          <Image source={{uri: user.avatar}} style={styles.image} />
        ) : (
          <Image
            source={require('../../../assets/images/profile.png')}
            style={styles.image}
          />
        )}

        {isMyProfile ? (
          <TouchableOpacity
            style={styles.typeUser}
            onPress={() => setIsOpenPictureModal(true)}>
            <Text>Alterar foto</Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.typeUser}>
            {
              //@ts-ignore
              typeUser[user.pv]
            }
          </Text>
        )}
      </View>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView>
          {isMyProfile && <Status />}

          <View style={styles.section}>
            <Text style={{marginLeft: 20, marginTop: 10, marginBottom: 10}}>
              Dados Pessoais
            </Text>
            <View style={styles.cardInfo}>
              <RenderInfo label="Nome Completo" value={user.name} name="name" />
              <RenderInfo
                label="Telefone"
                name="phone"
                value={Mask.phone.value(user.phone)}
                canUpdate
                openUpdate={updatePhone}
                setOpenUpdate={() => setUpdatePhone(!updatePhone)}
              />
              <RenderInfo
                label="E-mail"
                value={user.email}
                name="email"
                canUpdate
                openUpdate={updateEmail}
                setOpenUpdate={() => setUpdateEmail(!updateEmail)}
              />
              <RenderInfo
                label="CNH/CPF"
                value={user.profile?.document || ''}
                name="document"
              />
              {user.pv == userPvs.company && user.pv == userPvs.autonomous ? (
                <RenderInfo label="CNPJ" value={``} name="document" />
              ) : null}
              <RenderInfo
                name="address"
                label="Endereço"
                value={formateAddressToString(user.profile?.address)}
                canUpdate
                openUpdate={updateAddress}
                setOpenUpdate={() => setUpdateAddress(!updateAddress)}
              />
            </View>
          </View>

          {isMyProfile && user.pv !== userPvs.consumer && (
            <View style={styles.section}>
              <Text style={{marginLeft: 20, marginTop: 10, marginBottom: 10}}>
                Meus veículos
              </Text>
              <View style={styles.cardInfo}>
                {user.vehicles?.map(vehicle => {
                  return (
                    <View style={styles.row} key={vehicle.id}>
                      <Icons.CircleOrange />
                      <Text>
                        {vehicle.brand} {vehicle.model}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          )}

          <ContentModal isVisible={isOpenPictureModal}>
            <TouchableOpacity
              onPress={() => setIsOpenPictureModal(false)}
              style={styles.modalPictureCloseIcon}>
              <Icons.Close />
            </TouchableOpacity>
            <Text>
              Deseja escolher uma foto da galeria ou tirar uma selfie?
            </Text>
            <Divider size="xs" />

            <ButtonGradient
              onPress={pickImageFromCamera}
              width="full"
              outline
              gradientType="orange">
              <Text color="white">Câmera</Text>
            </ButtonGradient>

            <Divider size="xs" />

            <ButtonGradient
              onPress={pickImageFromGalery}
              width="full"
              outline
              gradientType="orange">
              <Text color="white">Galeria</Text>
            </ButtonGradient>
          </ContentModal>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
