import { createStore } from 'vuex';

import itemModule from './modules/items/index.js';
import requestsModule from './modules/requests/index.js';

const store = createStore({
    modules: {
        items: itemModule,
        requests: requestsModule
    },
    state() {
        return {
            userId: null
        };
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
});

export default store;