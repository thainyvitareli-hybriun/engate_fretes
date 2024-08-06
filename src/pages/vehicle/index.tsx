import {useEffect, useState} from 'react';
import {VehicleHooks} from '../../hooks';
import {iAPIFindManyVehicles, iVehicle} from '../../interfaces/vehicle';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  SafeAreaView,
  View,
} from 'react-native';
import styles from './styles';
import {Text} from '../../components/atoms';
import Header from '../../components/molecules/header';
import {colors, metrics} from '../../assets/config';
import {Button} from '../../components/molecules';
import {
  vehicleStatusBagdeWidth,
  vehicleStatusColor,
  vehicleStatusText,
  vehicleStatusTextColor,
} from '../../assets/config/vehicle-status';
import {Icons} from '../../assets/svg';

export default function Vehicle() {
  const [vehicles, setVehicles] = useState<iAPIFindManyVehicles>();

  useEffect(() => {
    getVehicles();
  }, []);

  const getVehicles = async () => {
    const result = await VehicleHooks.findMany();

    if (result) setVehicles(result);
  };

  function RenderItem({item}: ListRenderItemInfo<iVehicle>) {
    return (
      <View key={item.id} style={styles.item}>
        <View style={styles.row}>
          <View style={styles.row}>
            <Image
              source={require('../../assets/images/furgao.png')}
              style={styles.image}
            />
            <Text style={styles.textModel}>{item.brand}</Text>
          </View>
          <View
            style={[
              //@ts-ignore
              {backgroundColor: vehicleStatusColor[item.status]},
              //@ts-ignore
              {width: vehicleStatusBagdeWidth[item.status]},
              styles.badge,
            ]}>
            <Text
              color={
                //@ts-ignore
                vehicleStatusTextColor[item.status]
              }
              weight="600">
              {
                //@ts-ignore
                vehicleStatusText[item.status]
              }
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.gap}>
            <Text color={colors.darkLight}>Ano/Modelo</Text>
            <Text style={styles.textDescription}>{item.year}</Text>
          </View>
          <View style={styles.gap}>
            <Text color={colors.darkLight}>Placa</Text>
            <Text style={styles.textDescription}>{item.license_plate}</Text>
          </View>
          <View style={styles.gap}>
            <Text color={colors.darkLight}>Viagens</Text>
            <Text style={styles.textDescription}>0 entregas</Text>
          </View>
        </View>
      </View>
    );
  }

  console.log(vehicles);

  return (
    <SafeAreaView style={styles.container}>
      <Header.Alt
        title="Meus veículos"
        hasBack
        icon={<Icons.Plus />}
        onPressIcon={() => console.log('add')}
      />
      <FlatList
        data={vehicles?.records}
        renderItem={RenderItem}
        keyExtractor={item => String(item.id)}
        style={{
          // backgroundColor: 'green',
          position: 'absolute',
          alignSelf: 'center',
          marginTop: 135,
          maxHeight: '80%',
          // flex: 1,
        }}
      />
      <Button label="Adicionar veículo" weight="600" outline />
    </SafeAreaView>
  );
}
