export const redirects = JSON.parse("{\"/guide/interview/Html&CSS.html\":\"/guide/interview/Html_CSS.html\",\"/guide/interview/Vue&React.html\":\"/guide/interview/Vue_React.html\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/admin/Desktop/blog/xz_blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/guide/about/", { loader: () => import(/* webpackChunkName: "guide_about_index.html" */"C:/Users/admin/Desktop/blog/xz_blog/docs/.vuepress/.temp/pages/guide/about/index.html.js"), meta: {"title":"JavaScript"} }],
  ["/guide/problem/", { loader: () => import(/* webpackChunkName: "guide_problem_index.html" */"C:/Users/admin/Desktop/blog/xz_blog/docs/.vuepress/.temp/pages/guide/problem/index.html.js"), meta: {"title":"uni-app问题"} }],
  ["/guide/interview/Html_CSS.html", { loader: () => import(/* webpackChunkName: "guide_interview_Html_CSS.html" */"C:/Users/admin/Desktop/blog/xz_blog/docs/.vuepress/.temp/pages/guide/interview/Html_CSS.html.js"), meta: {"title":"Html&CSS"} }],
  ["/guide/interview/JavaScript.html", { loader: () => import(/* webpackChunkName: "guide_interview_JavaScript.html" */"C:/Users/admin/Desktop/blog/xz_blog/docs/.vuepress/.temp/pages/guide/interview/JavaScript.html.js"), meta: {"title":"JavaScript"} }],
  ["/guide/interview/", { loader: () => import(/* webpackChunkName: "guide_interview_index.html" */"C:/Users/admin/Desktop/blog/xz_blog/docs/.vuepress/.temp/pages/guide/interview/index.html.js"), meta: {"title":""} }],
  ["/guide/interview/Vue_React.html", { loader: () => import(/* webpackChunkName: "guide_interview_Vue_React.html" */"C:/Users/admin/Desktop/blog/xz_blog/docs/.vuepress/.temp/pages/guide/interview/Vue_React.html.js"), meta: {"title":"Vue&React"} }],
  ["/guide/interview/written_examination.html", { loader: () => import(/* webpackChunkName: "guide_interview_written_examination.html" */"C:/Users/admin/Desktop/blog/xz_blog/docs/.vuepress/.temp/pages/guide/interview/written_examination.html.js"), meta: {"title":"笔试大全"} }],
  ["/guide/skill/", { loader: () => import(/* webpackChunkName: "guide_skill_index.html" */"C:/Users/admin/Desktop/blog/xz_blog/docs/.vuepress/.temp/pages/guide/skill/index.html.js"), meta: {"title":""} }],
  ["/guide/project/JavaScript/", { loader: () => import(/* webpackChunkName: "guide_project_JavaScript_index.html" */"C:/Users/admin/Desktop/blog/xz_blog/docs/.vuepress/.temp/pages/guide/project/JavaScript/index.html.js"), meta: {"title":"JavaScript"} }],
  ["/guide/project/React/", { loader: () => import(/* webpackChunkName: "guide_project_React_index.html" */"C:/Users/admin/Desktop/blog/xz_blog/docs/.vuepress/.temp/pages/guide/project/React/index.html.js"), meta: {"title":"JavaScript"} }],
  ["/guide/project/Uni-app/", { loader: () => import(/* webpackChunkName: "guide_project_Uni-app_index.html" */"C:/Users/admin/Desktop/blog/xz_blog/docs/.vuepress/.temp/pages/guide/project/Uni-app/index.html.js"), meta: {"title":"JavaScript"} }],
  ["/guide/notes/JavaScript/", { loader: () => import(/* webpackChunkName: "guide_notes_JavaScript_index.html" */"C:/Users/admin/Desktop/blog/xz_blog/docs/.vuepress/.temp/pages/guide/notes/JavaScript/index.html.js"), meta: {"title":"JavaScript"} }],
  ["/guide/project/Web/", { loader: () => import(/* webpackChunkName: "guide_project_Web_index.html" */"C:/Users/admin/Desktop/blog/xz_blog/docs/.vuepress/.temp/pages/guide/project/Web/index.html.js"), meta: {"title":"JavaScript"} }],
  ["/guide/notes/React/", { loader: () => import(/* webpackChunkName: "guide_notes_React_index.html" */"C:/Users/admin/Desktop/blog/xz_blog/docs/.vuepress/.temp/pages/guide/notes/React/index.html.js"), meta: {"title":"JavaScript"} }],
  ["/guide/project/Vue/", { loader: () => import(/* webpackChunkName: "guide_project_Vue_index.html" */"C:/Users/admin/Desktop/blog/xz_blog/docs/.vuepress/.temp/pages/guide/project/Vue/index.html.js"), meta: {"title":"JavaScript"} }],
  ["/guide/notes/Vue/", { loader: () => import(/* webpackChunkName: "guide_notes_Vue_index.html" */"C:/Users/admin/Desktop/blog/xz_blog/docs/.vuepress/.temp/pages/guide/notes/Vue/index.html.js"), meta: {"title":"Vue开发日常"} }],
  ["/guide/notes/Uni-app/", { loader: () => import(/* webpackChunkName: "guide_notes_Uni-app_index.html" */"C:/Users/admin/Desktop/blog/xz_blog/docs/.vuepress/.temp/pages/guide/notes/Uni-app/index.html.js"), meta: {"title":"JavaScript"} }],
  ["/guide/notes/Web/", { loader: () => import(/* webpackChunkName: "guide_notes_Web_index.html" */"C:/Users/admin/Desktop/blog/xz_blog/docs/.vuepress/.temp/pages/guide/notes/Web/index.html.js"), meta: {"title":"JavaScript"} }],
  ["/guide/notes/Web/web001.html", { loader: () => import(/* webpackChunkName: "guide_notes_Web_web001.html" */"C:/Users/admin/Desktop/blog/xz_blog/docs/.vuepress/.temp/pages/guide/notes/Web/web001.html.js"), meta: {"title":"WEB0001"} }],
  ["/guide/notes/Web/web002.html", { loader: () => import(/* webpackChunkName: "guide_notes_Web_web002.html" */"C:/Users/admin/Desktop/blog/xz_blog/docs/.vuepress/.temp/pages/guide/notes/Web/web002.html.js"), meta: {"title":"WEB0002"} }],
  ["/guide/notes/Web/web003.html", { loader: () => import(/* webpackChunkName: "guide_notes_Web_web003.html" */"C:/Users/admin/Desktop/blog/xz_blog/docs/.vuepress/.temp/pages/guide/notes/Web/web003.html.js"), meta: {"title":"WEB0003"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/admin/Desktop/blog/xz_blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
