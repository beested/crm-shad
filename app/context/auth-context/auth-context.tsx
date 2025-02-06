'use client';

import { userAtom } from '@/app/config/config-atoms';
import { useRouterNavigation } from '@/app/hooks/routers';
import { api } from '@/app/services/api';
import { COOKIE_TOKEN, COOKIE_USER } from '@/app/shared/cookies';
import {
  DecryptWithAES,
  EncryptWithAES,
} from '@/app/utils/functions/crypto/crypto';
import { useSetAtom } from 'jotai';
import { usePathname } from 'next/navigation';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { createContext, useEffect, useState } from 'react';
import { AuthProviderProps, ContextProps, UserProps } from './interface';
import { LoginRequest } from './login-request';

export const AuthContext = createContext<ContextProps>({} as ContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const setUserAtom = useSetAtom(userAtom);
  const { router } = useRouterNavigation();
  const pathname = usePathname();
  const [user, setUser] = useState<UserProps | null>(null);

  useEffect(() => {
    const { [COOKIE_TOKEN]: token, [COOKIE_USER]: userCookies } =
      parseCookies();
    if (token && userCookies) {
      const decrypt = DecryptWithAES(userCookies);

      try {
        // Verifica se 'decrypt' não está vazio e é uma string válida JSON
        if (decrypt) {
          const userData = JSON.parse(decrypt);
          setUser(userData);
        }
      } catch (error) {
        console.error('Erro ao analisar JSON:', error);
      }

      if (pathname === '/') router.push('/dashboard/');
    }
  }, []);

  async function authenticate(
    user: { email: string; password: string; companyId?: number } | undefined
  ) {
    console.log('teste');
    if (!user) return;

    const response = await LoginRequest(user.email, user.password);
    console.log({ response });

    if (response.success) {
      const token = response.data.token;
      const userData = response.data;

      setCookie(undefined, COOKIE_TOKEN, token, {
        maxAge: 60 * 60 * 9,
        path: '/',
      });
      setCookie(
        undefined,
        COOKIE_USER,
        EncryptWithAES(JSON.stringify(userData)),
        { maxAge: 60 * 60 * 9, path: '/' }
      );

      setUser(userData);
      setUserAtom(EncryptWithAES(JSON.stringify(userData)));
      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      router.push('/dashboard');
    }
  }

  function logout() {
    destroyCookie(null, COOKIE_TOKEN, { path: '/' });
    destroyCookie(null, COOKIE_USER, { path: '/' });
    setUser(null);
    setUserAtom(null);
    router.push('/');
  }

  return (
    <AuthContext.Provider value={{ user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
