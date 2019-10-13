<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>{{ count }}</div>
    <div>
      <button @click="add(2)">添加</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState, mapActions } from "vuex";
export default {
  name: "home",
  isVuex:true,
  components: {
    // HelloWorld
  },
  computed: {
    ...mapState({
      count: state => state.home.count
    })
  },
  methods: {
    ...mapActions(["home/reqApi"]),
    add(num) {
      //  console.log(this)
      this["home/reqApi"](num);
    }
  }
};
</script>
