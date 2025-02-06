import { useRouter } from 'next/navigation';

export function useRouterNavigation() {
  const router = useRouter();
  return { router };
}
