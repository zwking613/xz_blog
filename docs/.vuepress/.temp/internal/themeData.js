export const themeData = JSON.parse("{\"logo\":\"/images/logo.png\",\"sidebar\":[{\"title\":\"HTML基础学习\",\"collapsable\":true,\"sidebarDepth\":1,\"children\":[{\"title\":\"HTML基础学习\",\"path\":\"/guide/前端学习笔记/01html基础.md\"},{\"title\":\"bas\",\"path\":\"/guide/前端学习笔记/00html基础.md\"}]},{\"title\":\"Group 2\",\"children\":[{\"title\":\"java\",\"path\":\"/java/01java.md\"}]}],\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"技术笔记\",\"children\":[{\"text\":\"前端\",\"children\":[{\"text\":\"HTML & CSS\",\"link\":\"/guide/notes/Web/\"},{\"text\":\"JavaScript\",\"link\":\"/guide/notes/JavaScript/\"},{\"text\":\"Vue\",\"link\":\"/guide/notes/Vue/\"},{\"text\":\"React\",\"link\":\"/guide/notes/React/\"},{\"text\":\"Uni-app\",\"link\":\"/guide/notes/Uni-app/\"}]}]},{\"text\":\"常见问题\",\"link\":\"/guide/problem/\"},{\"text\":\"面试常问\",\"link\":\"/guide/interview/\"},{\"text\":\"开源项目\",\"children\":[{\"text\":\"HTML & CSS\",\"link\":\"/guide/project/Web/\"},{\"text\":\"Vue\",\"link\":\"/guide/project/Vue/\"},{\"text\":\"React\",\"link\":\"/guide/project/React/\"},{\"text\":\"Uni-app\",\"link\":\"/guide/project/Uni-app/\"}]},{\"text\":\"常用技术\",\"link\":\"/guide/skill/\"},{\"text\":\"关于我\",\"link\":\"/guide/about/\",\"sidebar\":true}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
