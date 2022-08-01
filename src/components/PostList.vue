<template>
    <div>
        <button @click="getpost">Load Post</button>

        <div v-for="post in posts" :key="post.id">
        <h3 v-if="errmsg"> {{ errmsg }} </h3>
            <h3> {{post.id}}.{{post.title}} </h3>
            <p> {{post.body}} </p>
            <h1> {{msg}} </h1>
            <hr/>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default{
    name:'PostList',
      beforeCreate() {
      console.log('beforeCreate hook called');
    },
    // created(){
    //     this.getpost()
    // },
    
    beforeMount() {
      console.log('beforeMount hook called');
    },
    beforeUpdate(){
       console.log('beforeUpdate hook called');
     },
    updated(){
       console.log('updated hook called');
     },
    beforeDestroy() {
       this.msg = null
       delete this.msg;
       console.log('beforeDestroy hook called');
       
     },
    destroyed() {
       this.$destroy() 
       console.log('destroyed hook called')
     },
    mounted() {
    //   alert('mounted has been called'); 
     },
     
   
    data(){
        return{
            posts:[],
            errmsg:'',
            msg:'hello'
        }
    },
    methods:{
        getpost(){
            axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
                console.log(response.data)
                this.posts=response.data
            })
            .catch((error)=>{
                console.log(error)
                this.errmsg='error in data'
            })
        },
    },
}

</script>