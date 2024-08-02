import {AxiosResponse} from 'axios';
import {api} from '../../services';
import {iRate, iRates} from '../../interfaces/rate';

const findMany = async () => {
  try {
    const {data: result} = (await api.get('/rates')) as AxiosResponse<iRates>;

    return result;
  } catch (error) {}
};

export default {findMany};
