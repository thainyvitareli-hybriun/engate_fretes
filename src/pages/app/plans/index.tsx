import {SafeAreaView, TouchableOpacity} from 'react-native';
import {Text} from '../../../components/atoms';
import {useNavigation} from '@react-navigation/native';

export default function Plans() {
  const navigator = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigator.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      <Text>Planos</Text>
    </SafeAreaView>
  );
}
