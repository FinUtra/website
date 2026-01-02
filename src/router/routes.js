const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/', component: () => import('pages/Home.vue') },
      { path: '/contact-us', component: () => import('pages/ContactUs.vue') },
      { path: '/our-services', component: () => import('pages/Services.vue') },
      { path: '/about-us', component: () => import('pages/About.vue') },
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
