import { createStore } from 'vuex';

import itemModule from './modules/items/index.js';
import requestsModule from './modules/requests/index.js';
import reviewsModule from './modules/reviews/index.js';

const store = createStore({
    modules: {
        items: itemModule,
        requests: requestsModule,
        reviews: reviewsModule,
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