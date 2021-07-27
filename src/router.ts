import { RouterMount, createRouter } from 'uni-simple-router';
import store from './store';
import { CHANGE_CURRENT_PAGE_ROUTE } from './store/namespace';

const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,
	routes: [...ROUTES]
});

router.beforeEach((to, from, next) => {
	next();
});
router.afterEach((to, from) => {
	const path = to.path
	store.commit(CHANGE_CURRENT_PAGE_ROUTE, path)
})

export {
	router,
	RouterMount
}
