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
    // Use saved position if available (browser back/forward)
    if (savedPosition) {
      return savedPosition
    }
    // Scroll to anchor if hash is present, smoothly
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    // Default scroll to top
    return { top: 0 }
  },
})

// Global navigation guard to update page title and meta tags dynamically
router.beforeEach((to, from, next) => {
  // Find the nearest route with a title
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)

  // Find the nearest route with meta tags
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  // Set document title if available
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title
  }

  // Remove any stale meta tags added by the router
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).forEach(el => el.parentNode.removeChild(el))

  // Add new meta tags to the document head
  if (nearestWithMeta) {
    nearestWithMeta.meta.metaTags.forEach(tagDef => {
      const tag = document.createElement('meta')
      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key])
      })
      // Mark meta tags so they can be removed later
      tag.setAttribute('data-vue-router-controlled', '')
      document.head.appendChild(tag)
    })
  }

  next()
})

export default router
