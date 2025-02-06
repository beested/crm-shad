'use client';
import Lottie from 'lottie-react';
import lottieFile from './lotties-files/loading.json';

type WindelLoadingProps = {
  height?: number;
  width?: number;
};

export function LottieLoading() {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-50">
      {/* Fundo com opacidade */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>

      {/* Conteúdo */}
      <div className="flex items-center justify-center w-full h-full">
        <Lottie animationData={lottieFile} className="h-96" />
      </div>
    </div>
  );
}
