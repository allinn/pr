import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            lastFetch: null,
            items: [
                [{
                        id: 1,
                        theme: ['Best', 'Shoes', 'WeeklyBest'],
                        picture: require('../../picture/img.jpg'),
                        title: "구두1",
                        price: "10000",
                        discountedprice: "8000",
                        discription: "세상에서 제일 아름다운 구두",
                        badges: ["5% 할인", "주문폭주"],
                    },
                    {
                        id: 2,
                        theme: ['Best', 'Outer', 'BestItem'],
                        picture: require('../../picture/img.jpg'),
                        title: "구두2",
                        price: "10000",
                        discountedprice: "8000",
                        discription: "세상에서 제일 아름다운 구두",
                        badges: ["5% 할인", "주문폭주"],
                    },
                    {
                        id: 3,
                        theme: ['Best', 'Top', 'Sale'],
                        picture: require('../../picture/img.jpg'),
                        title: "구두3",
                        price: "10000",
                        discountedprice: "8000",
                        discription: "세상에서 제일 아름다운 구두",
                        badges: ["5% 할인", "주문폭주"],
                    },
                    {
                        id: 4,
                        theme: ['Best', 'Shirts&Blouse'],
                        picture: require('../../picture/img.jpg'),
                        title: "구두4",
                        price: "10000",
                        discountedprice: "8000",
                        discription: "세상에서 제일 아름다운 구두",
                        badges: ["5% 할인", "주문폭주"],
                    }
                ],
                [{
                        id: 5,
                        theme: ['Best', 'Knit&Cardigan'],
                        picture: require('../../picture/img.jpg'),
                        title: "구두5",
                        price: "10000",
                        discountedprice: "8000",
                        discription: "세상에서 제일 아름다운 구두",
                        badges: ["5% 할인", "주문폭주"],
                    },
                    {
                        id: 6,
                        theme: ['Best', 'Pants'],
                        picture: require('../../picture/img.jpg'),
                        title: "구두6",
                        price: "10000",
                        discountedprice: "8000",
                        discription: "세상에서 제일 아름다운 구두",
                        badges: ["5% 할인", "주문폭주"],
                    },
                    {
                        id: 7,
                        theme: ['Best', 'Jean'],
                        picture: require('../../picture/img.jpg'),
                        title: "구두7",
                        price: "10000",
                        discountedprice: "8000",
                        discription: "세상에서 제일 아름다운 구두",
                        badges: ["5% 할인", "주문폭주"],
                    },
                    {
                        id: 8,
                        theme: ['Best', 'Skirt&Dress'],
                        picture: require('../../picture/img.jpg'),
                        title: "구두8",
                        price: "10000",
                        discountedprice: "8000",
                        discription: "세상에서 제일 아름다운 구두",
                        badges: ["5% 할인", "주문폭주"],
                    }
                ],

            ]
        };
    },
    mutations,
    actions,
    getters
};