import NotFound from '@/components/NotFound.vue'
import Feeds from '@/pages/feeds/Feeds.vue'
const Stories = () => import('@/pages/Stories.vue')
export default [{
  path: process.env.NODE_ENV === 'production'
    ? '/gitogram2/dist/'
    : '/',
  name: 'home',
  component: Feeds
},
{
  path: '/stories:initialSlide',
  name: 'stories',
  component: Stories
},
{
  path: '/:pathMatch(.*)*',
  component: NotFound
}

]
