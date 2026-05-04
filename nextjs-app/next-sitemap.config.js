/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://investally.co.in',
    generateRobotsTxt: true, // (optional) Generate robots.txt file
    generateIndexSitemap: false, // (optional) Set to true if you have many pages
    exclude: ['/server-sitemap.xml'], // <= exclude here
    robotsTxtOptions: {
        additionalSitemaps: [
            // Add any additional sitemaps here if needed
        ],
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
    // Optional: Add change frequency and priority
    changefreq: 'weekly',
    priority: 0.7,
    // Optional: Add additional paths that might not be automatically discovered
    additionalPaths: async (config) => {
        const result = [];
        return result;
    },
}
