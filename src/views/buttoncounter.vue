<template>
  <div>
    <button v-on:click = "displayLanguage(item)" ><span>{{ item }}</span></button>
  </div>
</template>

<script>
export default {
    name: 'ButtonCounter',
    props:['item'],  
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        displayLanguage(lng) {  
            console.log(lng);  
            this.$emit('showlanguage', lng);  
        }
    }
}
</script>
