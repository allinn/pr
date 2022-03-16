<template>
  <li>      
    <div class="actions">
      <base-button mode="outline" link :to="ItemDetailLink">
          <img :src=picture>
      </base-button>
    </div>

    <div>
    
         <h4>{{ title }}</h4>
         <h4>{{ price }} 원 </h4>
          <h4>{{ discountedprice }} 원 </h4>
          <h4>{{discription}} </h4>
      <base-badge v-for="badge in badges" :key="badge" :type="badge" :title="badge"></base-badge>
    </div>
  </li>
</template>

<script>
   
export default {
  props: ['id','picture', 'title', 'price', 'discountedprice', 'discription','badges'],
  computed: {

    ItemDetailLink() {
      return '/detail/' + this.id; 
    },
  },
  methods:
  {
 

  },

};
</script>

<style scoped>



li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
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