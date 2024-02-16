import { IconBrandGithub, IconBrandVercel, IconCoffee } from '@tabler/icons-react';
import { Mountain } from 'lucide-react';
import Link from 'next/link';

import { BentoGridThirdDemo } from '@/components/Landing';
import { buttonVariants } from '@/components/ui/button';
import { ThemeToggleButton } from '@/components/ui/theme-toggle-button';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main className="flex size-full min-h-lvh flex-col justify-between gap-8 p-5 md:p-10">
      {/* Navbar */}
      <div className="flex size-full items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <Mountain />
          <h1 className="font-heading text-lg font-bold">NextHorizon</h1>
        </div>
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
          <div className="mx-auto mt-6 flex items-center justify-center space-x-5">
            {/* Deploy to Vercel & Start on Github */}
            <Link
              rel="noopener noreferrer"
              target="_blank"
              className={cn('', buttonVariants({ variant: 'default' }))}
              href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fedwinhern%2Fnext-template-2024&project-name=next-template-2024&repository-name=next-template-2024&demo-title=Next.js%202024%20Template&demo-description=An%20advanced%20Next.js%20template%20equipped%20with%20TailwindCSS%2C%20TypeScript%2C%20and%20essential%20developer%20tools.&demo-url=https%3A%2F%2Fyour-demo-url.com"
            >
              <IconBrandVercel className="mr-2 size-4" /> Deploy to Vercel
            </Link>
            {/*                href="https://vercel.com/new/git/external?repository-url=https://github.com/Blazity/next-enterprise"
             */}
            <Link
              rel="noopener noreferrer"
              target="_blank"
              className={buttonVariants({ variant: 'outline' })}
              href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fedwinhern%2Fnext-template-2024&project-name=next-template-2024&repository-name=next-template-2024&demo-title=Next.js%202024%20Template&demo-description=An%20advanced%20Next.js%20template%20equipped%20with%20TailwindCSS%2C%20TypeScript%2C%20and%20essential%20developer%20tools.&demo-url=https%3A%2F%2Fyour-demo-url.com"
            >
              <IconBrandGithub className="mr-2 size-4" /> Star on Github
            </Link>
          </div>
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
