<template>
<div>
    <button @click="Research">목록</button>

    <button @click="emailLink">수정</button>
    <button @click="emailLink">삭제</button>

</div>
</template>

<script>
export default {
  props: ['link',],
  computed: {
    emailLink() {
      return 'mailto:' + this.email;
    }
  },
  methods: {
    Research() {
      this.$router.push('/'+this.link);
    },
      
  },
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

a {
  color: #3d008d;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: #8d007a;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>