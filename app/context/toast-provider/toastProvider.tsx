import { TypographyP, TypographySmall } from '@/components/ui/typography';
import { CircleAlert, CircleCheck, CircleX, Info, X } from 'lucide-react';
import React, { createContext, useContext } from 'react';
import toast from 'react-hot-toast';

type ToastSeverity = 'success' | 'error' | 'info' | 'warning';

interface ToastContextActions {
  showToast: (title: string, text: string, severity: ToastSeverity) => void;
}

export const ToastContext = createContext({} as ToastContextActions);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const showToast = (title: string, text: string, severity: ToastSeverity) => {
    const toastConfig = {
      style: {
        backgroundColor: getColor(severity),
        color: '#fff',
        maxWidth: 600,
      },
    };

    toast(
      (t: any) => (
        <div className="max-w-[35rem] h-full">
          <div className="relative w-full flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div
                className={`w-6 h-6 rounded-full ${
                  t.visible ? 'animate-pulse-icon-limited' : ''
                }  ${getIconBackground(severity)}`}
              >
                {getIcon(severity)}
              </div>
              <TypographyP className="font-semibold">{title}</TypographyP>
            </div>
            <X
              size={18}
              onClick={() => toast.dismiss(t.id)}
              className="cursor-pointer hover:scale-105"
            />
          </div>
          <div className="pl-8">
            <TypographySmall>{text}</TypographySmall>
          </div>
        </div>
      ),
      toastConfig
    );
  };

  const getColor = (severity: ToastSeverity) => {
    switch (severity) {
      case 'success':
        return '#22c55e';
      case 'error':
        return '#ef4444';
      case 'info':
        return '#3b82f6';
      case 'warning':
        return '#f59e0b';
      default:
        return '#3b82f6';
    }
  };

  const getIconBackground = (severity: ToastSeverity) => {
    switch (severity) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      case 'info':
        return 'bg-blue-500';
      case 'warning':
        return 'bg-yellow-500';
      default:
        return 'bg-blue-500';
    }
  };

  const getIcon = (severity: ToastSeverity) => {
    switch (severity) {
      case 'success':
        return <CircleCheck className="text-white" />;
      case 'error':
        return <CircleX className="text-white" />;
      case 'info':
        return <Info className="text-white" />;
      case 'warning':
        return <CircleAlert className="text-white" />;
      default:
        return null;
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useSnackBar() {
  return useContext(ToastContext);
}

// CSS Inline for Animation
const styles = `
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.animate-pulse-icon-limited {
  animation: pulse 0.5s ease-in-out 3; /* Pulsará 3 vezes */
}
`;

// Append styles to the document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}
