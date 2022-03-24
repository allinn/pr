<template>
    <tr>
      <td v-if="username === 'ADMIN'">※</td>
      <td v-else>{{id}}</td>       
      <router-link :to="domain">
      <td>{{ title }}  </td>
      </router-link>
      <td>{{username}} </td>
      <td>{{date}}</td>
      <td>{{seen}}</td>
    </tr>
</template>

<script>
   
export default {

  props: {
    id: {
      required: true,
      type: Number,
    },

    page_type:{
      required: true,
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
    date: {
      require: true,
      type: String,
    },
    seen: {
      required: true,
      type: String,
    },
    attach: {
      required: false,
      
    },

  },

  computed: {
  

      domain(){
       
        return '/'+this.page_type+'/'+this.id;
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