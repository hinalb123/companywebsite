<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about"> About</router-link>
      <router-link to="/demo"> | Demo</router-link>
      <router-link to="/register"> | Register</router-link>
      <router-link to="/login"> | Login</router-link>
      <router-link to="/dashboard"> | Dashboard</router-link>
      <router-link to="/todos"> | ToDos</router-link>
      <router-link to="/addtodos"> | AddToDos</router-link>

    </nav>

    <!-- <PostList/> -->
    <!-- <CreatePost/> -->
    <!-- <HeaderWorld  title="hello hinal"/> -->
    <!-- <SignUp/> -->

    <router-view/>
  </div>
  
  </template>
  

<script>
// import HeaderWorld from './components/HeaderWorld.vue'
// import SignUp from './components/SignUp.vue'
// import PostList from './components/PostList.vue'
// import CreatePost from './components/CreatePost.vue'
// import ToDosVue from './components/ToDos.vue'

export default{
  name :'App',
  components:{
    // HeaderWorld,
    // SignUp,
    // PostList,
    // CreatePost,
    // ToDosVue
  },


}


</script>




<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

</style>
