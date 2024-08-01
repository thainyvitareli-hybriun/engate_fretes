import React, {useContext} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';
import {AuthContext} from '../../../contexts';
import {Header} from '../../../components/molecules';
import {Text} from '../../../components/atoms';

const Search: React.FC = ({navigation}: any) => {
  const {signOut} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <Text>Buscar</Text>
    </SafeAreaView>
  );
};

export default Search;
