import React, {useContext} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';
import {AuthContext} from '../../../contexts';
import {Header} from '../../../components/molecules';
import {Divider, Text} from '../../../components/atoms';

const Home: React.FC = ({navigation}: any) => {
  const {signOut} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.body}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('News');
          }}>
          <Text>Novidades</Text>
        </TouchableOpacity>

        <Divider />

        <TouchableOpacity onPress={signOut}>
          <Text>Sair</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
