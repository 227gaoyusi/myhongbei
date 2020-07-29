<template>
  <div class="box">
    <router-link to="/" tag="li">
      <i class="el-icon-close"></i>
    </router-link>
    <div class="conter">
      <span>
        <img
          src="https://image.hongbeibang.com/Fnz_NOU0VlNn-t_hLcXFbatBze_C?imageMogr2/strip/thumbnail/640x640"
          alt
        />上传食谱
      </span>
      <span>
        <img
          src="https://image.hongbeibang.com/FtUJvHaECXwl58x67bktx4KSjnym?imageMogr2/strip/thumbnail/640x640"
          alt
        />上传作品
      </span>
    </div>
    <sapn class="box2">草稿箱</sapn>
  </div>
</template>

<script>
export default {
  name: "CaoGao"
};
</script>

<style scoped>
.box {
  width: 100%;
}
.el-icon-close {
  font-size: 30px;
  padding: 10px 15px;
}
.conter {
  margin-top: 300px;
  display: flex;
  align-content: center;
  justify-content: space-around;
}
.conter span img {
  width: 50px;
  height: 50px;
}
.box2 {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-top: 1px solid #ccc;
  margin-top: 191px;
  font-size: 20px;
  display: block;
  text-align: center;
}
</style>