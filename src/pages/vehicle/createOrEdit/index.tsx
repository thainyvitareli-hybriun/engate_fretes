import React, {useState} from 'react';
import {iVehicle} from '../../../interfaces/vehicle';
import {View} from 'react-native';

export default function CreateOrEditVehicle({id}: {params: any}) {
  const [vehicle, setVehicle] = useState<iVehicle>();

  return <View></View>;
}
