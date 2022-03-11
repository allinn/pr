<template>
  <div>
  <!--  <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog> -->
    
  
      <!--
      <base-card>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasCoaches"> -->
        <div v-for="(Item,Index) in temp" :key="Index">
        <ul>          
          <main-item v-for="item in Item" :key="item.id"
            :id= "item.id"
            :picture="item.picture"
            :title="item.title"
            :price="item.price"
            :discountedprice="item.discountedprice"
            :discription= "item.discription"
            :badges="item.badges">
          </main-item>
        
        </ul>
        </div>
   <!--   </base-card> -->

  </div>
</template>

<script>
import MainItem from '../../components/main/mainItem.vue';


export default {
  components: {
    MainItem,
  },
  data() {
    return {
      temp: null,
    };
  },
  computed: {
  //  isCoach() {
   //   return this.$store.getters['items/isCoach'];
   // },
  
    tempload()
    {
      return this.$store.getters['items/items'];
    },

    filteredCoaches() {
      const coaches = this.$store.getters['items/coaches'];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters['items/hasItmes'];
    },
  },
  created() {
    //this.temp=this.loadCoaches();
   this.temp=this.tempload;
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },

    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('items/loadCoaches', {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>



ul
 {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}


.controls {
  
  display: flex;
  justify-content: space-between;
}

</style>