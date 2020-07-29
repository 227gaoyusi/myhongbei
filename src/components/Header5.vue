<template>
 
    <div class="box">
      <router-link to="/ShangChuan" tag="li">
      <img
        src="https://image.hongbeibang.com/Fj1u8rBVnt5DLwXqhx8QKlRPLoGI?48X48&imageView2/1/w/48/h/48"
        alt
      />
      </router-link>
      <router-link to="/GuanZhu" tag="li">
      <span>关注</span>
       </router-link>
      <span class="active">最新</span>
      <span>达人</span>
      <img
        src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48"
        alt
      />
    </div>
  
   
  
</template>

<script>
export default {
  name: "Header5",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>

.box {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 45px;
  font-size: 15px;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: white;
}
img {
  width: 25px;
  height: 25px;
}
.box span{
    color: #ccc;
}

.box span:hover{
   color: black;
    border-bottom: 2px solid orangered;
}
/* main {
  margin-top: 50px;
  height: 1000px;
  width: 100%;
  background-color: orange;
} */

</style>