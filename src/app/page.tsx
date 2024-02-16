import { IconCoffee } from '@tabler/icons-react';
import { Mountain } from 'lucide-react';
import Link from 'next/link';

import { BentoGridThirdDemo } from '@/components/Landing';
import { buttonVariants } from '@/components/ui/button';
import { ThemeToggleButton } from '@/components/ui/theme-toggle-button';

export default function Home() {
  return (
    <main className="flex size-full min-h-lvh flex-col justify-between gap-8 p-5 md:p-10">
      {/* Navbar */}
      <div className="flex size-full items-center justify-between">
        <Mountain />
        <ThemeToggleButton />
      </div>

      {/* Landing Page */}
      <div className="mx-auto flex max-w-7xl flex-col gap-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-4">
          <h1 className="text-center font-heading text-2xl font-semibold tracking-[-0.02em] [text-wrap:balance] sm:text-3xl md:text-4xl lg:text-8xl">
            Building blocks for your Next project
          </h1>
          <span className="text-center font-body tracking-[-0.02em] opacity-80 [text-wrap:balance]   md:text-lg lg:text-xl">
            An opinionated Next.js Boilerplate that is not just about starting; it&apos;s about starting right.
            Here&apos;s what sets it apart:
          </span>
        </div>
        <BentoGridThirdDemo />
      </div>

      {/* Footer */}
      <div className="mx-auto flex flex-col gap-2">
        <span>A project by Edwin Hernandez</span>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          className={buttonVariants({ variant: 'default' })}
          href="https://www.buymeacoffee.com/edwinhern"
        >
          <IconCoffee className="mr-2 size-4" /> Buy me a coffee
        </Link>
      </div>
    </main>
  );
}
