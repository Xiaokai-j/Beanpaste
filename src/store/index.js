import Vue from 'vue'
import Vuex from 'vuex'
import jsonp from 'jsonp'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存放公共数据的地方
    title: '', // 当前的标题
    list: [] // 当前的电影列表

  },
  // 只能写同步代码
  mutations: {
    // 用来更新 stste 中的 数据 title和list
    // state 是当前的状态对象  payload  提交mutations 传过来的参数
    updatelistAndTitle (state, payload) {
      // 直接对state的数据进行赋值就行
      state.title = payload.title // payload是什么都可以
      state.list = payload.list // 接收载合中的list
    }

  },
  // actions 可以做异步请求
  actions: {
    // actions 中的第一个是 store
    getList (store) {
      // 请求豆瓣的数据
      // jsonp(URL,Opt(可选)，callback)
      jsonp('http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a', function (err, data) {
        if (err) return false // 如果err存在表示出问题了 不能继续了
        console.log(data)
        // 如果想要改actions 里面的数据必须通过mutations
        // 提交
        store.commit('updatelistAndTitle', {
          title: data.title, // 当前的标题
          list: data.subjects // 当前的电影列表
        })
      })
    }
  },
  modules: {
  }
})
