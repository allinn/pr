<template>
    <section>
        <user-form @save-data="saveData"></user-form>
    </section>
    <section>
        <user-form @save-data="confirmedUser"></user-form>
    </section>
</template>

<script>
import UserForm from '../../components/user/UserForm.vue';
import {CognitoUserPool, CognitoUserAttribute, CognitoUser} from 'amazon-cognito-identity-js';

export default {
      components: {
        UserForm,

  },
    data() {
        return {
           // join_data: null,
           registeredUser: CognitoUser,
           confirmUserdata: null, // module에 저장필요!
        }        

    },

    methods: {
        saveData(data)
        {
                //module 에서 throw 하고 try catch 할수 있다. 266

            alert('회원가입 성공',data);

            const POOL_DATA = {
                UserPoolId: 'ap-northeast-2_IIUbdaWPA',
                ClientId: '473janmm2s2785u828l33qik19'
            };

            const userPool = new CognitoUserPool(POOL_DATA);

            const attrList = [];

            console.log(data);

            attrList.push( new CognitoUserAttribute({
                    Name: 'email',
                    Value: data.email
            }));

            userPool.signUp(data.userName, data.password, attrList, null, (err,result)=> {
                if(err)
                {
                    console.log('회원가입 에러발생!')
                }

                else
                {
                    this.registeredUser = result.user;

                    this.confirmedUser = new CognitoUser({Username: data.userName, Pool:userPool});

                    console.log(this.registeredUser);
                }
            })
            
            //this.$store.dispatch('user/signup',
            //{
            //      email: data.email,
            //      password: data.password,
            //});
            //
            
            this.$router.replace('/main');
            
        }
    },

    confirmedUser(data)
    {
        this.confirmUserdata.confirmRegistration(data.code,true,(err,result) => {
            if(err)
            {
                console.alert("인증 실패!");
                return;
            }

            console.log(result);

            this.$router.replace("/main");
        }
        
        )
    },
    



    
}
</script>


<style scoped>


</style>