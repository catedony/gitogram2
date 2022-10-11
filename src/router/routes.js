import NotFound from '@/components/NotFound.vue'
const Feeds = () => import('@/pages/feeds/Feeds.vue')
export default [{
  path: '/',
  component: Feeds
},
{
  path: '/:pathMatch(.*)*',
  component: NotFound
}

]
