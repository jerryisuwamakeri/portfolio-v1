module.exports = {
	purge: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}'
	],
	theme: {
		extend: {
			width: {
				'72': '18rem',
				'84': '21rem',
				'96': '24rem'
			}
		},
		container: {
	      center: true
	    }
	},
	variants: {
		margin: ['responsive', 'last']
	},
	plugins: [],
	corePlugins: {
		gridRow: false,
		gridRowStart: false,
		gridRowEnd: false
	}
}
