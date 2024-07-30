import {Mask} from '@tboerc/maskfy';

import {api} from '../../services';
import {iModal} from '../../interfaces/components';
import {iRegister, iSession} from '../../interfaces/hooks/user';

const session = async (
  setModal: (modal: iModal) => void,
  values: iSession,
  signIn: any,
) => {
  try {
    const {
      data: {data},
    } = await api.post('/session', values);

    // @ts-ignore
    api.defaults.headers['Authorization'] = `Bearer ${data.token}`;

    signIn(data);
  } catch (error: any) {
    const infoModal = {
      isVisible: true,
      title: 'Ops...',
      icon: error?.response?.data?.status !== 404 ? 'error' : 'warning',
      content:
        error?.response?.data?.message ||
        'Verifique as informações e tente novamente',
    } as iModal;

    setModal({
      ...infoModal,

      onClose: () => {
        setModal({...infoModal, isVisible: false});
        setTimeout(() => {
          setModal({} as iModal);
        }, 500);
      },
    });
  }
};

const register = async (
  setModal: (modal: iModal) => void,
  values: iRegister,
  resetForm: any,
) => {
  try {
    await api.post('/users', {
      ...values,
      status: 1,
      pv: 1,
      phone: Mask.phone.raw(values.phone),
    });

    resetForm();

    const infoModal = {
      isVisible: true,
      icon: 'success',
      content: 'Conta criado com sucesso',
    } as iModal;

    setModal({
      ...infoModal,
      onClose: () => {
        setModal({...infoModal, isVisible: false});
        setTimeout(() => {
          setModal({} as iModal);
        }, 500);
      },
    });
  } catch (error: any) {
    const infoModal = {
      isVisible: true,
      title: 'Ops...',
      icon: error?.response?.data?.status !== 404 ? 'error' : 'warning',
      content:
        error?.response?.data?.message ||
        'Verifique as informações e tente novamente',
    } as iModal;

    setModal({
      ...infoModal,
      onClose: () => {
        setModal({...infoModal, isVisible: false});
        setTimeout(() => {
          setModal({} as iModal);
        }, 500);
      },
    });
  }
};

export default {session, register};
