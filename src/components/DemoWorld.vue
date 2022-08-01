<template>
  <div v-cloak>
    {{ greeting }}
    <!-- <input type="text" v-model="greeting"> -->

    <!-- <input type="text" @keyup.enter="greet" v-model="greeting"> -->

    <input
      type="text"
      @keyup.enter="greet1(greeting + '!!!')"
      v-model="greeting"
    />

    <span v-for="n in 10" :key="n">{{ n }}</span>

    <div id="example-1">
      <button v-on:click="counter++">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </div>

    <button @click="say('hi')">Say hi</button>
    <button @click="say('what')">Say what</button>

    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>

    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <br />
    <span>Checked names: {{ checkedNames }}</span>

    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    <br />
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <br />
    <span>Picked: {{ picked }}</span>

    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>

    <select v-model="selected1" multiple>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <br />
    <span>Selected: {{ selected1 }}</span>

    <hr />

    <!-- <button v-on:click="isVisible=true">Show Box</button> -->
    <!-- <button @click="isVisible=!isVisible">Toggle Box</button> -->

    <button @click="toggleBox">Toggle Box</button>

    <div v-if="isVisible" class="box"></div>
    <div v-else-if="isVisible2" class="box1"></div>
    <div v-else class="box2"></div>

    <!-- <div v-show="isVisible" class="box"></div> -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function () {
    return {
      greeting: "hello world!!",
      isVisible: false,
      isVisible2: true,
      counter: 0,
      checkedNames: [],
      picked: "picked",
      checked: "checked",
      selected: "",
      selected1:"",
    };
  },

  methods: {
    //clickevent
    toggleBox() {
      this.isVisible = !this.isVisible;
    },
    greet() {
      console.log(this.greeting);
    },
    greet1(greeting) {
      console.log(greeting);
    },
    say(message) {
      alert(message);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.box {
  background-color: black;
  height: 100px;
  width: 100px;
}
.box1 {
  background-color: red;
  height: 100px;
  width: 100px;
}
.box2 {
  background-color: green;
  height: 100px;
  width: 100px;
}
[v-cloak] {
  display: none;
}
input {
  display: block;
  margin: 10px;
}
</style>
