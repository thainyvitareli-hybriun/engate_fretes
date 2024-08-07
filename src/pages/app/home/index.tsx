import React, {useContext, useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';
import {AuthContext} from '../../../contexts';
import {Header} from '../../../components/molecules';
import {Divider, Text} from '../../../components/atoms';
import ValidationCode from '../../../components/pages/validationCode';
import {BannerHooks, UserHooks} from '../../../hooks';
import {useFormik} from 'formik';
import {iBanners} from '../../../interfaces/banner';
import Banners from '../../../components/pages/banners';
import Solicitations from '../../../components/pages/solicitations';
import Rate from '../../../hooks/rate';
import Rates from '../../../components/pages/rates';
import userPvs from '../../../assets/config/user-pvs';
import Metrics from '../../../components/pages/metrics';

const Home: React.FC = ({navigation}: any) => {
  const {signOut, user} = useContext(AuthContext);

  const [code, setCode] = useState('');
  const [isOpenConfirmedPhoneModal, setIsOpenConfirmedPhoneModal] =
    useState(false);

  const [solicitations, setSolicitations] = useState([]);

  useEffect(() => {
    setIsOpenConfirmedPhoneModal(!user.phone_confirmed);
    formik.setFieldValue('phone', user.phone);
  }, []);

  const sendVerificationCode = async () => {
    if (!user.phone_confirmed) {
      const result = await UserHooks.getVerificationCode();

      if (result) setCode(result.code);
    }
  };

  const haldleSolicitations = () => {};

  const onConfirmePhone = async () => {
    const resp = await UserHooks.confirmePhone();

    if (resp) {
      setIsOpenConfirmedPhoneModal(!isOpenConfirmedPhoneModal);
    }
  };

  const formik = useFormik({
    initialValues: {
      phone: '',
      code: '',
    },
    onSubmit: onConfirmePhone,
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header.Default />
      <View style={{flexDirection: 'row'}}>
        <Divider />
      </View>
      <View style={styles.body}>
        <Banners />
        {user.pv !== userPvs.consumer && <Metrics />}
        <Divider />
        <Solicitations />
        <Divider size="sm" />
      </View>

      {isOpenConfirmedPhoneModal && user.phone_confirmed ? (
        <ValidationCode
          phone={formik.values.phone}
          showLogo={false}
          rightCode={code}
          onSubmit={() => formik.handleSubmit()}
          sendVerificationCode={() => sendVerificationCode()}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default Home;
