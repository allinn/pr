import { createRouter, createWebHistory } from 'vue-router';

import ItemDetail from './pages/main/mainDetail.vue';
import ItemThemeDetail from './pages/main/ItemThemeDetail.vue'
import ItemList from './pages/main/mainList.vue';

//import CoachRegistation from './pages/main/mainRegistration.vue';
//import ContactCoach from './pages/requests/ContactCoach.vue';
//import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
import Login from './pages/user/Login.vue';
import Question from './pages/requests/Question.vue';
import Review from './pages/requests/Review.vue';
import Notice from './pages/requests/Notice.vue';
import Search from './pages/requests/Search.vue';
//import SearchDetail from './pages/requests/SearchDetail.vue';
import QuestionDetail from './pages/requests/QuestionDetail.vue';
import NoticeDetail from './pages/requests/NoticeDetail.vue';
import Join from './pages/user/Join.vue';
import Cart from './pages/user/Cart.vue';
import Order from './pages/user/MyPage.vue';
import MyPage from './pages/user/Order.vue';
import store from './store/index.js';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/main' },
        { path: '/main', component: ItemList },
        {
            path: '/main/:theme',
            component: ItemThemeDetail,
            props:  true,
        },

        {
            path: '/detail/:id',
            component: ItemDetail,
            props: true,
           // children: [
           //     { path: 'contact', component: ContactCoach } // /coaches/c1/contact
           // ]
        },

        {
            path: '/question/:id',
            component: QuestionDetail,
            props: true,
            
        },

        {
            path: '/notice/:id',
            component: NoticeDetail,
            props: true,

        },

        { 
            path: '/search', 
            component: Search,
           // children: [
            //    { path: 'search_info',component: SearchDetail}
           // ]
        },

        
        { path: '/:notFound(.*)', component: NotFound },
        { path: '/login', component: Login },
        { path: '/question', component: Question },
        { path: '/review', component: Review },
        { path: '/notice', component: Notice },
       
        { path: '/join', component: Join },
        { path: '/cart', component: Cart, meta: {requireAuth: true}},
        { path: '/Order', component: Order , meta: {requireAuth: true}},
        { path: '/MyPage', component: MyPage , meta: {requireAuth: true}},






    ]
});

router.beforeEach(function(to,from,next){
    if(to.meta.requireAuth && !store.getters.isAuthenticated)
    {
        next('/login');
    } 
    else if (to.meta.requireAuth && store.getters.isAuthenticated)
    {
        next('/main');
    }
    else {
        next();
    }
});

export default router;