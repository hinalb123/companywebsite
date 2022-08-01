<template>
    <div>
        <div class="container">
            <h3>To Do</h3>

            <div>Add ToDos</div>
            <div>
                <form @submit="onSubmit">
                    <input type="text" v-model="title" placeholder="add to..">
                    <input type="submit" value="save">

                </form>
            </div>

            <div class="container">
                <div v-for="todo in allTodos" class="todo" :key="todo.id">
                    {{ todo.title }}
                    <div>
                        <input type="button" value="delete" @click="deletetodo(todo.id)" style="background-color: red;">
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';


export default {
    name: "ToDos",
    data() {
        return {
            title: ""
        }
    },
    computed: mapGetters(['allTodos']),
    methods: {

        ...mapActions(["addtodos"]),
        onSubmit(e) {
            e.preventDefault();
            this.addtodos(this.title);
        },
        ...mapActions(["fetchtodos","deletetodo"]),
    },
  
    created() {
        this.fetchtodos();
    }

}
</script>

<style scoped>
.todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
}

.todo {
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
}

i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    cursor: pointer;
}

.legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
}

.complete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #35495e;
}

.incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #41b883;
}

.is-complete {
    background: #35495e;
    color: #fff;
}

@media (max-width: 500px) {
    .todos {
        grid-template-columns: 1fr;
    }
}   

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