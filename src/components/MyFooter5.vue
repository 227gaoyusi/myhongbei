<template>
  <div class="box">
    <span> <router-link to="/Idext" tag="li"><img src="https://image.hongbeibang.com/FhngZoiK_s7Zw4K3DxLogRfqoO06?50X50&imageView2/1/w/50/h/50" alt=""> 学烘焙 </router-link></span>
    <span> <router-link to="/" tag="li"><img src="https://image.hongbeibang.com/Flc4c0tB_BGGFnA-ORFowqfNOpaD?50X50&imageView2/1/w/50/h/50" alt=""> 烘焙圈 </router-link></span>
    <span> <router-link to="" tag="li"><img src="https://image.hongbeibang.com/Flm_lYHJQA56h0VyhdRhQ1i5iO06?50X50&imageView2/1/w/50/h/50" alt=""> 问答 </router-link></span>
    <span> <router-link to="/Login" tag="li"><img src="https://image.hongbeibang.com/FrYeKj0MohOJQuNzUgCugg90cHCS?50X50&imageView2/1/w/50/h/50" alt=""> 小窝 </router-link></span>
  </div>

</template>

<script>
export default {
  name: "MyFooter",
  data() {
    return {};
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  font-size: 15px;
  position: fixed;
  bottom: 0;
  z-index: 2;
  background-color: white;
}
.box span img{
  width: 30px;
  height: 30px;
  
}
</style>