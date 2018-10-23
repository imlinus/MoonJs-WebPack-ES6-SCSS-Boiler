import Moon from 'moonjs'
import { router } from './router'
import { topbar, menu, logo } from './components/'

new Moon({
  el: '.app',
  router
})
