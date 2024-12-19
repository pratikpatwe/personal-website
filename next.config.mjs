/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'example.com','raw.githubusercontent.com' , 'another-source.com'], // Add your allowed domains here
  },
};

export default nextConfig;