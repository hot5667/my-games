/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
          remotePatterns: [{
               protocol: 'https',
               hostname: 'ddragon.leagueoflegends.com',
               port: '',
               pathname: '/cdn/14.19.1/img/champion/**',
          }, ],
     },
};

export default nextConfig;
