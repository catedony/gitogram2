import NotFound from '@/components/NotFound.vue'
const Feeds = () => import('@/pages/feeds/Feeds.vue')
const Stories = () => import('@/pages/Stories.vue')
export default [{
  path: '/',
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
