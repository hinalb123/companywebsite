<template>
  <div class="home">
    <DemoWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import DemoWorld from '@/components/DemoWorld.vue'

export default {
  name: 'DEmoView',
  components: {
    DemoWorld
  }
}
</script>