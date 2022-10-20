import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { getUserData } from '@/api/rest/auth'

const router = createRouter({
  history: createWebHashHistory(),
  base: '/dist/',
  routes
})
export default router

router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'auth'
  try {
    const response = await getUserData()
    next(authRoute ? { name: 'home' } : null)
    if (response.status === 401) throw new Error()
  } catch (error) {
    next(authRoute ? null : { name: 'auth' })
  }
})
