import {AxiosResponse} from 'axios';
import {api} from '../../services';
import {iAPIFindMany} from '../../interfaces/rate';

const findMany = async () => {
  try {
    const {data: result} = (await api.get(
      '/rates',
    )) as AxiosResponse<iAPIFindMany>;

    return result;
  } catch (error) {}
};

export default {findMany};
