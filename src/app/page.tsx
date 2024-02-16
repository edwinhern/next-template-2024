import { Mountain } from 'lucide-react';

import { BentoGridThirdDemo } from '@/components/Landing';
import { ThemeToggleButton } from '@/components/ui/theme-toggle-button';

export default function Home() {
  return (
    <main className="flex size-full min-h-lvh flex-col justify-between  p-5 md:p-10">
      {/* Navbar */}
      <div className="flex size-full items-center justify-between">
        <Mountain />
        <ThemeToggleButton />
      </div>
      {/* Landing Page */}
      <div className="mx-auto flex flex-col gap-8">
        <h1 className="font-heading text-2xl  font-semibold sm:text-3xl md:text-3xl lg:text-6xl">
          Next.js Template 2024
        </h1>
        <BentoGridThirdDemo />
      </div>

      {/* Footer */}
      <div>
        <h3>Footer</h3>
      </div>
    </main>
  );
}
