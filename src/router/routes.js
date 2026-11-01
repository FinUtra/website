const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: 'platform', component: () => import('pages/Platform.vue') },
      { path: 'solutions', component: () => import('pages/Solutions.vue') },
      { path: 'about-us', component: () => import('pages/About.vue') },
      { path: 'contact-us', component: () => import('pages/ContactUs.vue') },
      // Old URL from the previous site
      { path: 'our-services', redirect: '/solutions' },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
