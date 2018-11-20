import Moon from 'moonjs'
import MoonRouter from 'moon-router'
import { home, contact, notFound } from './views/'

Moon.use(MoonRouter)

const router = new MoonRouter({
  default: '/',
  map: {
    '/': 'home',
    '/contact': 'contact',
    '/*': 'notFound'
  }
})

export default router
