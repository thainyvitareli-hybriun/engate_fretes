import colors from './colors';

export const vehicleStatusColor = {
  1: 'gray',
  2: '#FFC750',
  3: '#F15330',
  4: '#9F64FF',
};

export const vehicleStatusText = {
  1: 'Aguardando aprovação',
  2: 'Aprovado',
  3: 'Reprovado',
  4: 'Inativo',
};

export const vehicleStatusTextColor = {
  1: colors.lightGray,
  2: colors.darkLight,
  3: colors.text.white,
  4: colors.text.white,
};

export const vehicleStatusBagdeWidth = {
  1: 200,
  2: 120,
  3: 120,
  4: 120,
};

export default {vehicleStatusColor, vehicleStatusText, vehicleStatusBagdeWidth};
