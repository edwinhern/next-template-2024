import React, { FC, PropsWithChildren } from 'react';

export const DotBackground: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative flex w-full items-center justify-center bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]">
      {/* Radial gradient for the container to give a faded look */}
      {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div> */}
      {children}
    </div>
  );
};
