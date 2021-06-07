import Vue from 'vue'
import App from './App.vue'
import { DatePicker } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import DateRangePicker from '../lib/index'

Vue.prototype.$ELEMENT = { size: 'small' };
Vue.use(DatePicker)
Vue.use(DateRangePicker)

new Vue({
  el: '#app',
  render: h => h(App)
})
