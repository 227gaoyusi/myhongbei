<template>
  <div class="box">
    <router-link to="/shoplist">
   <i class="el-icon-arrow-left"></i>
   </router-link>
   
   <span style="display:flex">
     <router-link to="/Seek" class="Seek">
   <img src="../assets/img/3.png" alt="" style="position: fixed;letft:20px">
   </router-link>
 <input type="text" placeholder="广式月饼">
   </span>
  
   <span style="display:flex;padding-right:20px">食谱<img src="../assets/img/5.png" alt="" style="height:15px;" ></span>
  
  </div>
</template>

<script>
export default {
    name:"Header3"

}
</script>

<style scoped>
.box{
  width: 100%;
  height: 40px;
  display: flex;
  top: 0;
  position: fixed;
  align-items: center;
  /* align-content: space-between; */
  justify-content: space-between;
  /* background: pink; */
}
.box input{
  height: 35px;
  width: 220px;
  background-color: #F5F7F9;
  border: 0;
  text-indent: 2em;
  margin-right: 20px;
}
.box>span{
  color: orange;
  font-size: 14px;
  
}
.box .Seek img{
  width: 30px;
  height: 30px;
  
}

 .el-icon-arrow-left{
  font-size: 30px;
   padding: 10px 10px;
   font-weight: bold;
   cursor: pointer;
 
}
</style>