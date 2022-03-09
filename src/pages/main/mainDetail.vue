<template>
  <div>
    <section>
      <base-card>
        <img :src=picture>
        <h3>${{ title }}</h3>
        <h3>${{ id}} </h3>
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
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
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
    this.selectedCoach = this.$store.getters['items/items'].find(item => item.id === this.id);
    console.log(this.selectedCoach, this.id);
  },
};
</script>