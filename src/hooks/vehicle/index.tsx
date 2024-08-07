import {AxiosResponse} from 'axios';
import {VehicleHooks} from '..';
import {
  iCreateVehicle,
  iUpdateVehicle,
  iVehicle,
} from '../../interfaces/vehicle';
import {api} from '../../services';

const findMany = async () => {
  const {data} = await api.get('/vehicles');

  return data;
};

const findOne = async ({id}: {id: number | string}) => {
  const {data: resp} = (await api.get('/vehicles/one', {
    params: {
      id: id,
    },
  })) as AxiosResponse<iVehicle>;
  return resp;
};

const create = async (values: iCreateVehicle) => {
  const data = new FormData();

  data.append('license_plate', values.license_plate);
  data.append('color', values.color);
  data.append('brand', values.brand);
  data.append('model', values.model);
  data.append('year', values.year);
  data.append('vehicle_front', {
    //@ts-ignore
    uri: values.vehicle_front.uri,
    //@ts-ignore
    name: values.vehicle_front.fileName,
    type: values.vehicle_front.type,
  });
  data.append('vehicle_back', {
    //@ts-ignore
    uri: values.vehicle_back.uri,
    //@ts-ignore
    name: values.vehicle_back.fileName,
    type: values.vehicle_back.type,
  });
  data.append('vehicle_right', {
    //@ts-ignore
    uri: values.vehicle_right.uri,
    //@ts-ignore
    name: values.vehicle_right.fileName,
    type: values.vehicle_right.type,
  });
  data.append('vehicle_left', {
    //@ts-ignore
    uri: values?.vehicle_left.uri,
    //@ts-ignore
    name: values?.vehicle_left.fileName,
    type: values?.vehicle_left.type,
  });
  data.append('document', {
    //@ts-ignore
    uri: values.document.uri,
    //@ts-ignore
    name: values.document.fileName,
    type: values.document.type,
  });
  const {data: resp} = await api.post('/vehicles', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log('values', resp);

  return resp;
};

const update = async (data: iUpdateVehicle) => {
  const {data: result} = await api.patch('vehicles', data);

  return result;
};
export default {findMany, findOne, create, update};
