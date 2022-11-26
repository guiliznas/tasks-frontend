export default [
  {
    path: '/',
    name: 'home',
    redirect: '/tasks',
    component: () => lazyLoadView(import('@views/HomeView.vue')),
  },
  {
    path: '/login',
    name: 'login',
    component: () => lazyLoadView(import('@views/Login.vue')),
  },
  {
    path: '/tasks',
    name: 'tasks',
    meta: {
      hasAuth: true,
    },
    component: () => lazyLoadView(import('@views/Tasks.vue')),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => lazyLoadView(import('@views/AboutView.vue')),
  },
  {
    path: '*',
    name: '404',
    component: () => lazyLoadView(import('@views/_404.vue')),
  },
]

// NOTE: Components loaded with this strategy DO NOT have access
// to in-component guards, such as beforeRouteEnter,
// beforeRouteUpdate, and beforeRouteLeave. You must either use
// route-level guards instead or lazy-load the component directly:
//
// component: () => import('@views/my-view')
//
function lazyLoadView(AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
    loading: require('@views/_loading').default,
    delay: 400, // Delay antes de apresentar
    error: require('@views/_404').default, // Caso estoure o timeout
    timeout: 10000,
  })

  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      return h(AsyncHandler, data, children)
    },
  })
}
