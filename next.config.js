/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

module.exports = {
    /**
     * Tell Next.js where the `public` folder is.
     * Replace `nextjs-github-pages` with your Github repo project name.
     */
    assetPrefix: isProd ? "" : "", // will be empty on prod because site is served via own domain

    /**
     * Disable server-based image optimization.
     *
     * @see https://nextjs.org/blog/next-12-3#disable-image-optimization-stable
     */
    images: {
        unoptimized: true,
    },
};
