<template>

<div>
 <ul>
 <li v-for="item in ItemFind" :key="item.id">      
    <div class="actions">
      <base-button mode="outline" link :to="ItemDetailLink(item.id)">
          <img :src="item.picture">
      </base-button>
    </div>
 </li>
 </ul>
</div>


  <div>      
      <ul>
          <li>
              <button v-on:click="num = 0"></button>
          </li>
            <li>
              <button v-on:click="num = 1"></button>
          </li>
           <li>
              <button v-on:click="num = 2"></button>
          </li>   
      </ul>
  </div>
</template>

<script>



export default {
  components: {

  },
  data() {
    return {
        
        num: 0,
      temp: [
                [{
                    id: 1,
                    theme: ['Best','Shoes','WeeklyBest'],
                    picture: require('../../store/picture/img.jpg'),
                    title: "구두1",
                    price: "10000",
                    discountedprice: "8000",
                    discription: "세상에서 제일 아름다운 구두",
                    badges: ["5% 할인","주문폭주"],
                  }
                  ,
                 {
                    id: 2,
                    theme: ['Best','Outer','BestItem'],
                   picture: require('../../store/picture/img.jpg'),
                    title: "구두2",
                    price: "10000",
                    discountedprice: "8000",
                    discription: "세상에서 제일 아름다운 구두",
                    badges: ["5% 할인","주문폭주"],
                  }]
                  ,
                  [{
                    id: 3,
                    theme: ['Best','Top'],
                    picture: require('../../store/picture/img.jpg'),
                    title: "구두3",
                    price: "10000",
                    discountedprice: "8000",
                    discription: "세상에서 제일 아름다운 구두",
                    badges: ["5% 할인","주문폭주"],
                  }
                  ,
                  {
                    id: 4,
                    theme: ['Best','Shirts&Blouse'],
                    picture: require('../../store/picture/img.jpg'),
                    title: "구두4",
                    price: "10000",
                    discountedprice: "8000",
                    discription: "세상에서 제일 아름다운 구두",
                    badges: ["5% 할인","주문폭주"],
                  }]
                  ,
                    [{
                    id: 5,
                    theme: ['Best','Knit&Cardigan'],
                    picture: require('../../store/picture/img.jpg'),
                    title: "구두5",
                    price: "10000",
                    discountedprice: "8000",
                    discription: "세상에서 제일 아름다운 구두",
                    badges: ["5% 할인","주문폭주"],
                  }
                  ,
                  {
                    id: 6,
                    theme: ['Best','Pants'],
                   picture: require('../../store/picture/img.jpg'),
                    title: "구두6",
                    price: "10000",
                    discountedprice: "8000",
                    discription: "세상에서 제일 아름다운 구두",
                    badges: ["5% 할인","주문폭주"],
                  }]
                  ,
          
            ]
    };
  },
  computed: {

      ItemFind()
  {
      return this.temp[this.num];
  },

  //  isCoach() {
   //   return this.$store.getters['items/isCoach'];
   // },

  },
  created() {
  
  },



  methods: {
            ItemDetailLink(idx_id) {
      return '/detail/' + idx_id; 
    },

  },
};
</script>

<style scoped>


li {
    list-style: none;
    }

ul {
  
 display: flex;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
  
}

.actions {
  display: flex;
  justify-content: flex-end;
}

</style>