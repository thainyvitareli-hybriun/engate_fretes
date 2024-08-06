import React, {useContext} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import {Icons, Logo} from '../../../assets/svg';
import {iHeader} from '../../../interfaces/components';
import {AuthContext} from '../../../contexts';
import Text from '../../atoms/text';

const Default = () => {
  const navigation = useNavigation();
  const {user} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.user}>
          {user.avatar ? (
            <Image source={{uri: user.avatar}} style={styles.image} />
          ) : (
            <Image
              source={require('../../../assets/images/profile.png')}
              style={styles.image}
            />
          )}
          <Text style={styles.userName}>{user.name}</Text>
        </View>
        <View style={styles.settings}>
          <TouchableOpacity
            onPress={() => {
              //@ts-ignore
              navigation.navigate('News');
            }}>
            <Icons.Notification />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              //@ts-ignore
              navigation.navigate('Settings');
            }}>
            <Icons.Setting />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Alt = ({hasBack, title, userName, icon, onPressIcon}: iHeader) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.altContainer]}>
      <View style={[styles.row, styles.spaceBetween]}>
        <View style={styles.row}>
          {hasBack && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icons.ArrowLeft fill={'white'} />
            </TouchableOpacity>
          )}
          <Text color="white" type="subtitle" weight="500">
            {title}
          </Text>
        </View>
        {icon && (
          <TouchableOpacity onPress={onPressIcon}>{icon}</TouchableOpacity>
        )}
      </View>
      <Text style={styles.altUserName} type="title">
        {userName}
      </Text>
    </View>
  );
};

export default {Default, Alt};
