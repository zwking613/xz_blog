import comp from "C:/Users/admin/Desktop/blog/xz_blog/docs/.vuepress/.temp/pages/guide/notes/Web/test01.html.vue"
const data = JSON.parse("{\"path\":\"/guide/notes/Web/test01.html\",\"title\":\"JavaScript\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2024-08-16T00:00:00.000Z\",\"category\":[\"JavaScript\"],\"tag\":[\"JavaScript\"],\"archive\":true},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"guide/notes/Web/test01.md\"}")
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
