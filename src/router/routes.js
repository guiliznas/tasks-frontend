export default [
  {
    path: '/',
    name: 'home',
    meta: {
      hasAuth: true,
    },
    component: () => lazyLoadView(import('@views/Tasks.vue')),
  },
  {
    path: '/login',
    name: 'login',
    component: () => lazyLoadView(import('@views/Login.vue')),
  },
  {
    path: '/agenda',
    name: 'agenda',
    component: () => lazyLoadView(import('@views/ViewAgenda.vue')),
  },
  {
    path: '/avaliar',
    name: 'avaliar',
    component: () => lazyLoadView(import('@views/ViewAvaliar.vue')),
  },
  {
    path: '/configurar',
    name: 'setting',
    component: () => lazyLoadView(import('@views/Setting.vue')),
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
