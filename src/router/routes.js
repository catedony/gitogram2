import NotFound from '@/components/NotFound.vue'
import Feeds from '@/pages/feeds/Feeds.vue'
const Stories = () => import('@/pages/Stories.vue')
const Authorization = () => import('@/pages/Authorization.vue')
const Following = () => import('@/pages/Following.vue')
const UserProfile = () => import('@/pages/UserProfile.vue')
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
  path: '/auth',
  name: 'auth',
  component: Authorization
},
{
  path: '/following',
  name: 'following',
  component: Following
},
{
  path: '/profile',
  name: 'profile',
  component: UserProfile
},
{
  path: '/:pathMatch(.*)*',
  component: NotFound
}

]
