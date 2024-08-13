import { createStore } from "vuex";

const store = createStore({
	state() {
		return {
			count: 3,
		};
	},
	mutations: {
		increment(state) {
			state.count++;
		},
	},
});

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(store);
});
