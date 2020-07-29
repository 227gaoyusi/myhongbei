<template>
  <div>
<header3/>
<Main/>
  </div>
</template>

<script>
import Header3 from "../components/Header3";
import Main from "../components/Main";

export default {
    name:"BookList",
    data(){
        return {
            type:"广式月饼"
        }
    },
    components:{
        Header3,Main
    },
    methods:{
       fn(type){
         this.type=type
       }
    }
}


</script>

<style scoped>

</style>