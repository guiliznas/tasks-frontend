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
        primary: '#009688', // teal
        primaryLight: '#B2DFDB', // teal lighten-4
        primaryDark: '#00796B', // teal darken-2
        secondary: '#546E7A', // grey darken-1
        accent: '#FFC107', // amber
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
