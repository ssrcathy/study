<template>
  <div class="home">
    this is home page
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <son>
      <template v-slot:todo="{todo}">
        <ul>
          <li v-for="item in todo" :key="item">{{item}}</li>
        </ul>
      </template>
    </son>
    <button v-on:click="show = !show">
      Toggle
    </button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    <div style="background: lightskyblue">
      <my_slot>
        <p>我是插进来的</p>
      </my_slot>
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import son from '@/views/son.vue'
import my_slot from '@/views/test.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
      son,
      // my_slot

  },
    data:function () {
        return{
            show:true,
        }
    }
}
</script>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

<script>

</script>
<style>

</style>
