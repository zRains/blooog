export default ({ isServer }) => {
  if (!isServer) {
    window.$anime = require('animejs').default
  }
}
