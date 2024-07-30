export default {
  required: 'Campo obrigatório',
  email: 'E-mail inválido',
  date: 'Data inválida',
  number: 'Número inválido',
  minLength: (value: number) => `Mínimo de ${value} caracteres`,
  maxLength: (value: number) => `Máximo de ${value} caracteres`,
};
