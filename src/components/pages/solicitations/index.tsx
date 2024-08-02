import {
  FlatList,
  Image,
  TouchableOpacity,
  View,
  ListRenderItemInfo,
} from 'react-native';
import {Divider, Text} from '../../atoms';
import styles from './styles';
import {useContext, useEffect, useState} from 'react';
import Icons from '../../../assets/svg/icons';
import {colors} from '../../../assets/config';
import {iAPIFindMany, iSolicitation} from '../../../interfaces/solicitation';
import {SolicitationHooks} from '../../../hooks';
import {AuthContext} from '../../../contexts';
import userPvs from '../../../assets/config/user-pvs';
import solicitationsStatus from '../../../assets/config/solicitations-status';
import dayjs from 'dayjs';
import {useNavigation} from '@react-navigation/native';

export default function Solicitations() {
  const [solicitations, setSolicitations] = useState<iAPIFindMany>();
  const {user} = useContext(AuthContext);

  const navigation = useNavigation();

  const getSolicitations = async () => {
    const result = await SolicitationHooks.findMany({skip: 0, take: 10});

    if (result) {
      let mock = [
        {
          ...result.records[0],
          id: 1000,
          status: solicitationsStatus.awaiting_offers,
          vehicle_type_transport_requests: [
            {...result.records[0].vehicle_type_transport_requests[0]},
          ],
        },
        {
          ...result.records[0],
          id: 1002,

          vehicle_type_transport_requests: [
            {...result.records[0].vehicle_type_transport_requests[2]},
          ],
        },
      ];

      const array = [...result.records, ...mock];

      result.records = array;
      setSolicitations(result);
    }
  };

  useEffect(() => {
    getSolicitations();
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

  function renderItem({item}: ListRenderItemInfo<iSolicitation>) {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          //@ts-ignore
          navigation.navigate('Solicitation', {id: Number(item.id)});
        }}>
        <View style={styles.rowSpaceBetween}>
          <View style={styles.itemDate}>
            <Text color={colors.text.black} weight="700" type="paragraph">
              {dayjs(item.collection_date).format('DD MMM').toUpperCase()}
            </Text>
            <Icons.DoubleArrowRight />
            <Text color={colors.text.black} weight="700" type="paragraph">
              {dayjs(item.collection_date).format('HH: mm')}
            </Text>
          </View>
          <View style={[styles.itemStatus, getStatusStyleBadge(item.status)]}>
            <Text
              type="paragraph"
              color={getStatusTextColor(item.status)}
              weight="500">
              {getStatusText(item.status)}
            </Text>
          </View>
        </View>

        <View style={styles.rowSpaceBetween}>
          <View style={styles.itemAddress}>
            <Icons.CircleOrange />

            <Text color={colors.text.gray}>
              {item.origin_address.city} - {item.origin_address.state}
            </Text>
          </View>
          <Text color={colors.text.gray}>~{item.estimated_distance} Km</Text>
        </View>
        <View style={{marginLeft: 3}}>
          <Icons.DividerVertical />
        </View>
        <View style={styles.rowSpaceBetween}>
          <View style={styles.itemAddress}>
            <Icons.CircleBlue />
            <Text color={colors.text.gray}>
              {item.destination_address.city} - {item.destination_address.state}
            </Text>
          </View>

          <View style={styles.itemVehicleBox}>
            {item.vehicle_type_transport_requests.map(vehicle => (
              <View style={styles.itemVehicleRow}>
                {vehicle.vehicle_type.icon ? (
                  <Image source={{uri: vehicle.vehicle_type.icon}} />
                ) : (
                  <Image
                    source={require('../../../assets/images/furgao.png')}
                    style={styles.itemVehicleImage}
                  />
                )}
                <Text color={colors.text.black} weight="500">
                  {vehicle.vehicle_type.name}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    );
  }

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

  const Header = (
    <View style={styles.rowSpaceBetween}>
      <Text type="subtitle" weight="600">
        {user.pv === userPvs.consumer
          ? 'Solicitações em andamento'
          : 'Próximas entregas'}
      </Text>
      {user.pv == userPvs.consumer && (
        <TouchableOpacity
          onPress={() => console.log('adicionar nova solicitacao')}>
          <Icons.Add />
        </TouchableOpacity>
      )}

      <Divider size="lg" />
    </View>
  );

  return (
    <View style={styles.container}>
      <Divider size="sm" />
      <FlatList
        ListHeaderComponent={Header}
        data={solicitations?.records || []}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
        ListEmptyComponent={renderIfListIsEmpty}
      />
    </View>
  );
}
