import { createStore } from 'vuex';

import itemModule from './modules/items/index.js';
import requestsModule from './modules/requests/index.js';
import userModule from './modules/user/index.js';

const store = createStore({
    modules: {
        items: itemModule,
        requests: requestsModule,
        user: userModule,

    },

 
});

export default store;