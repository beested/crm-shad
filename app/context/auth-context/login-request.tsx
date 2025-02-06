import { api } from '@/app/services/api';

export async function LoginRequest(
  email: string,
  password: string,
  companyId?: number
) {
  try {
    const request = await api.post('/auth/login/', {
      username: email,
      password: password,
      companyId: companyId,
    });
    return { success: true, data: request.data };
  } catch (error) {
    return { success: false, error };
  }
}
