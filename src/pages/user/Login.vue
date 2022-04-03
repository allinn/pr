<template>
  <section>
    <h1>
      Login
    </h1>
    <form @submit.prevent="submitForm">

      <div class="form-control" :class="{invalid: !id.isValid}">
        <label for="id">아이디</label>
        <input
          type="text"
          id="id"
          v-model.trim="id.val"
          @blur="clearValidity('id')"
          >
        <p v-if="!id.isValid">아이디를 입력해주세요</p>
      </div>

      <div class="form-control" :class="{invalid: !id.isValid}">
        <label for="id">비밀번호</label>
        <input
          type="text"
          id="password"
          v-model.trim="password.val"
          @blur="clearValidity('password')"
          >
        <p v-if="!password.isValid">비밀번호를 입력해주세요</p>
      </div>
      <base-button>로그인</base-button>
      
    </form>
    <base-button>회원가입</base-button>


  </section>
</template>

<script>
import BaseButton from '../../components/ui/BaseButton.vue';


export default {
  components: { BaseButton },

  data()
  {
    return{
      id:
      {
        val: '',
        isValid: true,
      },
      password:
      { 
        val: '',
        isValid: true,
      },

    };

  },


  methods: {

    clearValidity(input)
    {
      this[input].isValid=true;
    },


    submitForm()
    {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {

        id: this.id.val,
        password: this.password.val,
      };

      this.saveData(formData);

      this.$router.replace('/main');
    },

    saveData(Data) {
      this.$store.dispatch('user/registerCoach', Data);
      this.$router.replace('/coaches');
    },

    validateForm()
    {
      this.formIsValid=true;

      if(this.id.val==='')
      {
        this.id.isValid=false;
        this.formIsValid=false;
      }

      if(this.password.val==='')
      {
        this.password.isValid=false;
        this.formIsValid=false;
      }

    },
    
  
  }
};
</script>

<style scoped>



</style>