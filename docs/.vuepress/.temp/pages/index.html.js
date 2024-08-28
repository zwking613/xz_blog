import comp from "C:/Users/admin/Desktop/blog/xz_blog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"actions\":[{\"text\":\"快速了解\",\"link\":\"/guide/about/\",\"type\":\"primary\"}],\"features\":[{\"title\":\"个人介绍\",\"details\":\"主要涉及技术：前端主流框架。\"},{\"title\":\"开发笔记\",\"details\":\"记录自己在日常中遇到的技术挑战和解决方案。分享在使用各种技术工具和框架时的实践经验和最佳实践。撰写详细的技术文档，包括配置步骤、代码示例和问题排查方法。\"},{\"title\":\"技术博客\",\"details\":\"写作关于特定技术领域的深度文章，如微服务架构、容器化部署、Web开发等。分享个人对新技术的理解和见解，提供教程和指南，帮助其他开发者学习和解决实际问题。。\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present Evan You\"},\"headers\":[],\"git\":{\"updatedTime\":1724132481000,\"contributors\":[{\"name\":\"zZzwWw\",\"email\":\"348721637@qq.com\",\"commits\":3}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
