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

    <main-filter :type="typeofPage" @save-data="formData" ></main-filter>
    


</template>
<script>
import MainFilter from '../../components/main/mainFilter.vue';
import mainTable from '../../components/main/mainTable.vue';

export default {
 components: {
    mainTable,
    MainFilter,
  },

    data() {
        return{
        typeofPage: "question",
        admin_data: null,
        data: null, //페이징 받은 데이터
        query_data: null, //페이징 할 데이터
        page_data: null, //페이징 할 숫자데이터

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
            
   formData(form){
                this.query_data=form;
                this.$router.push({path: "/question",query: {type: this.query_data.selected, data: this.query_data.search_data}});
          

                console.log(this.query_data);          
    },
 

    },

       
    created(){


        console.log(this.$route.query);



         this.admin_data= this.$store.getters['requests/admin_requests_question'];
         this.data = this.$store.getters['requests/requests_question'];       
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