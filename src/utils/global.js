// component 文件下 组件统一导入

import Vue from 'vue'

function changeStr(str){
    return str.charAt(0).toUpperCase()+str.slice(1);   //首字节大写
}

const requireComponent = require.context('../components',true,/\.vue$/); // 参数说明  文件目录 是否展开子目录 匹配文件规则
// console.log(requireComponent.keys())  // ["./HelloWorld.vue", "./child.vue"]
requireComponent.keys().forEach(fileName=>{
    const config = requireComponent(fileName);
   // console.log(config,'config')
   const componentName = changeStr(
       fileName.replace(/^\.\//,'').replace(/\.\w+$/,'')
   )
   // console.log(componentName)
   Vue.component(componentName, config.default || config);
})