import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import pt from 'vuetify/lib/locale/pt'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#607D8B', // blue-grey
        primaryLight: '#CFD8DC', // blue-grey lighten-4
        primaryDark: '#455A64', // blue-grey darken-2
        secondary: '#757575', // grey darken-1
        accent: '#009688', // teal
        error: '#F44336',
        info: '#00BCD4',
        success: '#4CAF50',
        warning: '#FF9800',
      },
    },
  },
  lang: {
    locales: { pt },
    current: 'pt',
  },
  icons: {
    iconfont: 'fa',
  },
})
