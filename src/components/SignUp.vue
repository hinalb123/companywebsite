<template>
    
    <div>
        <input type="text" placeholder="Enter Name" v-model="name"/><br/>
        <input type="password" placeholder="Enter Password" v-model="password"/><br/>

        <label for="cricket">cricket</label>
        <input type="checkbox" id="cricket" value="cricket" v-model="game">

        <label for="chess">chess</label>
        <input type="checkbox" id="chess" value="chess" v-model="game">

        <label for="cricket">male</label>
        <input type="radio" id="gender" value="male" v-model="gender">

        <label for="chess">female</label>
        <input type="radio" id="gender" value="female" v-model="gender">

        <button @click="signup()">signup</button>

    </div>
</template>

<script>

export default{
    name:'SignUp',
    data(){
        return{
            game:[],
            name:null,
            password:null,
            gender:null
        }   
    },
    methods:{
        signup(){
            console.log("hello",this)
        }
    }
}

</script>