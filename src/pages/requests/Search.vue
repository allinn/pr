<template>
    <section>
        <h1>Search</h1>
        <search-form @save-data="get_data"></search-form>
    </section>
    <section v-if="get_search_data!==null">
    <search-list :search_data="get_search_data"></search-list>
    </section>
</template>

<script>
import SearchForm from '../../components/requests/SearchForm.vue';
import SearchList from './SearchList.vue';

export default {
      components: {
        SearchForm,
        SearchList,
      }
        ,
    data() {     
        return {
            search_data: null,
        };
    },

    computed: {

        get_search_data()
        {
            return this.search_data;
        },

    },

    methods: {

        get_data(Data)
        {
            this.search_data=Data;
     

        },

    },

    created() {

    },

    
}
</script>



<style scoped>


</style>