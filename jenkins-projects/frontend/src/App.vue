<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Body from './components/Body.vue'
export default {
  name: 'app',
  components: {
    Header,
    Body
  }
}
</script>