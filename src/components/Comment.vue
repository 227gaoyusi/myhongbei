<template>
  <div class="news">
    <div class="top">
      <el-row class="demo-avatar demo-basic">
        <el-col>
          <div class="demo-basic--circle">
            <div class="block">
              <el-avatar :size="30" :src="circleUrl"></el-avatar>
            </div>
          </div>
        </el-col>
         <div class="tool">
        <span>五彩缤纷</span>
        <p>19秒前 超松软吐司</p>
      </div>
      </el-row>
   
     
    </div>
    <div class="alsid">第一次做吐司非常成功，手撕的效果也挺好的。松松软软奶香味十足。
    <div class="ment">
    <img
      src="https://image.hongbeibang.com/FgmNgz2TGoR9maaVK5UwjMBnT2yJ?1066X851&imageView2/1/w/600/h/478"
      alt
    />
    </div>

    </div>
   
    <div class="tool2">
      <img src alt />
      <span>超松软吐司</span>
      <p>作者：帮主阿涛</p>
    </div>

    <div class="age">
        <el-badge :value="12" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="3" class="item">
          <el-button size="small">回复</el-button>
        </el-badge>
        <el-badge :value="1" class="item" type="primary">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="2" class="item" type="warning">
          <el-button size="small">回复</el-button>
        </el-badge>
    </div>



<!-- 第二个评价 -->
    <div class="top">
      <el-row class="demo-avatar demo-basic">
        <el-col>
          <div class="demo-basic--circle">
            <div class="block">
              <el-avatar :size="30" :src="circleUrl"></el-avatar>
            </div>
          </div>
        </el-col>
         <div class="tool">
        <span>五彩缤纷</span>
        <p>19秒前 超松软吐司</p>
      </div>
      </el-row>
   
     
    </div>
    <div class="alsid">第一次做吐司非常成功，手撕的效果也挺好的。松松软软奶香味十足。
    <div class="ment">
    <img
      src="https://image.hongbeibang.com/FgmNgz2TGoR9maaVK5UwjMBnT2yJ?1066X851&imageView2/1/w/600/h/478"
      alt
    />
    </div>

    </div>
   
    <div class="tool2">
      <img src alt />
      <span>超松软吐司</span>
      <p>作者：帮主阿涛</p>
    </div>
 
    <div class="age">
        <el-badge :value="12" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="3" class="item">
          <el-button size="small">回复</el-button>
        </el-badge>
        <el-badge :value="1" class="item" type="primary">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="2" class="item" type="warning">
          <el-button size="small">回复</el-button>
        </el-badge>
    </div>




 <!-- 第三个评价 -->
    <div class="top">
      <el-row class="demo-avatar demo-basic">
        <el-col>
          <div class="demo-basic--circle">
            <div class="block">
              <el-avatar :size="30" :src="circleUrl"></el-avatar>
            </div>
          </div>
        </el-col>
         <div class="tool">
        <span>五彩缤纷</span>
        <p>19秒前 超松软吐司</p>
      </div>
      </el-row>
   
     
    </div>
    <div class="alsid">第一次做吐司非常成功，手撕的效果也挺好的。松松软软奶香味十足。
    <div class="ment">
    <img
      src="https://image.hongbeibang.com/FgmNgz2TGoR9maaVK5UwjMBnT2yJ?1066X851&imageView2/1/w/600/h/478"
      alt
    />
     <img
      src="https://image.hongbeibang.com/FgmNgz2TGoR9maaVK5UwjMBnT2yJ?1066X851&imageView2/1/w/600/h/478"
      alt
    />
     <img
      src="https://image.hongbeibang.com/FgmNgz2TGoR9maaVK5UwjMBnT2yJ?1066X851&imageView2/1/w/600/h/478"
      alt
    />
    <img
      src="https://image.hongbeibang.com/FgmNgz2TGoR9maaVK5UwjMBnT2yJ?1066X851&imageView2/1/w/600/h/478"
      alt
    />
    </div>

    </div>
   
    <div class="tool2">
      <img src alt />
      <span>超松软吐司</span>
      <p>作者：帮主阿涛</p>
    </div>
    
    <div class="age">
        <el-badge :value="12" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="3" class="item">
          <el-button size="small">回复</el-button>
        </el-badge>
        <el-badge :value="1" class="item" type="primary">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="2" class="item" type="warning">
          <el-button size="small">回复</el-button>
        </el-badge>
    </div>

   <i class="el-icon-top" @click="toTop"></i>
  </div>
</template>

<script>
export default {
  name: "Comment",
  data() {
    return {
      gotop:false,
      circleUrl:
        "https://image.hongbeibang.com/FsHkAe4LMmX2-qOWniN-N85DXPe_?1080X810&imageView2/1/w/80/h/80",

      //   sizeList: ["medium"],
    };
  },
  mounted() {
　　// 此处true需要加上，不加滚动事件可能绑定不成功
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll(e) {
      let scrolltop = e.target.scrollTop;
      scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
    },
    toTop() {
      
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果 
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    }
  }
}

  
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.top{
margin-bottom: 10px;
}
.age {
  width: 100%;
  display: flex;
  height: 40px;
  padding: 5px 15px;
  border-top: 1px solid #ccc;
  margin-top: 10px;
}
.el-row{
 width: 100%;
 height: 50px;
 display: flex;
 padding: 18px 15px;
}
.tool {
 margin-left: -300px;
}
.ment{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  
}
.ment img{
  width: 100px;
  padding: 8px 2px;
}
.alsid {
  width: 100%;
  padding: 5px 15px;
}
.tool2{
  width: 100%;
  padding: 5px 15px;
}
.el-icon-top{
  position: fixed;
  bottom: 100px;
  right: 5px;
  z-index: 555;
 color: orange;
 font-weight: bold;
  font-size: 30px;
  cursor: pointer;
}
</style>