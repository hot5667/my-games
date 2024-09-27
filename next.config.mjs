/** @type {import('next').NextConfig} */

const nextConfig = {
     images: {
          remotePatterns: [{
                    protocol: 'https',
                    hostname: 'ddragon.leagueoflegends.com',
                    port: '',
                    pathname: '/cdn/14.19.1/img/item/**', // 아이템 이미지 경로
               },
               {
                    protocol: 'https',
                    hostname: 'ddragon.leagueoflegends.com',
                    port: '',
                    pathname: '/cdn/14.19.1/img/champion/**',
               },
          ],
          formats: ['image/webp'],
     },
};

export default nextConfig;