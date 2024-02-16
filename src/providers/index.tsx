'use client';

import { Analytics } from '@vercel/analytics/react';
import { PropsWithChildren } from 'react';

import { ThemeProvider } from '@/providers/theme-provider';

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
      <Analytics />
    </ThemeProvider>
  );
};
