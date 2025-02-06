import { ReactNode } from 'react';

export interface UserProps {
  email?: string;
  token?: string;
  expiredTest: boolean;
  userNotFound: boolean;
  hasAuthError: boolean;
  userUnauthorized: boolean;
  userMaxNumber: boolean;
  userInactive: boolean;
  companyInfo: string;
  regPerPage: number;
  enterpriseInactive: boolean;
}

export interface ContextProps {
  user: UserProps | null;
  authenticate: (
    user: { email: string; password: string; companyId?: number } | undefined
  ) => Promise<void>;
  logout: () => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}
