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
        sidebar: {
            '/guide/notes/Web/': [
                {
                    children: [
                        "/guide/notes/Web/",
                        "/guide/notes/Web/filesUpload",
                        "/guide/notes/Web/web002",
                        "/guide/notes/Web/web003"
                    ]
                },
            ],
            '/guide/notes/JavaScript/': [],
            '/guide/notes/Vue/': [{
                children: [
                    "/guide/notes/Vue/"
                ]
            },],
            '/guide/notes/React/': [
                 {
                    children: [
                        "/guide/notes/React/",
                    ]
                },
            ],
            '/guide/notes/Uni-app/': [],
            '/guide/problem/': [{
                text: 'uni-app',
                collapsible: true,
                children: [
                    "/guide/problem/"
                ]
            }],
            '/guide/interview/': [
                {
                    text: '面试题',
                    children: [
                        '/guide/interview/Html&CSS',
                        '/guide/interview/JavaScript',
                        '/guide/interview/Vue&React',
                    ]
                }, {
                    text: '笔试题',
                    children: [
                        '/guide/interview/written_examination'
                    ]
                }
            ],
            '/guide/project/Web/': [],
            '/guide/project/Vue/': [],
            '/guide/project/React/': [],
            '/guide/project/Uni-app/': [],
            '/guide/skill/': [],
            '/guide/about/': [],
        },
        navbar: [
            { text: '首页', link: '/' },
            {
                text: '技术笔记',
                children: [
                    {
                        text: '前端',
                        children: [
                            { text: '基础', link: '/guide/notes/Web/' },

                            // { text: 'HTML & CSS', link: '/guide/notes/Web/' },
                            // { text: 'JavaScript', link: '/guide/notes/JavaScript/' },
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
            { text: '关于我', link: '/guide/about/' }
        ],
    }),
})