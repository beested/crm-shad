import CryptoJS from 'crypto-js';

export const EncryptWithAES = (text: string) => {
  try {
    const passphrase = process?.env?.SECRET_SALT_CNPJ || '';
    return CryptoJS.AES.encrypt(text, passphrase).toString();
  } catch (err) {
    throw new Error('erro DecryptWithAES');
  }
};

export function DecryptWithAES(text: string) {
  try {
    const passphrase = process?.env?.SECRET_SALT_CNPJ || '';
    const bytes = CryptoJS.AES.decrypt(text, passphrase);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  } catch (err) {
    return '';
  }
}
