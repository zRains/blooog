export default ({ isServer, router }) => {
  if (!isServer) {
    window.$anime = require('animejs').default
  }
}
