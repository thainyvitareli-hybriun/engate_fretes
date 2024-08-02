import {AxiosResponse} from 'axios';
import {api} from '../../services';
import iDriverMetrics from '../../interfaces/metrics';

const getMetrics = async () => {
  try {
    const {data} = (await api.get(
      '/analytics/drivers',
    )) as AxiosResponse<iDriverMetrics>;

    return data;
  } catch (error) {}
};

export default {
  getMetrics,
};
