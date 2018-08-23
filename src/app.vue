<template>
  <div id="app">
    <div id="cover"></div>
    <div class="container">
      <Header></Header>
      <p>{{count}}</p>
      <p>{{fullName}}</p>
      <!-- <Todo></Todo> -->
      <router-link :to="{name: 'app'}">app</router-link>
      <router-link to="/login">login</router-link>
      <transition name="fade">
        <router-view></router-view>
      </transition>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import {
  mapState
  // mapGetters
} from 'vuex'

import Header from './view/todo/header.vue'
import Footer from './view/todo/footer.vue'
import Todo from './view/todo/todo.vue'

export default {
  components: {
    Header,
    Footer,
    Todo
  },
  mounted() {
    // console.log(this.$store)
    let i = 1
    setInterval(() => {
      this.$store.commit('updateCount', i++)
    }, 1000)
  },
  computed: {
    ...mapState(['count']),
    // count() {
    //   return this.$store.state.count
    // },
    fullName() {
      return this.$store.getters.fullName
    }
  }
}
</script>

<style lang="css" scoped>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.container {
  margin-top: 15%;
}

#cover {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #555;
  opacity: 0.5;
  z-index: -1;
}
</style>

