import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/main/mainDetail.vue';
import CoachesList from './pages/main/mainList.vue';
import CoachRegistation from './pages/main/mainRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
import Login from './pages/user/Login.vue';
import Question from './pages/requests/Question.vue';
import Review from './pages/requests/Review.vue';
import Notice from './pages/requests/Notice.vue';
import Search from './pages/requests/Search.vue';
import Join from './pages/user/Join.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/main' },
        { path: '/main', component: CoachesList },
        {
            path: '/coaches/:id',
            component: CoachDetail,
            props: true,
            children: [
                { path: 'contact', component: ContactCoach } // /coaches/c1/contact
            ]
        },
        { path: '/register', component: CoachRegistation },
        { path: '/requests', component: RequestsReceived },
        { path: '/:notFound(.*)', component: NotFound },
        { path: '/login', component: Login },
        { path: '/question', component: Question },
        { path: '/review', component: Review },
        { path: '/notice', component: Notice },
        { path: '/seatch', component: Search },
        { path: '/join', component: Join },






    ]
});

export default router;