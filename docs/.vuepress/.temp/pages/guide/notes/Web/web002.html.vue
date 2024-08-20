<template><div><h1 id="web0002" tabindex="-1"><a class="header-anchor" href="#web0002"><span>WEB0002</span></a></h1>
<p>H5项目中使用 ECharts datazoom 无法再手机端进行缩放</p>
<h2 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts"><span>ECharts</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 1.引入echarts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">'echarts'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2.初始化echarts实例</span></span>
<span class="line"><span class="token keyword">const</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'main'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="echarts1" tabindex="-1"><a class="header-anchor" href="#echarts1"><span>ECharts1</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 1.引入echarts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">'echarts'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2.初始化echarts实例</span></span>
<span class="line"><span class="token keyword">const</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'main'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/bundler-vite'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'XZ_BLOG'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">'/xz_blog/'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'XZ 学习日常'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">bundler</span><span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">'/images/logo.png'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">'/guide/notes/Web/'</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'侧边栏0001'</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">collapsible</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                        <span class="token punctuation">{</span></span>
<span class="line">                            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'侧边栏0001-1'</span><span class="token punctuation">,</span></span>
<span class="line">                            <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">                            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                                <span class="token string">"/guide/notes/Web/"</span><span class="token punctuation">,</span></span>
<span class="line">                                <span class="token string">"/guide/notes/Web/web001"</span><span class="token punctuation">,</span></span>
<span class="line">                                <span class="token string">"/guide/notes/Web/web002"</span><span class="token punctuation">,</span></span>
<span class="line">                                <span class="token string">"/guide/notes/Web/web003"</span></span>
<span class="line">                            <span class="token punctuation">]</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">]</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">'/guide/notes/JavaScript/'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">'/guide/notes/Vue/'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">'/guide/notes/React/'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">'/guide/notes/Uni-app/'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">'/guide/problem/'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'uni-app'</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'/guide/problem/'</span><span class="token punctuation">]</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">'/guide/interview/'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">'/guide/project/Web/'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">'/guide/project/Vue/'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">'/guide/project/React/'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">'/guide/project/Uni-app/'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">'/guide/skill/'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">'/guide/about/'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// {</span></span>
<span class="line">            <span class="token comment">//     title: 'HTML基础学习',   // 必要的</span></span>
<span class="line">            <span class="token comment">//     // path: '/前端学习笔记/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在</span></span>
<span class="line">            <span class="token comment">//     collapsable: true, // 可选的, 默认值是 true,</span></span>
<span class="line">            <span class="token comment">//     sidebarDepth: 1,    // 可选的, 默认值是 1</span></span>
<span class="line">            <span class="token comment">//     children: [</span></span>
<span class="line">            <span class="token comment">//         {</span></span>
<span class="line">            <span class="token comment">//             title: 'HTML基础学习',</span></span>
<span class="line">            <span class="token comment">//             path: '/guide/前端学习笔记/01html基础.md'</span></span>
<span class="line">            <span class="token comment">//         },</span></span>
<span class="line">            <span class="token comment">//         {</span></span>
<span class="line">            <span class="token comment">//             title: 'bas',</span></span>
<span class="line">            <span class="token comment">//             path: '/guide/前端学习笔记/00html基础.md'</span></span>
<span class="line">            <span class="token comment">//         },</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//     ]</span></span>
<span class="line">            <span class="token comment">// },</span></span>
<span class="line">            <span class="token comment">// {</span></span>
<span class="line">            <span class="token comment">//     title: 'Group 2',</span></span>
<span class="line">            <span class="token comment">//     children: [</span></span>
<span class="line">            <span class="token comment">//         {</span></span>
<span class="line">            <span class="token comment">//             title: 'java',</span></span>
<span class="line">            <span class="token comment">//             path: '/java/01java.md'</span></span>
<span class="line">            <span class="token comment">//         }</span></span>
<span class="line">            <span class="token comment">//     ],</span></span>
<span class="line">            <span class="token comment">// }</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'首页'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'技术笔记'</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                    <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'前端'</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                            <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'HTML &amp; CSS'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/guide/notes/Web/'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                            <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'JavaScript'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/guide/notes/JavaScript/'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                            <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Vue'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/guide/notes/Vue/'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                            <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'React'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/guide/notes/React/'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                            <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Uni-app'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/guide/notes/Uni-app/'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token punctuation">]</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token comment">// {</span></span>
<span class="line">                    <span class="token comment">//     text: '后端', children: [</span></span>
<span class="line">                    <span class="token comment">//         { text: '前端学习笔记', link: '/guide/前端学习笔记/' },</span></span>
<span class="line">                    <span class="token comment">//         { text: 'Java学习笔记', link: '/guide/japanese/' }</span></span>
<span class="line">                    <span class="token comment">//     ]</span></span>
<span class="line">                    <span class="token comment">// },</span></span>
<span class="line">                <span class="token punctuation">]</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'常见问题'</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/guide/problem/'</span></span>
<span class="line">                <span class="token comment">// children: [</span></span>
<span class="line">                <span class="token comment">//     { text: '前端', link: '/guide/problem/' },</span></span>
<span class="line">                <span class="token comment">//     // { text: 'Japanese', link: '/language/japanese/' }</span></span>
<span class="line">                <span class="token comment">// ]</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'面试常问'</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/guide/interview/'</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token comment">// children: [</span></span>
<span class="line">                <span class="token comment">//     {</span></span>
<span class="line">                <span class="token comment">//         text: '前端', link: '/language/interview/' },</span></span>
<span class="line">                <span class="token comment">//     // { text: 'Japanese', link: '/language/japanese/' }</span></span>
<span class="line">                <span class="token comment">// ]</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'开源项目'</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                    <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'HTML &amp; CSS'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/guide/project/Web/'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Vue'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/guide/project/Vue/'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'React'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/guide/project/React/'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Uni-app'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/guide/project/Uni-app/'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">]</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'常用技术'</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/guide/skill/'</span> </span>
<span class="line">                <span class="token comment">// children: [</span></span>
<span class="line">                <span class="token comment">//     { text: 'Chinese', link: '/language/chinese/' }</span></span>
<span class="line">                <span class="token comment">//     // { text: 'Japanese', link: '/language/japanese/' }</span></span>
<span class="line">                <span class="token comment">// ]</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'关于我'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/guide/about/'</span><span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="echarts2" tabindex="-1"><a class="header-anchor" href="#echarts2"><span>ECharts2</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 1.引入echarts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">'echarts'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2.初始化echarts实例</span></span>
<span class="line"><span class="token keyword">const</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'main'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="echarts3" tabindex="-1"><a class="header-anchor" href="#echarts3"><span>ECharts3</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 1.引入echarts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">'echarts'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2.初始化echarts实例</span></span>
<span class="line"><span class="token keyword">const</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'main'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 1.引入echarts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">'echarts'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2.初始化echarts实例</span></span>
<span class="line"><span class="token keyword">const</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'main'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 1.引入echarts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">'echarts'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2.初始化echarts实例</span></span>
<span class="line"><span class="token keyword">const</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'main'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 1.引入echarts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">'echarts'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2.初始化echarts实例</span></span>
<span class="line"><span class="token keyword">const</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'main'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 1.引入echarts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">'echarts'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2.初始化echarts实例</span></span>
<span class="line"><span class="token keyword">const</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'main'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 1.引入echarts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">'echarts'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2.初始化echarts实例</span></span>
<span class="line"><span class="token keyword">const</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'main'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 1.引入echarts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">'echarts'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2.初始化echarts实例</span></span>
<span class="line"><span class="token keyword">const</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'main'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
</div></template>


