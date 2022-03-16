<template>
      <td>※</td>
      <router-link :to="domain">
      <td>{{ title }}  </td>
      </router-link>
      <td>{{username}} </td>
      <td>{{data}}</td>
      <td>{{seen}}</td>
</template>

<script>
   
export default {
  props: ['id', 'username','password', 'title', 'discription', 'date', 'seen'],
  computed: {
      check(){
        return console.log(this.title);
      },

      domain(){
        return '/Q&A/'+this.id;
      },

   // ItemDetailLink() {
   //   return '/detail/' + this.id; 
   // },
  },
  methods:
  {
 

  },

};
</script>

<style scoped>


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