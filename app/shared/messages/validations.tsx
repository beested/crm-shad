export const msgRequired = 'Campo é obrigatório';

export const msgRequiredZod = { message: msgRequired };

export const cookieConsentment =
  'Este site utiliza cookies com finalidade estatística, de forma anônima e sem fins publicitários, visando aprimorar a sua experiência como usuário. Conheça nossa Política de Privacidade e tenha uma visão completa sobre nosso comprometimento com seus dados.';
export const cookieConsentmentPolicy = ' Política de Privacidade';

export const msgPassword = 'Por favor, faça login com as credenciais corretas.';
export const msgPasswordInvalid =
  'A senha deve ter 6 caracteres, um especial, um número, uma letra maiúscula e uma minúscula.';
export const msgPasswordRequired = 'Senha obrigatória.';
export const msgPasswordCorrespond = 'As senhas não correspondem.';

export const msgEmailInvalid = 'Formato de e-mail inválido.';
export const msgEmailRequired = 'E-mail obrigatório.';

export function msgEmail(): string {
  return 'O campo precisa conter um email válido';
}

export function msgMin(options: MinOptions): string {
  return `O campo precisa ter pelo menos ${options.min} caracteres`;
}
