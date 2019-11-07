<!--用户-->
<template>
  <div>
    用户
    {{url}}
  </div>
</template>

<script>
export default {
  name: "user",

  data() {
    return {
      url: process.env.VUE_BASE
    };
  },

  // created(){},

  // components:{},

  // computed:{},

  mounted() {
  }

  // watch(){},

  // methods:{}
};
</script>
<style lang="scss">
</style>