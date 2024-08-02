import {FlatList, View} from 'react-native';
import {Divider, Text} from '../../atoms';
import styles from './styles';
import {useEffect, useState} from 'react';
import Icons from '../../../assets/svg/icons';
import {colors} from '../../../assets/config';
import {RateHooks} from '../../../hooks';
import {iRate, iRates} from '../../../interfaces/rate';

export default function Rates() {
  const [rates, setRates] = useState<iRates>();

  const handleRates = async () => {
    const result = await RateHooks.findMany();

    if (result) {
      setRates(result);
    }
  };

  useEffect(() => {
    handleRates();
  }, []);

  const Item = ({item}: {item: iRate}) => (
    <View style={styles.item}>
      <Text color={colors.text.black} weight="700" type="title">
        {item.description}
      </Text>
    </View>
  );

  const renderIfListIsEmpty = (
    <View style={styles.emptyList}>
      <Text color={colors.text.gray} weight="600">
        Nenhuma solicitação encontrada
      </Text>
      <Icons.EmojiSadness />
      <Text color={colors.text.gray} weight="500">
        Faça uma nova solicitação{' '}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text type="subtitle">Últimas avaliações</Text>
      <Divider size="sm" />
      <FlatList
        data={rates?.records}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={renderIfListIsEmpty}
      />
    </View>
  );
}
