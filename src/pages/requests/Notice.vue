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
        </table>
    </section>

    <main-filter :type="typeofPage"></main-filter>
</template>
<script>
import mainTable from '../../components/main/mainTable.vue';
import mainFilter from '../../components/main/mainFilter.vue';

export default {
 components: {
    mainTable,
    mainFilter,
  },

    data() {
        return{
        admin_data: null,
        typeofPage: "notice",
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

    },
    method: {

       

    },
    created(){
         this.admin_data= this.$store.getters['requests/admin_requests_notice'];        
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