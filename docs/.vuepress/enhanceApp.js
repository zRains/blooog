import colorPicker from '../.vuepress/theme/components/tools/colorPicker/colorPicker.vue'
export default ({ isServer, router }) => {
  router.addRoutes([{ path: '/tool/colorPickers', component: colorPicker }])
  if (!isServer) {
    window.$anime = require('animejs').default
  }
}
