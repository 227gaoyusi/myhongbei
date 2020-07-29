import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from '@/components/HelloWorld'
//  列表页
// import GoodList from "../layout/GoodList"
// 详情页
// import Shopps from "../layout/Shopps";
import HongBei from "../layout/HongBei";
import ShangChuan from "../layout/ShangChuan";
import Login from "../layout/Login";
import GuanZhu from "../layout/GuanZhu"
Vue.use(Router);

// export default new Router({
let router= new Router({

  mode:"history",
  routes: [
                    // {
                    //   path: '/',
                    //   name: 'HelloWorld',
                    //   component: HelloWorld
    // 商品列表页                // }
    // {
    //   path:"/",
    //   namme:"GoodList",
    //   component:GoodList
    // },
    // 商品详情页
    // {
    //   path:"/Shopps",
    //   namme:"Shopps",
    //   component:Shopps
    // },
    // 烘焙圈
    {
      path:"/",
      namme:"HongBei",
      component:HongBei
    },
    {
      path:"/ShangChuan",
      namme:"ShangChuan",
      component:ShangChuan
    },
    {
      path:"/Login",
      namme:"Login",
      component:Login
    },
    {
      path:"/GuanZhu",
      namme:"GuanZhu",
      component:GuanZhu
    },
    //路由配置
  ]
});
// 全局守卫
router.beforeEach((to,from,next)=>{
  
  if(to.path=='/Login'||localStorage.getItem('username')){
    next();
  }else{
    next({
      path:'/Login',
      query:{
        "to":to.path
      }
    });
  }


});

// 路由独享守卫
// router.beforeEnter ((to,from,next) => {
//   const username = localStorage.getItem('username')
//   if( username || to.path === '/GuanZhu'){
//      next()
//   }else{
//      setTimeout( ()=> {
//        alert('您还没有登录账号，3秒后自动跳转到登录页')
//        next('/Login')
//      },3000)
//   }
//  })
export default router;
