import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'XZ_BLOG',
    base: '/xz_blog/',
    description: 'XZ 学习日常',
    bundler: viteBundler(),
    theme: defaultTheme({
        logo: '/images/logo.png',
        sidebar: [

            {
                title: 'HTML基础学习',   // 必要的
                // path: '/前端学习笔记/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    {
                        title: 'HTML基础学习',
                        path: '/guide/前端学习笔记/01html基础.md'
                    },
                    {
                        title: 'bas',
                        path: '/guide/前端学习笔记/00html基础.md'
                    },

                ]
            },
            {
                title: 'Group 2',
                children: [
                    {
                        title: 'java',
                        path: '/java/01java.md'
                    }
                ],
            }
        ],
        navbar: [
            { text: '首页', link: '/' },
            {
                text: '技术笔记',
                children: [
                    {
                        text: '前端',
                        children: [
                            { text: 'HTML & CSS', link: '/guide/notes/Web/' },
                            { text: 'JavaScript', link: '/guide/notes/JavaScript/' },
                            { text: 'Vue', link: '/guide/notes/Vue/' },
                            { text: 'React', link: '/guide/notes/React/' },
                            { text: 'Uni-app', link: '/guide/notes/Uni-app/' },
                        ]
                    },
                    // {
                    //     text: '后端', children: [
                    //         { text: '前端学习笔记', link: '/guide/前端学习笔记/' },
                    //         { text: 'Java学习笔记', link: '/guide/japanese/' }
                    //     ]
                    // },
                ]
            },
            {
                text: '常见问题',
                link: '/guide/problem/'
                // children: [
                //     { text: '前端', link: '/guide/problem/' },
                //     // { text: 'Japanese', link: '/language/japanese/' }
                // ]
            },
            {
                text: '面试常问',
                link: '/guide/interview/',
                // children: [
                //     {
                //         text: '前端', link: '/language/interview/' },
                //     // { text: 'Japanese', link: '/language/japanese/' }
                // ]
            },
            {
                text: '开源项目',
                children: [
                    { text: 'HTML & CSS', link: '/guide/project/Web/' },
                    { text: 'Vue', link: '/guide/project/Vue/' },
                    { text: 'React', link: '/guide/project/React/' },
                    { text: 'Uni-app', link: '/guide/project/Uni-app/' },
                ]
            },
            {
                text: '常用技术',
                link: '/guide/skill/' 
                // children: [
                //     { text: 'Chinese', link: '/language/chinese/' }
                //     // { text: 'Japanese', link: '/language/japanese/' }
                // ]
            },
            { text: '关于我', link: '/guide/about/' ,sidebar:true}
        ],
    }),
})