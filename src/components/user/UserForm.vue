<template>
  <form @submit.prevent="submitForm">
  
    <div class="form-control" :class="{invalid: !Name.isValid}">
      <label for="name">이름</label>
      <input
        type="text"
        id="name"
        v-model.trim="Name.val"
        @blur="clearValidity('Name')"
      />
      <p v-if="!Name.isValid">이름을 확인해주세요.</p>
    </div>
    <div class="form-control" :class="{invalid: !userName.isValid}">
      <label for="userName">아이디</label>
      <input
        type="text"
        id="userName"
        v-model.trim="userName.val"
        @blur="clearValidity('userName')"
      />
      <p v-if="!userName.isValid">아이디를 확인해주세요.</p>
    </div>
    <div class="form-control" :class="{invalid: !password.isValid}">
      <label for="password">비밀번호</label>
      <input
        type="text"
        id="password"
        v-model.trim="password.val"
        @blur="clearValidity('password')"
      />
      <p v-if="!password.isValid">비밀번호를 확인해주세요.</p>
    </div>
    <div class="form-control" :class="{invalid: !repassword.isValid}">
      <label for="repassword">비밀번호 확인</label>
      <input
        type="text"
        id="repassword"
        v-model.trim="repassword.val"
        @blur="clearValidity('repassword')"
      />
      <p v-if="!repassword.isValid">비밀번호가 동일하지 않습니다.</p>
    </div>

        <div class="form-control" :class="{invalid: !email.isValid}">
      <label for="email">이메일</label>
      <input
        type="text"
        id="email"
        v-model.trim="email.val"
        @blur="clearValidity('email')"
      />
      <p v-if="!email.isValid">이메일을 확인해주세요.</p>
    </div>
    <div class="form-control" :class="{invalid: !phone.isValid}">
      <label for="phone">휴대폰 번호</label>
      <input
        type="text"
        id="phone"
        v-model.trim="phone.val"
        @blur="clearValidity('repassword')"
      />
      <p v-if="!phone.isValid">휴대폰 번호를 확인해주세요.</p>
    </div>
    <base-button>회원가입</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      Name: {
        val: '',
        isValid: true,
      },
      userName: {
        val: '',
        isValid: true,
      },
      password: {
        val: '',
        isValid: true,
      },
      repassword: {
        val: '',
        isValid: true,
      },
       email: {
        val: '',
        isValid: true,
      },
       phone: {
        val: '',
        isValid: true,
      },
      
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.Name.val === '') {
        this.Name.isValid = false;
        this.formIsValid = false;
      }
      if (this.userName.val === '') {
        this.userName.isValid = false;
        this.formIsValid = false;
      }
      if (this.password.val === '') {
        this.password.isValid = false;
        this.formIsValid = false;
      }
      if (this.password.val !== this.repassword.val) {
        this.repassword.isValid =false;
        this.formIsValid = false;
      }
      if (this.email.val === '') {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.phone.val === '') {
        this.phone.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        Name: this.Name.val,
        userName: this.userName.val,
        password: this.password.val,
        email: this.email.val,
        phone: this.phone.val,
      };

      this.$emit('save-data', formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
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

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>