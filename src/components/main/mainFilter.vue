<template>
  <base-card>
    <span class="filter-option">
      <input type="radio" name="radioBtn" id="name" checked @change="setFilter" >
      <label for="name">이름</label>
    </span>
    <span class="filter-option">
      <input type="radio" name="radioBtn" id="title"  @change="setFilter" >
      <label for="title">제목</label>
    </span>
    <span class="filter-option">
      <input type="radio" name="radioBtn" id="content"  @change="setFilter" >
      <label for="content">내용</label>
    </span>

    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="search"></label>
        <input
        type="text"
        id="search"
        v-model.trim="search"
        />
        <base-button>검색</base-button>
      </div>
    </form>

  </base-card>
</template>

<script>
export default {
  props: ['type'],
  emits: ['change-filter', 'query',],
  data() {
    return {
      set_filter: {
        val: 'name',
      },

      page: {
        
      },
      search: null,
    };
  },

  computed: {

  },


  methods: {
    setFilter(event) {
            
      const inputId = event.target.id;
      this.set_filter.val = inputId;
    },

    submitForm() {

        const formData ={
          selected: this.set_filter.val,
          search_data: this.search,
          type_: this.type,
        };

        console.log(formData);

        this.$emit('save-data', formData);
      

     },
  },

}
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>