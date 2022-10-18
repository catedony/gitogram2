import NotFound from '@/components/NotFound.vue'
import Feeds from '@/pages/feeds/Feeds.vue'
const Stories = () => import('@/pages/Stories.vue')
export default [{
  path: '/',
  name: 'home',
  component: Feeds
},
{
  path: '/stories',
  name: 'stories',
  component: Stories,
  children: [
    {
      path: '/stories/:initialSlide',
      name: 'storiesInitialSlide',
      component: Stories
    }
  ]
},
{
  path: '/:pathMatch(.*)*',
  component: NotFound
}

]
