import {FlatList, Image, ListRenderItemInfo, View} from 'react-native';
import {Divider, Text} from '../../atoms';
import styles from './styles';
import {useEffect, useState} from 'react';
import Icons from '../../../assets/svg/icons';
import {colors} from '../../../assets/config';
import {RateHooks} from '../../../hooks';
import {iAPIFindMany, iRate} from '../../../interfaces/rate';

export default function Rates() {
  const [rates, setRates] = useState<iAPIFindMany>();

  const handleRates = async () => {
    const result = await RateHooks.findMany();

    setRates(result);
  };

  useEffect(() => {
    handleRates();
  }, []);

  function renderItem({item}: ListRenderItemInfo<iRate>) {
    return (
      <View style={styles.item} key={item.id}>
        <View>
          {item.avatar ? (
            <Image source={{uri: item.avatar}} style={styles.image} />
          ) : (
            <Image
              source={require('../../../assets/images/profile.png')}
              style={styles.image}
            />
          )}
        </View>
        <View>
          <Text color={colors.text.black} weight="700" type="title">
            {item.description}
          </Text>
        </View>
      </View>
    );
  }

  const renderIfListIsEmpty = (
    <View style={styles.emptyList}>
      <Text color={colors.text.gray} weight="600">
        Nenhuma avaliação encontrada
      </Text>
      <Icons.EmojiSadness />
      <Text color={colors.text.gray} weight="500">
        Realize uma entrega e seja avaliado
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text type="subtitle">Últimas avaliações</Text>
      <Divider size="sm" />
      <FlatList
        data={rates?.records}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
        ListEmptyComponent={renderIfListIsEmpty}
      />
    </View>
  );
}
