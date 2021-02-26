// import Vssue from 'vssue'
// import GithubV3 from '@vssue/api-github-v3'
// import 'vssue/dist/vssue.css'
import anime from 'animejs'
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer,
}) => {
  if (!isServer) {
    window.$anime = anime
  }
}
