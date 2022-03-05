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
        <div v-for="(item,Index) in temp" :key="Index">
        <ul>
          <li v-if="Index%4!=3">
          <main-item 
            :picture="item.picture"
            :title="item.title"
            :price="item.price"
            :discountedprice="item.discountedprice"
            :discription= "item.discription"
            :badges="item.badges">
          </main-item>
                    <main-item 
            :picture="item.picture"
            :title="item.title"
            :price="item.price"
            :discountedprice="item.discountedprice"
            :discription= "item.discription"
            :badges="item.badges">
          </main-item>
                    <main-item 
            :picture="item.picture"
            :title="item.title"
            :price="item.price"
            :discountedprice="item.discountedprice"
            :discription= "item.discription"
            :badges="item.badges">
          </main-item>
          </li>
        </ul>
        <ul>
        <li v-if="Index%4==3" id="sep">
          <main-item 
            :picture="item.picture"
            :title="item.title"
            :price="item.price"
            :discountedprice="item.discountedprice"
            :discription= "item.discription"
            :badges="item.badges">{{$item=$item+4}}
          </main-item>
        </li>
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

      temp:
      [
        {
          picture: require('../../store/picture/img.jpg'),
          title: "구두1",
          price: "10000",
          discountedprice: "8000",
          discription: "세상에서 제일 아름다운 구두",
          badges: ["5% 할인","주문폭주"],
        }
        ,
       {
          picture: require('../../store/picture/img.jpg'),
          title: "구두2",
          price: "10000",
          discountedprice: "8000",
          discription: "세상에서 제일 아름다운 구두",
          badges: ["5% 할인","주문폭주"],
        }
        ,
               {
          picture: require('../../store/picture/img.jpg'),
          title: "구두3",
          price: "10000",
          discountedprice: "8000",
          discription: "세상에서 제일 아름다운 구두",
          badges: ["5% 할인","주문폭주"],
        }
        ,
               {
          picture: require('../../store/picture/img.jpg'),
          title: "구두4",
          price: "10000",
          discountedprice: "8000",
          discription: "세상에서 제일 아름다운 구두",
          badges: ["5% 할인","주문폭주"],
        }
        ,
               {
          picture: require('../../store/picture/img.jpg'),
          title: "구두5",
          price: "10000",
          discountedprice: "8000",
          discription: "세상에서 제일 아름다운 구두",
          badges: ["5% 할인","주문폭주"],
        }
        ,
               {
          picture: require('../../store/picture/img.jpg'),
          title: "구두6",
          price: "10000",
          discountedprice: "8000",
          discription: "세상에서 제일 아름다운 구두",
          badges: ["5% 할인","주문폭주"],
        }
        ,
                    {
          picture: require('../../store/picture/img.jpg'),
          title: "구두7",
          price: "10000",
          discountedprice: "8000",
          discription: "세상에서 제일 아름다운 구두",
          badges: ["5% 할인","주문폭주"],
        }
        ,
                    {
          picture: require('../../store/picture/img.jpg'),
          title: "구두8",
          price: "10000",
          discountedprice: "8000",
          discription: "세상에서 제일 아름다운 구두",
          badges: ["5% 할인","주문폭주"],
        }
        ,

      ]


    };
  },
  computed: {
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
  
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
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
      return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
    },
  },
  created() {
  //  this.loadCoaches();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches', {
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



div div
{
  display: flex;
}

ul
 {
  list-style: none;
  margin: 0;
  padding: 0;
   display: block;
}

#sep
{
  display: block;
}


.controls {
  
  display: flex;
  justify-content: space-between;
}

</style>