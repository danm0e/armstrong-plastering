const path = require(`path`)

// Enables and defines our aliases. Nice.
exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				"@components": path.resolve(__dirname, "src/components"),
				"@assets": path.resolve(__dirname, "src/assets"),
				"@layout": path.resolve(__dirname, "src/layout"),
				"@modules": path.resolve(__dirname, "src/modules")
			}
		}
	})
}
