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
        <div v-for="(Item,Index) in tempload" :key="Index">
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
   props: ['theme'],
  components: {
    MainItem,
  },
  data() {
    return {
      temp: [],
      
    };
  },
  computed: {
  //  isCoach() {
   //   return this.$store.getters['items/isCoach'];
   // },
  
    tempload()
    {
      const dummy= this.$store.getters['items/items'];
      var count=0;
      var idx=[];
      var ret=[];
      
      for(var i=0; i<dummy.length; i++)
      {
           for( var j=0; j<dummy[i].length;j++)
           {
             
              if(dummy[i][j].theme.includes(this.theme))
              {         
                count++;
                idx.push(dummy[i][j]);
                
                if(count==4)
                {
                  count=0;
                  ret.push(idx);
                  idx=[];
                }
                
             
              }
           }
      }

      if(count!==0)
      {
        ret.push(idx);
      }

      return ret;
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