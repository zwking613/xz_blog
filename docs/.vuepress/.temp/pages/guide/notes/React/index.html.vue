<template><div><h1 id="react全家桶-vite" tabindex="-1"><a class="header-anchor" href="#react全家桶-vite"><span>React全家桶+Vite</span></a></h1>
<h3 id="_1-创建react项目" tabindex="-1"><a class="header-anchor" href="#_1-创建react项目"><span>1.创建React项目</span></a></h3>
<ul>
<li>通过vite创建项目</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line">npm create vite@latest vite<span class="token operator">-</span>react <span class="token operator">--</span>template raect</span>
<span class="line">cd vite<span class="token operator">-</span>react</span>
<span class="line">npm install</span>
<span class="line">npm run dev</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>配置vite.config.js</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span></span>
<span class="line"><span class="token keyword">import</span> react <span class="token keyword">from</span> <span class="token string">'@vitejs/plugin-react-swc'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// https://vitejs.dev/config/</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">react</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">host</span><span class="token operator">:</span><span class="token string">'localhost'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'/api'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'http://localhost:5000'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=></span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-现在scss" tabindex="-1"><a class="header-anchor" href="#_2-现在scss"><span>2.现在scss</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line">npm install sass sass<span class="token operator">-</span>resources<span class="token operator">-</span>loader <span class="token operator">--</span>save</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用</li>
</ul>
<p>styles/index.scss (新创建scss文件)</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token selector">.content</span><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>components/test/index.jsx</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">'./index.scss'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">       <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">   <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">       <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">           <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"content"</span><span class="token operator">></span></span>
<span class="line">               <span class="token operator">&lt;</span>div<span class="token operator">></span>测试组件<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">           <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">       <span class="token punctuation">)</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-安装路由" tabindex="-1"><a class="header-anchor" href="#_3-安装路由"><span>3.安装路由</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line">npm i react<span class="token operator">-</span>router<span class="token operator">-</span>dom <span class="token operator">--</span>save</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式一：</p>
<p>main.jsx</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom/client'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter<span class="token punctuation">,</span> Routes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App'</span></span>
<span class="line"> </span>
<span class="line">ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>BrowserRouter<span class="token operator">></span></span>
<span class="line">            <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>BrowserRouter<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">></span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>App.jsx</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Routes<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> routes <span class="token keyword">from</span> <span class="token string">'@/router/index'</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>Routes<span class="token operator">></span></span>
<span class="line">            <span class="token punctuation">{</span>routes<span class="token punctuation">}</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>Routes<span class="token operator">></span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> App</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建router/index.jsx文件</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Route<span class="token punctuation">,</span> Navigate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Index <span class="token keyword">from</span> <span class="token string">'@/pages/index.jsx'</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token operator">&lt;</span>Route key<span class="token operator">=</span><span class="token string">"Navigate"</span> path<span class="token operator">=</span><span class="token string">"*"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Navigate to<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span><span class="token comment">//重定向到首页</span></span>
<span class="line">    <span class="token operator">&lt;</span>Route key<span class="token operator">=</span><span class="token string">"Index"</span> path<span class="token operator">=</span><span class="token string">"/"</span> element<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token operator">&lt;</span>Index<span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式二（推荐）：使用useRoutes</p>
<p>main.jsx</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom/client'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App'</span></span>
<span class="line"> </span>
<span class="line">ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>BrowserRouter<span class="token operator">></span></span>
<span class="line">            <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>BrowserRouter<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">></span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>App.jsx</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useRoutes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> routes <span class="token keyword">from</span> <span class="token string">'@/router/index.jsx'</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token function">useRoutes</span><span class="token punctuation">(</span>routes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">></span></span>
<span class="line">            <span class="token punctuation">{</span>element<span class="token punctuation">}</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> App</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建router/index.jsx</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Navigate  <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span></span>
<span class="line"><span class="token keyword">import</span> Index <span class="token keyword">from</span> <span class="token string">'@/pages/index'</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token operator">&lt;</span>Index <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token comment">// 二级路由...</span></span>
<span class="line">       <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 配置路由重定向 可配置404页面</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'*'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token operator">&lt;</span>Navigate to<span class="token operator">=</span><span class="token string">'/'</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> router</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>路由配置后只需要创建对应页面即可使用</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>div<span class="token operator">></span>我是首页<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>注意如果是vite+react项目，因为是jsx文件，这块不能使用class只能以函数形式
表示页面这时候即可根据路由访问页面了</li>
</ul>
<h3 id="_4-使用axios" tabindex="-1"><a class="header-anchor" href="#_4-使用axios"><span>4.使用axios</span></a></h3>
<ul>
<li>安装axios</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line">npm i axios <span class="token operator">--</span>save</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>创建utils/request.js</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// create an axios instance</span></span>
<span class="line"><span class="token keyword">const</span> service <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_APP_BASE_API</span><span class="token punctuation">,</span> <span class="token comment">// url = base url + request url</span></span>
<span class="line">    <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// send cookies when cross-domain requests</span></span>
<span class="line">    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span> <span class="token comment">// request timeout</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// request interceptor</span></span>
<span class="line">service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token parameter">config</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 做一些请求前置，例如添加token</span></span>
<span class="line">        <span class="token comment">// config.headers['token'] = getToken()</span></span>
<span class="line">        <span class="token keyword">return</span> config</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// response interceptor</span></span>
<span class="line">service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token parameter">response</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> res <span class="token operator">=</span> response<span class="token punctuation">.</span>data</span>
<span class="line">        <span class="token comment">// if the custom code is not 200, it is judged as an error.</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>code <span class="token operator">!==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 配置响应拦截</span></span>
<span class="line">            <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>msg <span class="token operator">||</span> <span class="token string">'网络异常，请稍后~'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> res</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> service</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加环境变量文件</p>
<p>.env.development</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token constant">NODE_ENV</span> <span class="token operator">=</span> <span class="token string">'development'</span></span>
<span class="line"><span class="token constant">VITE_APP_ENV</span> <span class="token operator">=</span> <span class="token string">'development'</span></span>
<span class="line"><span class="token constant">VITE_APP_BASE_API</span> <span class="token operator">=</span> <span class="token string">'接口请求的域名'</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.env.production</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token constant">NODE_ENV</span> <span class="token operator">=</span> <span class="token string">'production'</span></span>
<span class="line"><span class="token constant">VITE_APP_ENV</span> <span class="token operator">=</span> <span class="token string">'production'</span></span>
<span class="line"><span class="token constant">VITE_APP_BASE_API</span> <span class="token operator">=</span> <span class="token string">'接口请求的域名'</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用环境变量</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_APP_BASE_API</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">'@/utils/request'</span></span>
<span class="line"><span class="token comment">// 其他引入文件</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Index</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span></span>
<span class="line">        request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/article/getAll'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 模板</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-使用redux" tabindex="-1"><a class="header-anchor" href="#_5-使用redux"><span>5.使用redux</span></a></h3>
<ul>
<li>安装redux</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line">npm install @reduxjs<span class="token operator">/</span>toolkit react<span class="token operator">-</span>redux <span class="token operator">--</span>save</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>修改main.jsx文件</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token comment">/* 其他引入的js不变，只是新增这2个插件 */</span></span>
<span class="line"><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'@/store/index'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-redux'</span></span>
<span class="line"> </span>
<span class="line">ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>Provider store<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line">            <span class="token operator">&lt;</span>BrowserRouter<span class="token operator">></span></span>
<span class="line">                <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">            <span class="token operator">&lt;</span><span class="token operator">/</span>BrowserRouter<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">></span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>创建store/index.js</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> configureStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@reduxjs/toolkit"</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// configureStore 创建一个 redux 数据</span></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">configureStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">reducer</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>创建store/modules/counterSlice.js</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createSlice <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@reduxjs/toolkit'</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> counterSlice <span class="token operator">=</span> <span class="token function">createSlice</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'counter'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">initialState</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">reducers</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function-variable function">increment</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// Redux Toolkit 允许我们在 reducers 写 "可变" 逻辑。它</span></span>
<span class="line">            <span class="token comment">// 并不是真正的改变状态值，因为它使用了 Immer 库</span></span>
<span class="line">            <span class="token comment">// 可以检测到“草稿状态“ 的变化并且基于这些变化生产全新的</span></span>
<span class="line">            <span class="token comment">// 不可变的状态</span></span>
<span class="line">            state<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">decrement</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            state<span class="token punctuation">.</span>value <span class="token operator">-=</span> <span class="token number">1</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">incrementByAmount</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            state<span class="token punctuation">.</span>value <span class="token operator">+=</span> action<span class="token punctuation">.</span>payload</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 每个 case reducer 函数会生成对应的 Action creators</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token punctuation">{</span> increment<span class="token punctuation">,</span> decrement<span class="token punctuation">,</span> incrementByAmount <span class="token punctuation">}</span> <span class="token operator">=</span> counterSlice<span class="token punctuation">.</span>actions</span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> counterSlice<span class="token punctuation">.</span>reducer</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>将counterSlice挂载到store/index.js里面</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token comment">/* 其他引入的插件不需要变，新增这个引入 */</span></span>
<span class="line"><span class="token keyword">import</span> counterReducer <span class="token keyword">from</span> <span class="token string">'@/store/modules/counterSlice'</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// configureStore 创建一个 redux 数据</span></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">configureStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">reducer</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">counter</span><span class="token operator">:</span> counterReducer</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用redux</li>
</ul>
<p>pages/index.jsx</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useSelector<span class="token punctuation">,</span> useDispatch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-redux'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> decrement<span class="token punctuation">,</span> increment <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/store/modules/counterSlice'</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">useSelector</span><span class="token punctuation">(</span><span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>counter<span class="token punctuation">.</span>value<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">const</span> dispatch <span class="token operator">=</span> <span class="token function">useDispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">            <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">                <span class="token operator">&lt;</span>button</span>
<span class="line">                    aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token string">"Increment value"</span></span>
<span class="line">                    onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line">                <span class="token operator">></span></span>
<span class="line">                    Increment</span>
<span class="line">                <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span></span>
<span class="line">                <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span></span>
<span class="line">                <span class="token operator">&lt;</span>button</span>
<span class="line">                    aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token string">"Decrement value"</span></span>
<span class="line">                    onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line">                <span class="token operator">></span></span>
<span class="line">                    Decrement</span>
<span class="line">                <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span></span>
<span class="line">            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-使用ant-design-ui框架" tabindex="-1"><a class="header-anchor" href="#_6-使用ant-design-ui框架"><span>6.使用ant-design UI框架</span></a></h3>
<ul>
<li>安装</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">npm install antd <span class="token operator">--</span>save</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>使用</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">            <span class="token operator">&lt;</span>Button type<span class="token operator">=</span><span class="token string">"primary"</span><span class="token operator">></span>Primary Button<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
</div></template>


