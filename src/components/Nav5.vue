<template>
 <div>
   
    <div class="box">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="/static/img/6.jpg" />
          <img src="/static/img/7.jpg" />
          <img src="/static/img/8.jpg" />
          <img src="/static/img/9.jpg" />
        </div>
      </div>
    
    </div>
    <div class="title">
    <el-row>
  <el-button style="background:#927472;color:#fff">#夏季冷饮甜点#</el-button>
  <el-button type="primary">#早餐#</el-button>
  <el-button type="success">#午餐#</el-button>
  <el-button type="info">#晚餐#</el-button>
  <el-button type="warning">#下午茶#</el-button>
  <el-button type="danger">#夜宵#</el-button>
</el-row>
    </div>
  </div>
</template>

<script>
export default {
name:"Nav5",
data(){
    return{
        // imgs:["img/6.jpg","img/7.jpg","img/8.jpg","img/9.jpg"],
    }
}
}
</script>

<style scoped>
.box{
   
    width: 100%;
   
  
}

/* .swiper-container {
  width: 100%;
   margin: 0;
  padding: 0;
  display: flex;
  flex: 1;
} */
.swiper-wrapper > .swiper-slide {
 
  display: flex;
  
  justify-content: space-between;
  overflow: hidden;
    overflow-x: scroll;
}

.swiper-wrapper > .swiper-slide{
    margin: 0 10px;
    
}

.swiper-slide img {
  width: 100px;
  height: 130px;
  border-radius: 5px;
  margin: 10px 10px;
  
}
.el-row{
 display: flex;
 overflow: hidden;
 overflow-x: scroll;
}
.el-button{
    margin: 5px 10px;
}

</style>