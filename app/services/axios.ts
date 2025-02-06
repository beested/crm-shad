import axios from 'axios';
import { parseCookies } from 'nookies';
import { COOKIE_TOKEN } from '../shared/cookies';

export function getAPIClient(ctx?: any) {
  const cookies = parseCookies(ctx);
  const token = cookies[COOKIE_TOKEN];
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_HOST,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return api;
}
