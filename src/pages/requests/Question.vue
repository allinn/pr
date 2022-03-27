<template>
    <section>
        <h1> 질문과 대답 </h1>
        <table>
            <tr>
            <th> 번호 </th>
            <th> 제목 </th>
            <th> 작성자 </th>
            <th> 작성일 </th>
            <th> 조회 </th>
            </tr>
            <main-table v-for="ad_data in admin_Data" :key="ad_data.id"
                :id="ad_data.id"
                :username="ad_data.username"
                :password="ad_data.password"
                :title="ad_data.title"
                :discription="ad_data.discription"
                :date="ad_data.date"
                :seen="ad_data.seen"
                :page_type="ad_data.type"
            >
            </main-table>
            <main-table v-for="data in Data" :key="data.id"
                :id="data.id"
                :username="data.username"
                :password="data.password"
                :title="data.title"
                :discription="data.discription"
                :date="data.date"
                :seen="data.seen"
                :attach="data.attach"
                :page_type="data.type"
            >
            </main-table>
        </table>
    </section>

    <main-filter @save-data="formData"  ></main-filter>
    <main-page :page="page_number" @num="formPage"></main-page>

</template>
<script>
import MainFilter from '../../components/main/mainFilter.vue';
import MainTable from '../../components/main/mainTable.vue';
import MainPage from '../../components/main/mainPage.vue';

export default {
 components: {
    MainTable,
    MainFilter,
    MainPage,
  },

    data() {
        return{
        admin_data: null, // 받은 데이터
        data: null, //받은 데이터

        page_number: 1, //페이징 받은 숫자데이터
        page_type: '',
        page_content: '',

        query_data: null, //페이징 할 데이터
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
    
    admin_Data(){
        return this.admin_data;
    },

    Data(){
        return this.data;
    },


      //   selected: this.set_filter.val,
     //     search_data: this.search,
     //     type_: this.type,

    },
    methods: {

   formPage(num)
   {
       this.query_page=num;
       this.$router.push({path: "/question",query: {type: this.page_type, data: this.page_content, page: this.query_page}});           
   },
            
   formData(form){
                this.query_data=form;
                this.$router.push({path: "/question",query: {type: this.query_data.selected, data: this.query_data.search_data, page: 1}});        
    },
 

    },

       
    created(){

        if(this.$route.query.page!=null) this.page_number=this.$route.query.page;
        if(this.$route.query.type!=null) this.page_type=this.$route.query.type;
        if(this.$route.query.data!=null) this.page_content=this.$route.query.data;

         this.admin_data= this.$store.getters['requests/admin_requests_question'];
         this.data = this.$store.getters['requests/requests_question'];       

       

     //     console.log(this.$route.query,this.page_data);
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