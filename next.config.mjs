/** @type {import('next').NextConfig} */
import withImages from 'next-images';

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
     },
};

export default withImages(nextConfig);