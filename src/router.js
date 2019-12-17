import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
		path: '/',
		name: 'index',
		component: () => import('./views/index.vue')
	}, {
		path: '/container',
		name: 'container',
		component: () => import('./components/main/index.vue'),
		children: [{
			path: '/main',
			name: 'main',
			component: () => import('./views/main')
		}, {
			path: '/monitor',
			name: 'monitor',
			component: () => import('./views/monitor')
		}, {
			path: '/dispatch',
			name: 'dispatch',
			component: () => import('./views/dispatch')
		}, {
			path: '/weather',
			name: 'weather',
			component: () => import('./views/weather')
		}]
	}]
})
