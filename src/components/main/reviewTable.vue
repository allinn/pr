<template>
    <tr>
      <td>
        <router-link :to="ItemDetailLink">
          <img :src=picture>
        </router-link>
      </td>    
      <td>
          <router-link :to="ItemDetailLink" class="highlight">
            상품명 : {{ title }}
          </router-link>
       <!-- attach -->
          <button @click="ShowDetail">
          {{discription}}
          </button>
      </td>
      <td>
        <p>{{writer}}</p>
        <p>{{star_gp}}</p>
      </td>
      <td>{{writing_date}}</td>
    </tr>

    <div v-if="detail" >
      {{discription}}
    </div>

</template>

<script>
   
export default {

data() {
    return {
      detail: false,
    };
  },


  props: {
    id: {
      required: true,
      type: Number,
    },

    picture:{
      required: true,
      type: String,
    },
    stars: {
      type: Number,
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
    writing_date: {
      require: true,
      type: String,
    },
    writer: {
      required: true,
      type: String,
    },
    attach: {
      required: false,
      
    },

  },

  computed: {
  

     ItemDetailLink() {
      return '/detail/' + this.id; 
    },

   // ItemDetailLink() {
   //   return '/detail/' + this.id; 
   // },

      star_gp()
      {
        let ss = "";
        for(var i = this.stars; i>0; i--)
        {
            ss += '★';
        }

        for(var ii = 5-this.stars; ii>0; ii--)
        {
          ss+= '☆';
        }
    
        return ss;

      },
  },
  methods:
  {
     ShowDetail()
    {
        this.detail=!this.detail;
    },

  },

};
</script>

<style scoped>


a {
  display: block;
  text-decoration: none;
}

button {
  all: unset; 
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