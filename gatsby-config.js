module.exports = {
	pathPrefix: `/armstrong-plastering`,
	siteMetadata: {
		title: `Armstrong Plastering and Decorating`,
		description: `Professional plastering and decorating, Slough, London`,
		author: `@thefullbyte`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-sass`,
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: ['Merriweather:400,300,300italic,400italic,700,700italic', 'Merriweather+Sans:400,700']
				}
			}
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
