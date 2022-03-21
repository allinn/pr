<template>
    <section>
        <h1> 질문과 대답 </h1>
        <h2> {{Data.title}} </h2>
        <h3> {{Data.date}} </h3>
        <h3> {{Data.username}} </h3>
        <h4> {{Data.seen}} </h4>
        <h3> {{Data.discription}} </h3>
    </section>
 <request-bar :link="Data.type"></request-bar>
</template>
<script>
import RequestBar from '../../components/requests/RequestBar.vue';
export default {
 components: {
 RequestBar,
  },
 
                    //password: '1234',
                    //attach: 'null',
                    //type: 'question',



    props: ['id'],

    data() {
        return{
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
        return this.data[0];
    },

    },
    method: {

    },
    created(){
         this.data= this.$store.getters['requests/admin_requests_notice'].filter(req => (req.id == this.id));

    },

}
</script>


<style scoped>

</style>