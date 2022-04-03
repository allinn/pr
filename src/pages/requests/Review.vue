<template>
    <section>
        <h1> Review </h1>
        <table>
            <tr>
            <th> 이미지 </th>
            <th> 상품명/상품리뷰 </th>
            <th> 작성자/평점 </th>
            <th> 등록일 </th>
            </tr>
            <review-table v-for="review in review_data" :key="review.id"
                :id="review.id"
                :picture="review.picture"
                :title="review.title"
                :discription="review.discription"
                :date="review.writing_date"
                :writer="review.writer"
                :stars="review.stars"
                :attach="review.attach"
            >
            </review-table>
        </table>
    </section>

    <main-page :page="page_number" @num="formPage"></main-page>

</template>
<script>

import ReviewTable from '../../components/main/reviewTable.vue';
import MainPage from '../../components/main/mainPage.vue';

export default {
 components: {
      ReviewTable,
      MainPage,
  },
/*
                    id: 5,
                    
                    picture: require('../../picture/img.jpg'),
                    title: "구두5",
                    discription: "세상에서 제일 아름다운 구두",
                    writer: '김땡땡',
                    stars: 5,
                    writing_date: '2022-03-31',
                    attach: */
    data() {
        return{
        reviews: null,
        page_number: 1, //페이징 받은 숫자데이터
        query_page: null, //페이징 해야할 숫자
        };
    },




    computed: {

    date_change()
        {
            var today = new Date();
            var year = today.getFullYear();
            var month = ('0' + (today.getMonth() + 1)).slice(-2);
            var day = ('0' + today.getDate()).slice(-2);
            return year + '-' + month  + '-' + day;
        },
    
    review_data(){
        return this.reviews;
    },

    },
    methods: {

       
   formPage(num)
   {
       this.query_page=num;
       this.$router.push({path: "/review",query: {page: this.query_page}});           
   },
            
 
    },

    created(){

        if(this.$route.query.page!=null) this.page_number=this.$route.query.page;

         this.reviews= this.$store.getters['reviews/reviews'];        
    },

}
</script>


<style scoped>



div
{
    display: flex;
    justify-content: space-between;

}

</style>