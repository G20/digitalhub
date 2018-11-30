import vue from 'vue'
import app from './app.vue'
import paginate from 'vue-paginate'
import router from './config/router'
import Transitions from 'vue2-transitions'

// plugins
vue.use(paginate)
vue.use(Transitions)

new vue({
  el: '#app',
  router,
  render: h => h(app)
})
