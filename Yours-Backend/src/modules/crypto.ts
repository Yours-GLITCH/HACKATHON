import CryptoJS from 'crypto-js';

const key = 'key'.padEnd(32, ' ');

const encodeByAES56 = async (userId: string) => {
  let cipher = CryptoJS.AES.encrypt(userId, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(''),
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
  }).toString();
  return cipher;
};

const decodeByAES256 = async (code: string) => {
  const decodedCode = decodeURIComponent(code);
  const cipher = CryptoJS.AES.decrypt(
    decodedCode,
    CryptoJS.enc.Utf8.parse(key),
    {
      iv: CryptoJS.enc.Utf8.parse(''),
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC,
    },
  );
  return cipher.toString(CryptoJS.enc.Utf8);
};

export { encodeByAES56, decodeByAES256 };
