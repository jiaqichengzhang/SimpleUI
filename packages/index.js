import Vue from 'vue'
import Button from './button'

// 存储组件列表
const components = [
  Button
]

const install = () => {
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}

// 判断是否是直接引入文件，是->就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}
