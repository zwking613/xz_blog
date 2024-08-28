<template><div><h1 id="笔试大全" tabindex="-1"><a class="header-anchor" href="#笔试大全"><span>笔试大全</span></a></h1>
<h2 id="a-console-log-a-1-a-2-a-3" tabindex="-1"><a class="header-anchor" href="#a-console-log-a-1-a-2-a-3"><span>a=? console.log(a===1&amp;a===2&amp;a===3)</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 解题思路</span>
<span class="line"> * </span>
<span class="line"> * 对象比较时都会指向 valueOf 和 toString 方法，重写 valueOf 和 toString 方法 即可</span>
<span class="line"> * </span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span><span class="token punctuation">{</span></span>
<span class="line">  num：<span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">valueOf</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">++</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 或者</span></span>
<span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">toString</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>num<span class="token operator">++</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="不改变下面代码-修改obj的值" tabindex="-1"><a class="header-anchor" href="#不改变下面代码-修改obj的值"><span>不改变下面代码，修改obj的值</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> obj<span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">get</span><span class="token punctuation">(</span><span class="token parameter">k</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> obj<span class="token punctuation">[</span>k<span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 当前我们只能通过fn.get('a')去获得obj属性a的值，</span>
<span class="line"> * 要想更改a或者b或者给obj添加其他属性，</span>
<span class="line"> * 可通过如下方式给对象原型上添加属性abc 使用访问器返回当前对象</span>
<span class="line"> * </span>
<span class="line">*/</span></span>
<span class="line">Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">'getObj'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> res <span class="token operator">=</span> o<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'getObj'</span><span class="token punctuation">)</span> <span class="token comment">// {a:1,b:2}</span></span>
<span class="line">res<span class="token punctuation">.</span>d <span class="token operator">=</span> <span class="token number">3</span></span>
<span class="line">res<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token number">4</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'getObj'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {a:1,b:2，c:4,d:3}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
</div></template>


