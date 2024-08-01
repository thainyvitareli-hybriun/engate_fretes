import React, {useContext} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import {Icons, Logo} from '../../../assets/svg';
import {iHeader} from '../../../interfaces/components';
import {AuthContext} from '../../../contexts';
import colors from '../../../assets/config/colors';

const Header = ({hasBack}: iHeader) => {
  const navigation = useNavigation();
  const {user} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {hasBack && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons.ArrowLeft fill={'#000000'} />
        </TouchableOpacity>
      )}

      {user && user.access_token && (
        <View style={styles.content}>
          <View style={styles.user}>
            <Image
              source={require('../../../assets/images/profile.png')}
              style={{
                width: 45,
                height: 45,
                borderRadius: 40,
                borderWidth: 2,
                borderColor: colors.secondary,
                resizeMode: 'cover',
              }}
            />
            <Text style={styles.userName}>{user.name}</Text>
          </View>
          <View style={styles.settings}>
            <TouchableOpacity>
              <Icons.Notification />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icons.Setting />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Header;
