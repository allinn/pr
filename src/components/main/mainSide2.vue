<template>

<div>
 <button v-on:click="num = NumMinus(num)">◀</button>
 <ul>
 <li v-for="item in ItemFind(num)" :key="item.theme">
       <h1> {{item.theme[0]}} </h1>      
    <div class="actions">
      <base-button mode="outline" link :to="ItemDetailLink(item.theme)">
          <img :src="item.picture">
      </base-button>
    </div>
 </li>
 </ul>
 <button v-on:click="num = NumPlus(num)">▶</button>
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
                {
                    theme: ['Best'],
                    picture: require('../../store/picture/img.jpg'),
                    title: "BEST ITEM",
                  }
                  ,
                 {
                    theme: ['Shoes'],
                    picture: require('../../store/picture/img.jpg'),
                    title: "Shoes",
                  }
                  ,
                  {
                    theme: ['Sale'],
                    picture: require('../../store/picture/img.jpg'),
                    title: 'Season Off Sale',
                  }
                  ,
                  {
                    theme: ['Jean'],
                    picture: require('../../store/picture/img.jpg'),
                    title: "Jean",
                    
                  }
                  ,
                  {
                    theme: ['Outer'],
                    picture: require('../../store/picture/img.jpg'),
                    title: "Outer",
                  }
                  ,
          
            ]
    };
  },
  computed: {

  //  isCoach() {
   //   return this.$store.getters['items/isCoach'];
   // },

  },
  created() {
  
  },

  methods: {
      NumMinus(num)
      {
        return (num+4)%5;
      },

    NumPlus(num)
    { 
        return (num+1)%5;
    },


    ItemFind(num)
  {
      console.log(num);


      if(num<=2)
      {
          return this.temp.slice(num,num+3);
      }
    
        if(num===3)
        {
            let dummy =[]; 
            dummy.push(this.temp[3]);
            dummy.push(this.temp[4]);
            dummy.push(this.temp[0]);
            return dummy;
        }

        let dummy=[];
        dummy.push(this.temp[4]);
        dummy.push(this.temp[0]);
        dummy.push(this.temp[1]);

      return dummy;
  },

    ItemDetailLink(idx_theme) {
      return '/main/' + idx_theme; 
    },

  },
};
</script>

<style scoped>
h1 {
    margin: 1rem 5rem;
}

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
  display: flex;
  
}

.actions {
  display: flex;
  justify-content: flex-end;
}

</style>