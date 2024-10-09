import CryptoJS from 'crypto-js';
import { ENCRYPTION_KEY } from '@/config/env';

export function encryptData(data: any): string {
  // Convert the data to a JSON string
  const dataString: string = JSON.stringify(data);

  // Encrypt the data string using AES encryption, if the encryption key is available
  const encryptedData: string = ENCRYPTION_KEY ? CryptoJS.AES.encrypt(dataString, ENCRYPTION_KEY).toString() : '';

  return encryptedData; // Return the encrypted data
}

export function decryptData(encryptedData: string | null): any {
  // Return null if no encrypted data is provided
  if (!encryptedData) return null;

  // Decrypt the data using AES, if the encryption key is available
  const decryptedData: string = ENCRYPTION_KEY ? CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_KEY).toString(CryptoJS.enc.Utf8) : '';

  // Parse the decrypted data back into its original format
  const data: any = JSON.parse(decryptedData);

  return data; // Return the decrypted data
}