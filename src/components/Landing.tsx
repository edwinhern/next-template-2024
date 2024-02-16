'use client';

import {
  IconBox,
  IconBoxAlignRightFilled,
  IconBrandDocker,
  IconBrandNextjs,
  IconBrandTypescript,
  IconCode,
  IconFilePencil,
  IconHammer,
  IconRainbow,
  IconRefresh,
  IconZoomFilled,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { FC, PropsWithChildren } from 'react';

import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { cn } from '@/lib/utils';

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn('[&>p:text-lg] font-body', item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex size-full min-h-[6rem] flex-1 rounded-xl border   border-transparent bg-neutral-100 bg-dot-black/[0.2]  [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:border-white/[0.2] dark:bg-black dark:bg-dot-white/[0.2]"></div>
);

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex size-full min-h-[6rem] flex-1 flex-col space-y-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
    >
      <motion.div
        variants={variants}
        className="flex flex-row items-center space-x-2 rounded-full border border-neutral-100  bg-white p-2 dark:border-white/[0.2] dark:bg-black"
      >
        <div className="size-6 shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
        <div className="h-4 w-full rounded-full bg-gray-100 dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="ml-auto flex w-3/4 flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black"
      >
        <div className="h-4 w-full rounded-full bg-gray-100 dark:bg-neutral-900" />
        <div className="size-6 shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black"
      >
        <div className="size-6 shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
        <div className="h-4 w-full rounded-full bg-gray-100 dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: '100%',
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ['0%', '100%'],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex size-full min-h-[6rem] flex-1 flex-col space-y-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
    >
      {arr.map((_, i) => (
        <motion.div
          key={'skelenton-two' + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + '%',
          }}
          className="flex h-4 w-full flex-row items-center space-x-2 rounded-full  border border-neutral-100 bg-neutral-100 p-2 dark:border-white/[0.2] dark:bg-black"
        ></motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree: FC<PropsWithChildren> = ({ children }) => {
  const variants = {
    initial: {
      backgroundPosition: '0 50%',
    },
    animate: {
      backgroundPosition: ['0, 50%', '100% 50%', '0 50%'],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
      className="flex size-full min-h-[6rem] flex-1 flex-col space-y-2 rounded-lg bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
      style={{
        background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
        backgroundSize: '400% 400%',
      }}
    >
      <motion.div className="size-full rounded-lg">{children}</motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex size-full min-h-[6rem] flex-1 flex-row space-x-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
    >
      <motion.div
        variants={first}
        className="flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 dark:border-white/[0.1] dark:bg-black"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="size-10 rounded-full"
        />
        <p className="mt-4 text-center text-xs font-semibold text-neutral-500 sm:text-sm">
          Just code in Vanilla Javascript
        </p>
        <p className="mt-4 rounded-full border border-red-500 bg-red-100 px-2 py-0.5 text-xs text-red-600 dark:bg-red-900/20">
          Delusional
        </p>
      </motion.div>
      <motion.div className="relative z-20 flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 dark:border-white/[0.1] dark:bg-black">
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="size-10 rounded-full"
        />
        <p className="mt-4 text-center text-xs font-semibold text-neutral-500 sm:text-sm">
          Tailwind CSS is cool, you know
        </p>
        <p className="mt-4 rounded-full border border-green-500 bg-green-100 px-2 py-0.5 text-xs text-green-600 dark:bg-green-900/20">
          Sensible
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 dark:border-white/[0.1] dark:bg-black"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="size-10 rounded-full"
        />
        <p className="mt-4 text-center text-xs font-semibold text-neutral-500 sm:text-sm">
          I love angular, RSC, and Redux.
        </p>
        <p className="mt-4 rounded-full border border-orange-500 bg-orange-100 px-2 py-0.5 text-xs text-orange-600 dark:bg-orange-900/20">
          Helpless
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex size-full min-h-[6rem] flex-1 flex-col space-y-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
    >
      <motion.div
        variants={variants}
        className="flex h-14 flex-row space-x-2 rounded-2xl border border-neutral-100  bg-white p-2 dark:border-white/[0.2] dark:bg-black"
      >
        <IconBrandNextjs className="size-full" />
      </motion.div>

      <motion.div
        variants={variantsSecond}
        className="ml-auto flex h-14 flex-row items-center justify-end space-x-2 rounded-lg border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black"
      >
        <IconBrandTypescript className="size-full" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonSix = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex size-full min-h-[6rem] flex-1 flex-col space-y-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
    >
      <motion.div
        variants={variants}
        className="flex flex-row items-start space-x-2 rounded-2xl border border-neutral-100  bg-white p-2 dark:border-white/[0.2] dark:bg-black"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="size-10 rounded-full"
        />
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Angular, Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="ml-auto flex w-3/4 flex-row items-center justify-end space-x-2 rounded-full border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Use PHP.</p>
        <div className="size-6 shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: 'Next.js + TypeScript',
    description: (
      <span className=" text-sm">
        Leverage the full power of Next.js 14 and TypeScript for robust, scalable applications that stand the test of
        time.
      </span>
    ),
    header: <SkeletonFive />,
    className: 'md:col-span-1',
    icon: <IconBoxAlignRightFilled className="size-4 text-neutral-500" />,
  },

  {
    title: 'ESLint + Prettier Setup',
    description: (
      <span className="text-sm">
        Code quality is non-negotiable. With ESLint and Prettier, your codebase remains clean, consistent, and
        error-free.
      </span>
    ),
    header: <SkeletonTwo />,
    className: 'md:col-span-1',
    icon: <IconZoomFilled className="size-4 text-neutral-500" />,
  },
  {
    title: 'Husky + lint-staged',
    description: (
      <span className="text-sm">
        Never compromise on code quality. Our setup ensures every commit is polished and ready for collaboration.
      </span>
    ),
    header: (
      <SkeletonThree>
        <IconCode className="size-full" />
      </SkeletonThree>
    ),
    className: 'md:col-span-1',
    icon: <IconHammer className="size-4 text-neutral-500" />,
  },
  {
    title: 'Commitlint',
    description: (
      <span className="text-sm">
        Make every commit count. Enforce meaningful commit messages for a clear, navigable project history.Keep commit
        messages clear and meaningful, streamlining project history and collaboration.
      </span>
    ),
    header: <SkeletonFour />,
    className: 'md:col-span-2',
    icon: <IconFilePencil className="size-4 text-neutral-500" />,
  },

  {
    title: 'TailwindCSS & shadcnUI',
    description: <span className="text-sm">Build stunning, responsive designs effortlessly. Our integration .</span>,
    header: <SkeletonOne />,
    className: 'md:col-span-1',
    icon: <IconRainbow className="size-4 text-neutral-500" />,
  },

  {
    title: 'Docker Ready',
    description: (
      <span className="text-sm">
        From development to deployment, our Docker-ready configuration ensures your project transitions smoothly across
        environments.
      </span>
    ),
    header: (
      <SkeletonThree>
        <IconBrandDocker className="size-full" />
      </SkeletonThree>
    ),
    className: 'md:col-span-1',
    icon: <IconBox className="size-4 text-neutral-500" />,
  },
  {
    title: 'Simple Import Sort & Framer Motion',
    description: (
      <span className="text-sm">
        Keep imports tidy and animate with ease. Our boilerplate simplifies imports and enriches user experiences with
        Framer Motion for engaging animations.
      </span>
    ),
    header: <SkeletonFour />,
    className: 'md:col-span-2',
    icon: <IconRefresh className="size-4 text-neutral-500" />,
  },
  // {
  //   title: `Powered by Next.js 14's App Router`,
  //   description: (
  //     <span className="text-sm">
  //       Embrace the cutting-edge with Next.js 14&aposs App Router, offering enhanced routing capabilities for your
  //       applications.
  //     </span>
  //   ),
  //   header: <SkeletonFour />,
  //   className: 'md:col-span-3',
  //   icon: <IconBolt className="size-4 text-neutral-500" />,
  // },
];
