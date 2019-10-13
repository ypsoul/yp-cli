export default  {
  install: function(Vue){
      Vue.mixin({
          created(){
              if(this.$options.isVuex){
                  import('../store/modules/'+this.$options.name).then((res)=>{
                      this.$store.registerModule(this.$options.name,res.default);
                  })
              }
          }
      })
  }
}