import { createStore } from 'vuex';

import itemModule from './modules/items/index.js';
import requestsModule from './modules/requests/index.js';
import reviewsModule from './modules/reviews/index.js';
import userModule from './modules/user/index.js';


const store = createStore({
    modules: {
        items: itemModule,
        requests: requestsModule,
        reviews: reviewsModule,
        user: userModule,
    },


});

export default store;