import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blog from '../views/Blog.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      metaTags: [
        {
          name: 'description',
          content: 'Welcome to the homepage of Nick Yebra | Portfolio.',
        },
        {
          property: 'og:title',
          content: 'Home - Nick Yebra | Portfolio',
        },
      ],
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      metaTags: [
        {
          name: 'description',
          content: 'Learn more about Nick Yebra | Portfolio and our mission.',
        },
        {
          property: 'og:title',
          content: 'About Us - Nick Yebra | Portfolio',
        },
      ],
    },
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: {
      metaTags: [
        {
          name: 'description',
          content: 'Read the latest articles and updates on our blog.',
        },
        {
          property: 'og:title',
          content: 'Blog - Nick Yebra | Portfolio',
        },
      ],
    },
  },
  // Catch-all route (must be last)
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title
  }

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).forEach(el => el.parentNode.removeChild(el))

  if (nearestWithMeta) {
    nearestWithMeta.meta.metaTags.forEach(tagDef => {
      const tag = document.createElement('meta')
      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key])
      })
      tag.setAttribute('data-vue-router-controlled', '')
      document.head.appendChild(tag)
    })
  }

  next()
})

export default router
