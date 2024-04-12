import { PropsWithChildren } from 'react';

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      {/* Site Header */}
      <main className="flex-1">{children}</main>
      {/* Site Footer */}
    </>
  );
}
