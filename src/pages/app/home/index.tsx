import React, {useContext} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';
import {AuthContext} from '../../../contexts';
import {Header} from '../../../components/molecules';
import {Divider, Text} from '../../../components/atoms';
import {Modal} from '../../../components/organism';

const Home: React.FC = ({navigation}: any) => {
  const {signOut, user} = useContext(AuthContext);

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

      {!user.phone_confirmed && (
        <Modal
          icon={'success'}
          isVisible={false}
          title="Confirme seu número"
          content="Você já confirmou seu número de telefone? Se não, confirme agora."
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
