import comp from "C:/Users/admin/Desktop/blog/vuepress-starter/docs/.vuepress/.temp/pages/guide/sad/JavaScript/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/sad/JavaScript/\",\"title\":\"JavaScript\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2024-08-16T00:00:00.000Z\",\"category\":[\"JavaScript\"],\"tag\":[\"JavaScript\"],\"archive\":true},\"headers\":[],\"git\":{},\"filePathRelative\":\"guide/sad/JavaScript/README.md\"}")
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
