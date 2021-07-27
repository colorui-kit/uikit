const MonacoEditorPlugin = require('monaco-editor-webpack-plugin')

const TransformPages = require('uni-read-pages')
const { webpack } = new TransformPages()

module.exports = {
	configureWebpack: {
		plugins: [
			new webpack.DefinePlugin({
				ROUTES: webpack.DefinePlugin.runtimeValue(() => {
					const tfPages = new TransformPages({
						includes: ['path', 'name', 'aliasPath']
					});
					return JSON.stringify(tfPages.routes)
				}, true)
			})
		]
	},
	chainWebpack: config => {
		config.plugin('monaco-editor').use(MonacoEditorPlugin, [
			{
				languages: ['json', 'javascript', 'html', 'vue'],
				features: ['!gotoSymbol']
			}
		])
	},
}
