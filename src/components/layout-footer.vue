<template>
     <div class="my-footer">
        <ul>
          <!-- 跳转可以用router-link router-link默认生才的是a标签-->
          <!-- 改变router-link、标签   使用 tag  标签改变-->
          <router-link tag="li" to="/hot">
            <a>
              <span class="iconfont icon-remen"></span>
              <p>正在热映</p>
            </a>
          </router-link>
          <router-link tag="li" to="/movie">
            <a>
              <span class="iconfont icon-dianying"></span>
              <p>即将上映</p>
            </a>
          </router-link>
          <router-link tag="li" to="/top">
            <a>
              <span class="iconfont icon-top"></span>
              <p>top250</p>
            </a>
          </router-link>
        </ul>
      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
