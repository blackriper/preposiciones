import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import en from 'vuetify/lib/locale/en';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      themes: {
      light: {
        primary: '#2196F3',
        secondary: '#8c8ca4',
        accent: '#e7e4ed',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
    lang: {
      locales: { en },
      current: 'en',
    },
});
