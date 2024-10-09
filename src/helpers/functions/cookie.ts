import cookie from "cookiejs";
import { IncomingMessage } from "http";
import { encryptData, decryptData } from "./encryption";

export function setCookieItem(key: string, value: any) {
  cookie.set(key, encryptData(value), 1)
}

export function getCookieItem(key: string) {
  const value = cookie.get(key);

  if (typeof value === 'string') {
    return decryptData(value)
  }

  return null;
}

export const parseCookies = (req: IncomingMessage) => {
  // Get the 'cookie' header from the request
  const cookieHeader = req.headers.cookie;

  // If no cookies are present, return an empty object
  if (!cookieHeader) return {};

  // Split cookies by ';', then split each cookie into key-value pairs
  return cookieHeader
    .split(';')
    .map(v => v.split('='))
    .reduce((acc: Record<string, string>, [key, val]) => {
      // Trim the key and decode the value, then add them to the accumulator object
      acc[key.trim()] = decodeURIComponent(val);

      return acc;
    }, {});
};