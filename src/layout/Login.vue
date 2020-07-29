<template>
  <div class="box">
   用户名：<input type="text" v-model="username"><br>
   密码: <input type="password" v-model="userpass"><br>
   <input type="button" value="登录" @click="loginCheck">
  </div>
</template>

<script>
export default {
    name:"Login",
    data(){
        return{
            username:"",
            password:"",

        }
    },
    methods:{
        loginCheck(){
            if(this.username=="root"&&this.userpass=="123"){
                localStorage.setItem('username',this.username);
                this.$router.push(this.$route.query.to)
            }
        }
    }

}
</script>

<style>

</style>