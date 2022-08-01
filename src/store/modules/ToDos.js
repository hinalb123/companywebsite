import axios from 'axios';
const state={
    // todos:[
    //     {
    //         id:1,
    //         title:'Title 1'
    //     },
    //     {
    //         id:2,
    //         title:'Title 2'
    //     },
    // ]
    todos:[]
};
const getters={
    allTodos:state=>state.todos
};
const actions={
    async fetchtodos({commit}){
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(response.data);
        commit('settodos',response.data);
    },
    async addtodos({commit},title){
        const response=await axios.post('https://jsonplaceholder.typicode.com/todos',{title,completed:false});
        commit('newtodo',response.data)
    },
    async deletetodo({commit},id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removetodo',id)
    },

};
const mutations={
    settodos:(state,todos)=>(state.todos=todos),
    newtodo:(state,todo)=>state.todos.unshift(todo),
    removetodo:(state,id)=>state.todos=state.todos.filter(todo=>todo.id!=id)
};
export default{
    state,
    getters,
    actions,
    mutations

}