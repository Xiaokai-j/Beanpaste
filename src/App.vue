<template>
  <div id="app">
 <!--  头部组件 -->
 <LayoutHeader/>
 <div class="wrapper">
   <!-- 一级路由容器 -->
   <movie-list/>
    <router-view/>
 </div>

 <!-- 尾部组件 -->
 <LayoutFooter/>
  </div>
</template>

<script>
// 引入头部组件
import LayoutHeader from '@/components/layout-header'
// 引入底部组件
import LayoutFooter from '@/components/layout-footer'
export default {
  components: {
    LayoutHeader,
    LayoutFooter
  }
}
</script>

<style lang='less'>

</style>
