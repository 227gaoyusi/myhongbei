<template>
<div>
  <Header5/>
  <div class="app">
    <Nav5/>
<Comment/>
  </div>
  <MyFooter5/>
  </div>
</template>

<script>
import Header5 from "../components/Header5";
import Nav5 from "../components/Nav5";
import Comment from "../components/Comment";
import MyFooter5 from "../components/MyFooter5";

export default {
name:"HongBei",
data(){
  return{

  }
  
},
components:{
        Header5,Nav5,Comment,MyFooter5
    },

}
</script>

<style sccped>
.app{
  
  margin-top: 50px;
  margin-bottom: 55px;
  /* background-color: palegoldenrod; */
}
</style>