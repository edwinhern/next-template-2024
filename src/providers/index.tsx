'use client';

import { Analytics } from '@vercel/analytics/react';

import { ThemeProvider } from '@/providers/theme-provider';

export const Providers: React.FC<ChildProps> = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
      <Analytics />
    </ThemeProvider>
  );
};
