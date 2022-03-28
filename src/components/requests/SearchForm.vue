<template>
  <form @submit.prevent="submitForm">
  
    <div class="form-control">
      <label for="name">Type</label>
      <select id="name" v-model="Theme">
          <option value="default">선택</option>
          <option value="Outer">외투</option>   
          <option value="Top">상의</option>  
          <option value="Shirts&Blouse">셔츠&블라우스</option> 
          <option value="Knit&Cardigan">니트&가디건</option>  
          <option value="Skirt&Dress">스커트&드레스</option>  
          <option value="Shoes">신발</option>  
          <option value="Pants">바지</option>  
          <option value="Jean">청바지</option>   
      </select>
    </div>
     <label for="Price_low">가격대</label>
    <div class="price-form">
      <input
        type="text"
        id="Price_low"
        v-model.trim="Price_low"
      />
      <h1> - </h1>
      <input
        type="text"
        id="Price_low"
        v-model.trim="Price_high"
      />
    </div>
    <div class="form-control">
      <label for="password">제품명</label>
      <input
        type="text"
        @input="ChangeInput($event)"
      />
    </div>
    <div>
    <base-button>검색</base-button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      Theme: "default",
      Price_low: '',
      Price_high: '',
      Item_name: '',
      };
    
  },

  computed: {
          sel_val()
    {
        
        return this.Item_name;  
    },
  },

  methods: {

    ChangeInput(event){
        this.Item_name=event.target.value;
    },

    submitForm() {

      const formData = {
        Theme: this.Theme,
        Price_low: this.Price_low,
        Price_high: this.Price_high,
        Item_name: this.Item_name,
        
      };

      this.$emit('save-data', formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  text-align: center;
  margin: 0.5rem 0;
}

div {
    text-align: center;
}

.price-form {
  margin: -2rem 0;
  display: flex;
}

#Price_low
{
    margin: auto;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
   text-align: center;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

.price-form input
{
  display: block;
  width: 33%;
  border: 1px solid #ccc;
  font: inherit;
}

.price-form label
{
    margin: auto;
}

input,
textarea {
  
  width: 33%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

</style>