<template>
    <button @click="onclick()">{{text}}</button>

</template>

<script>

export default{
    name:'ButtonWorld',
    props:{
        text:String,
        color:String,
    },
    methods:{
        onclick(){
            alert("click");
        }
    }
}

</script>