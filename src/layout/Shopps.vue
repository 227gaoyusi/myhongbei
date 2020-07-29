<template>
    <div class="box">
        详情:{{$route.params.id}}
        <p>书号：{{food.id}}</p>
        <p>书名：{{food.name}}</p>
        <p>作者：{{food.author}}</p>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name:"Shopps",
    props:["id","url"],
    data(){
        return{
            food:{

            }
        }
    },
    created(){
        this.$route.query.id;
        axios({
            url:this.url,
            params:{
               
                "id":this.$route.query.id
            }
        })
        .then(res=>this.food=res.data[0])
    }
}
</script>

<style>

</style>