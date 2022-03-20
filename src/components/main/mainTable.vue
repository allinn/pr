<template>
    <tr>
      <td>{{id}}</td>       
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
      required: false,
      default: '※'
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
      check(){
        return console.log(this.title);
      },

      domain(){
        console.log(this.page_type);
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