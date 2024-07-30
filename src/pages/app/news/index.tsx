import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import {Text} from '../../../components/atoms';
import {SafeAreaView} from 'react-native-safe-area-context';

const New: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text>Outra página</Text>
      </View>
    </SafeAreaView>
  );
};

export default New;
