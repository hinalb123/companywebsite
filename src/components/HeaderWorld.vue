<template>
    <header>
        <h1>{{title}}</h1>
        <ButtonWorld text="add task"></ButtonWorld>
        <ButtonWorld text="delete task" color="blue" ></ButtonWorld>

    </header>
</template>

<script>
import ButtonWorld from './ButtonWorld'

export default {
    name: 'HeaderWorld',
    props:['title'],
    components:{
        ButtonWorld
}
}

</script>