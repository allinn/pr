<template>
  <div>
    <section>
      <base-card>
        <img :src=picture>
        <h3>{{ title }}</h3>
        <h3>{{ price}} </h3>
        <h3>{{discountedprice}}</h3>
        <h3>{{discription}}</h3>
         <base-badge v-for="badge in badges" :key="badge" :type="badge" :title="badge"></base-badge>
      </base-card>   
    </section>
    <!--
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
    -->
  </div>

  <div>
  </div>

</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      dummyData: null,
      selectedCoach: null,
    };
  },
  computed: {
    picture() {
      return this.selectedCoach.picture;
    },
    title() {
      return this.selectedCoach.title;
    },
    price() {
      return this.selectedCoach.price;
    },
    discountedprice() {
      return this.selectedCoach.discountedprice;
    },
    discription() {
      return this.selectedCoach.discription;
    },
    badges() {
      return this.selectedCoach.badges;
    },
  },
  created() {
      this.dummyData = this.$store.getters['items/items'];
      for(var i=0; i<this.dummyData.length; i++)
      {
           for( var j=0; j<this.dummyData[i].length;j++)
           {
              if(this.dummyData[i][j].id === Number(this.id))
              {         
                this.selectedCoach = this.dummyData[i][j];
              }
           }
      }
  },
};

</script>