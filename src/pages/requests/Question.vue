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
            <tr>
                
            <main-table v-for="ad_data in admin_Data" :key="ad_data.title"
                :username="ad_data.username"
                :password="ad_data.password"
                :title="ad_data.title"
                :discription="ad_data.discription"
                :data="ad_data.data"
                :seen="ad_data.seen"
                :id="ad_data.id"
            >
            </main-table>
            </tr>
        </table>
    </section>
</template>
<script>
import mainTable from '../../components/main/mainTable.vue';

export default {
 components: {
    mainTable,
  },

    data() {
        return{
        admin_data: null,
        data: null,
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

    },
    method: {

       

    },
    created(){
         this.admin_data= this.$store.getters['requests/admin_requests'];
         this.data = this.$store.getters['requests/requests'];
         console.log(this.admin_data);
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