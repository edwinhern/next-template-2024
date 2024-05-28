import million from 'million/compiler';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const millionConfig = {
  auto: {
    rsc: true,
  },
  server: true,
  rsc: true,
};

export default million.next(nextConfig, millionConfig);
