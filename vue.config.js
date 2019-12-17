module.exports = {
	configureWebpack: (config) => {
		if (process.env.NODE_ENV === 'production') {
			// 为生产环境修改配置...
			config.mode = 'production'
		} else {
			// 为开发环境修改配置...
			config.mode = 'development'
		}
	},

	lintOnSave: false
}
