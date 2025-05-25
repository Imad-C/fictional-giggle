import adapter from '@sveltejs/adapter-node';

const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/components',
			$stores: 'src/stores'
		}
	}
};

export default config;
