import { COOKIE_TOKEN } from '@/app/shared/cookies';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get(COOKIE_TOKEN);
  const { pathname } = request.nextUrl;

  // Se o token existir e a rota for o login, redireciona para o dashboard ou outra rota protegida
  if (token && pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Se o token não existir e o caminho não for o login, redireciona para a tela de login
  if (!token && pathname !== '/') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Se tudo estiver ok, segue com a requisição normalmente
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard', '/profile'], // Adicione aqui todas as rotas que você quer monitorar
};
