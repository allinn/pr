import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            // update 여부도 check하여 갱신하도록 하자.
            admin_requests:[
                {
                    id: 0,
                    username: 'ADMIN',
                    password: '1234',
                    title: 'Q&A 공지사항',
                    discription: '문의시 주의점',
                    attach: 'null',
                    date: '2022-03-16',
                    seen: '100',
                    type: 'question',
                },

                {
                    id: 2,
                    username: 'ADMIN',
                    password: '1234',
                    title: '공지사항 주의점',
                    discription: '문의',
                    attach: 'null',
                    date: '2022-03-16',
                    seen: '23',
                    type: 'notice',
                },
            ],

            requests: [
                {
                    id: 1,
                    username: 'abc',
                    password: '1234',
                    title: '배송문의',
                    discription: '문의',
                    attach: 'null',
                    date: '2022-03-16',
                    seen: '2',
                    type: 'question',
                },

            ]
        };
    },
    mutations,
    actions,
    getters
};