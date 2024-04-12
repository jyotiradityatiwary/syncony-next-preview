/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    // rewrites: async () => [
    //     {
    //       source: "/o",
    //       destination: "/syncony-landing-page/index.html",
    //     },
    //   ],
};

export default nextConfig;
