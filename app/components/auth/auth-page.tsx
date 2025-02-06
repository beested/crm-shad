'use client';
import { isLoadingAtom } from '@/app/context/loading/loading-atom';
import { useAtomValue } from 'jotai';
import { LottieLoading } from '../lotties/lottie-loading';
import { LoginForm } from './login-form';

export default function AuthPage() {
  const isLoading = useAtomValue(isLoadingAtom);
  return (
    <>
      {isLoading && <LottieLoading />}

      <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-3xl">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
