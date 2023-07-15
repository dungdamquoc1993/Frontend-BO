import Vue from 'vue'
import App from '@/App.vue'

// Vuesax Component Framework
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css'; // Vuesax
import IconCrypto from "vue-cryptocurrency-icons"; //IconCrypto 

Vue.use(IconCrypto)

Vue.use(Vuesax)

// Vue Router
import router from '@/pages/index/router.js'

// Vuex Store
import store from '../../store/storeMain'

// API Calls
import "../../http/requests"

// mock
import "../../fake-db/index.js"

// Firebase
import '@/firebase/firebaseConfig'

// Theme Configurations
//import '../../../themeConfig.js'

// ACL
import acl from '../../acl/acl'


// Globally Registered Components
import '../../globalComponents.js'


// Styles: SCSS
import '../../assets/scss/main.scss'


// Tailwind
import '@/assets/css/main.css'

// i18n
import i18n from '../../i18n/client/i18n'


// Vuexy Admin Filters
import '../../filters/filters'


// Clipboard
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard);



// Auth0 Plugin
import AuthPlugin from "../../plugins/auth";
Vue.use(AuthPlugin);

// Tour
import VueTour from 'vue-tour'
Vue.use(VueTour)
require('vue-tour/dist/vue-tour.css')

// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)


// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'


// Feather font icon
require('../../assets/css/iconfont.css')


// VeeValidate
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

Vue.config.productionTip = false


new Vue({
    i18n,
    acl,
    store,
    router,
  render: h => h(App)
}).$mount('#app') 