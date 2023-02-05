module.exports = {
    siteMetadata: {
        title: "Carlos Calderon",
        description:
            "Carlos is a full-stack developer with over 15 years of experience. He specializes in ASP.NET Core, Node.js and Angular but he is also experienced in building DeFi Dapps , NFT Minting Dapps , NFT Market place development and GraphQL APIs.",
    },
    pathPrefix: "/",
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/content/images/`,
                name: "images",
            },
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-images",
                    },
                    {
                        resolve: "gatsby-remark-responsive-iframe",
                    },
                    "gatsby-remark-prismjs",
                    "gatsby-remark-copy-linked-files",
                    "gatsby-remark-smartypants",
                ],
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/content/portfolio/`,
                name: "portfolio",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/content/testimonials/`,
                name: "testimonials",
            },
        },
        {
            resolve: "gatsby-plugin-netlify",
            options: {
                mergeSecurityHeaders: true,
                mergeLinkHeaders: true,
                mergeCachingHeaders: true,
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Poppins\:300,400,400,700,800,900`],
                display: "swap",
            },
        },
        "gatsby-plugin-offline",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sass",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
    ],
};
