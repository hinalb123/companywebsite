<template>
    <div>
        <form @submit.prevent="CreatePost">
            <div>
              UserId  <input type="text" v-model="formData.userId" id="userId">
            </div>
            <div>
             Title    <input type="text" v-model="formData.title" id="title">
            </div>
            <div>
             Body     <input type="text" v-model="formData.body" id="body">
            </div>
            <div>
                <button>Create Post</button>
            </div>
        </form>
   </div>

</template>

<script>
import axios from 'axios'
export default{
    name:'CreatePost',
    data(){
        return{ 
            formData:{
                userId:'',
                title:'',
                body:''
            }
        }
    },
    methods:{
        CreatePost(){
            axios.post('https://jsonplaceholder.typicode.com/posts',this.formData).then((response)=>{
                console.log(response)
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }   
}
</script>