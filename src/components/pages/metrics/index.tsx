import {useContext, useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {AuthContext} from '../../../contexts';
import {Mask} from '@tboerc/maskfy';
import userPvs from '../../../assets/config/user-pvs';
import styles from './styles';
import Icons from '../../../assets/svg/icons';
import {Text} from '../../atoms';
import {colors} from '../../../assets/config';
import {MetricsHooks} from '../../../hooks';
import iDriverMetrics from '../../../interfaces/metrics';
import {useNavigation} from '@react-navigation/native';

export default function Metrics() {
  const [metrics, setMetrics] = useState<iDriverMetrics>();

  const navigator = useNavigation();

  const getMetrics = async () => {
    const result = await MetricsHooks.getMetrics();

    setMetrics(result);
  };

  useEffect(() => {
    getMetrics();
  }, []);

  return (
    <View style={styles.rowSpaceBetween}>
      <View style={styles.alignStart}>
        <Text color={colors.text.gray} weight="700">
          Total Ganho
        </Text>
        <Text>{Mask.money.value(metrics?.totalValue)}</Text>
      </View>
      <View style={styles.hexagonContainer}>
        <Icons.Hexagon />
        <View style={styles.hexagonTextContainer}>
          <Text style={styles.hexagonText} type="small" weight="700">
            Créditos
          </Text>
          <Text style={styles.hexagonText} weight="700" type="title">
            {metrics?.totalCoins}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.seePlans}
          //@ts-ignore
          onPress={() => navigator.navigate('Plans')}>
          <Text type="small">Ver plano</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.alignStart}>
        <Text color={colors.text.gray} weight="700">
          Total comissão
        </Text>
        <Text>R$ {Mask.money.value('5.810')}</Text>
      </View>
    </View>
  );
}
