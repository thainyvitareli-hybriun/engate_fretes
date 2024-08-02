import {TouchableOpacity, View} from 'react-native';
import {Divider, Text} from '../../../components/atoms';
import styles from '../../../components/pages/solicitations/styles';
import {useContext, useEffect, useState} from 'react';
import {colors} from '../../../assets/config';
import {iAPIFindMany, iSolicitation} from '../../../interfaces/solicitation';
import {AuthContext} from '../../../contexts';
import solicitationsStatus from '../../../assets/config/solicitations-status';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function InfoSolicitation({route: {params}}: any) {
  const [solicitation, setSolicitation] = useState<iAPIFindMany>();
  const {user} = useContext(AuthContext);

  const {id} = params || {};

  const navigator = useNavigation();

  const getSolicitation = async () => {};

  useEffect(() => {
    getSolicitation();
  }, []);

  function getStatusStyleBadge(status: number) {
    switch (status) {
      case solicitationsStatus.in_progress:
        return {
          backgroundColor: '#FF8159',
        };

      case solicitationsStatus.canceled:
        return {
          backgroundColor: 'red',
        };

      case solicitationsStatus.awaiting_offers:
        return {
          backgroundColor: colors.lightGray,
        };

      case solicitationsStatus.finish: {
        return {backgroundColor: 'red'};
      }
    }
  }

  function getStatusText(status: number) {
    switch (status) {
      case solicitationsStatus.in_progress:
        return 'em andamento';

      case solicitationsStatus.canceled:
        return 'cancelada';

      case solicitationsStatus.awaiting_offers:
        return 'aguardando';

      case solicitationsStatus.finish:
        'finalizada';
    }
  }

  function getStatusTextColor(status: number) {
    switch (status) {
      case solicitationsStatus.awaiting_offers:
        return colors.text.gray;
      default:
        return 'white';
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigator.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      <Divider size="sm" />
      <Text>ID {id}</Text>
    </SafeAreaView>
  );
}
