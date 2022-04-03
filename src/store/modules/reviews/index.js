import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            lastFetch: null,
            reviews: [{
                    id: 1,
                    picture: require('../../picture/img.jpg'),
                    title: "구두1",
                    discription: "세상에서 제일 아름다운 구두",
                    writer: '김땡땡',
                    stars: 5,
                    writing_date: '2022-03-31',
                    attach: null,
                },
                {
                    id: 2,
                    picture: require('../../picture/img.jpg'),
                    title: "구두2",
                    discription: "세상에서 제일 아름다운 구두",
                    writer: '김땡땡',
                    stars: 5,
                    writing_date: '2022-03-31',
                    attach: null,
                },
                {
                    id: 3,
                    picture: require('../../picture/img.jpg'),
                    title: "구두3",
                    discription: "세상에서 제일 아름다운 구두",
                    writer: '김땡땡',
                    stars: 5,
                    writing_date: '2022-03-31',
                    attach: null,
                },
                {
                    id: 4,
                    picture: require('../../picture/img.jpg'),
                    title: "구두4",
                    discription: "세상에서 제일 아름다운 구두",
                    writer: '김땡땡',
                    stars: 5,
                    writing_date: '2022-03-31',
                    attach: null,
                },

                {
                    id: 5,
                    picture: require('../../picture/img.jpg'),
                    title: "구두5",
                    discription: "세상에서 제일 아름다운 구두",
                    writer: '김땡땡',
                    stars: 5,
                    writing_date: '2022-03-31',
                    attach: null,
                },
                {
                    id: 6,
                    picture: require('../../picture/img.jpg'),
                    title: "구두6",
                    discription: "세상에서 제일 아름다운 구두",
                    writer: '김땡땡',
                    stars: 5,
                    writing_date: '2022-03-31',
                    attach: null,
                },
                {
                    id: 7,
                    picture: require('../../picture/img.jpg'),
                    title: "구두7",
                    discription: "세상에서 제일 아름다운 구두",
                    writer: '김땡땡',
                    stars: 5,
                    writing_date: '2022-03-31',
                    attach: null,
                },
                {
                    id: 8,
                    picture: require('../../picture/img.jpg'),
                    title: "구두8",
                    discription: "세상에서 제일 아름다운 구두",
                    writer: '김땡땡',
                    stars: 5,
                    writing_date: '2022-03-31',
                    attach: null,
                },
            ],


        };
    },
    mutations,
    actions,
    getters
};