<template>
    <section>
        <user-form @save-data="saveData"></user-form>
    </section>
</template>

<script>
import UserForm from '../../components/user/UserForm.vue';

export default {
      components: {
        UserForm,

  },
    data() {
        return {
           // join_data: null,
        }        

    },

    methods: {
        saveData(data)
        {
                //module 에서 throw 하고 try catch 할수 있다. 266

            alert('회원가입 성공',data);

            //this.$store.dispatch('user/signup',
            //{
            //      email: data.email,
            //      password: data.password,
            //});
            //
            

            this.$router.replace('/main');
            
        }
    },
    



    
}
</script>


<style scoped>


</style>