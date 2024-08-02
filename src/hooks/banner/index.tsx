import {AxiosResponse} from 'axios';
import {api} from '../../services';
import {iBanners} from '../../interfaces/banner';

const findMany = async () => {
  try {
    const {data} = (await api.get('/banners')) as AxiosResponse<iBanners>;

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default {findMany};
