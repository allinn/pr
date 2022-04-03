<template>

<div>
 <button v-on:click="NumMinus">◀</button>
 <ul>
 <li v-for="page in 10" :key=page>
       <button @click="emit_num(page_num+page)"> {{page_num+page}} </button>      
 </li>
 </ul>
 <button v-on:click="NumPlus">▶</button>
</div>

</template>

<script>



export default {
  components: {

  },

    props: ['page',],
    emits: ['num',],
  data() {
    return {
      page_num: 1,
    
    };
  },
  computed: {

      
  //  isCoach() {
   //   return this.$store.getters['items/isCoach'];
   // },

  },
  created() {
      
      this.page_num=Math.max((Number(this.page)-1),1);
      this.page_num=parseInt(this.page_num/10);
      this.page_num*=10;

     
  },

  methods: {

      emit_num(page_number)
      {     
           this.$emit('num', page_number);
      },
      NumMinus()
      {
        this.page_num=Math.max(0,this.page_num-10);
        
        console.log(this.page_num);
      },

    NumPlus()
    { 
        this.page_num+=10;
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
p {
    color:black;
    margin: 1rem 1rem;
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