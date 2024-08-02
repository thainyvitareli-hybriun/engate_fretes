import {AxiosResponse} from 'axios';
import {
  iAPIFindMany,
  iFindManySolicitations,
} from '../../interfaces/solicitation';
import {api} from '../../services';

const findMany = async ({
  skip,
  take,
  from,
  status,
  to,
}: iFindManySolicitations) => {
  try {
    const {data: result} = (await api.get('/transport-requests/solicitations', {
      params: {
        skip,
        take,
        from,
        to,
        status,
      },
    })) as AxiosResponse<iAPIFindMany>;

    return result;
  } catch (error: any) {
    console.log('ERROR -> ', error.response.data);
  }
};

export default {findMany};
