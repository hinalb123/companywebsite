<template>
    <div>
        <div>Add ToDos</div>
            <div>
                <form @submit="onSubmit">
                    <input type="text" v-model="title" placeholder="add to..">
                    <input type="submit" value="save">

                </form>
            </div>
    </div>
</template> 
<script>
import { mapActions } from 'vuex'
export default{
    name:"addtodos",
    data(){
        return{
            title:""
        }
    },
    methods:{
        ...mapActions([ "addtodos"]),
        onSubmit(e){
            e.preventDefault();
            this.addtodos(this.title);
        }
    }
}
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>