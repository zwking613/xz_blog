<template><div><h1 id="uni-app问题" tabindex="-1"><a class="header-anchor" href="#uni-app问题"><span>uni-app问题</span></a></h1>
<h2 id="echarts-datazoom无法再手机端进行缩放" tabindex="-1"><a class="header-anchor" href="#echarts-datazoom无法再手机端进行缩放"><span>eCharts dataZoom无法再手机端进行缩放</span></a></h2>
<h3 id="问题原因" tabindex="-1"><a class="header-anchor" href="#问题原因"><span>问题原因</span></a></h3>
<p>在uni-app中使用echarts时，如果想在手机端进行缩放操作，需要设置echarts的环境变量。</p>
<ol>
<li>main.js 文件中直接修改</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">'echarts'</span></span>
<span class="line">App<span class="token punctuation">.</span>mpType <span class="token operator">=</span> <span class="token string">'app'</span></span>
<span class="line"><span class="token comment">// 添加这行代码</span></span>
<span class="line">window<span class="token punctuation">.</span>wx <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$echarts <span class="token operator">=</span> echarts</span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token operator">...</span>App</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>main.js中全局引入echarts</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">'echarts'</span></span>
<span class="line"><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$echarts <span class="token operator">=</span> echarts</span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在使用echarts的页面中</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$echarts<span class="token punctuation">.</span>env<span class="token punctuation">.</span>touchEventsSupported <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$echarts<span class="token punctuation">.</span>env<span class="token punctuation">.</span>wxa <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$echarts<span class="token punctuation">.</span>env<span class="token punctuation">.</span>canvasSupported <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$echarts<span class="token punctuation">.</span>env<span class="token punctuation">.</span>svgSupported <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$echarts<span class="token punctuation">.</span>env<span class="token punctuation">.</span>domSupported <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>myChart <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'main'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上两种方式都可以解决echarts在手机端无法缩放的问题,建议选择第二种方式,因为第一种方式可能会影响其它页面功能的正常使用</p>
<hr>
</div></template>


