import {api} from '../../services';

const findMany = async () => {
  const {data} = await api.get('/vehicles');

  return data;
};

export default {findMany};
