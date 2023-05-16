import{_ as a,c as s,o as e,N as o}from"./chunks/framework.b47621f9.js";const q=JSON.parse('{"title":"概述","description":"","frontmatter":{},"headers":[],"relativePath":"chajianhuaxitongdajian/插件开发.md"}'),t={name:"chajianhuaxitongdajian/插件开发.md"},n=o(`<h1 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h1><p>整个系统采用插件化的设计理念，每个功能模块都是一个独立的插件，可以被单独加载、卸载或更新，而不会对整个系统产生影响。插件化设计还可以让不同的开发团队并行开发不同的插件，从而提高系统的开发效率和质量。</p><h1 id="插件交付物" tabindex="-1">插件交付物 <a class="header-anchor" href="#插件交付物" aria-label="Permalink to &quot;插件交付物&quot;">​</a></h1><p>插件以 docker 镜像的形式进行交付，相关动态变化的数据需要暴露在配置文件中。</p><h1 id="插件授权" tabindex="-1">插件授权 <a class="header-anchor" href="#插件授权" aria-label="Permalink to &quot;插件授权&quot;">​</a></h1><p>插件需要具备授权检查功能，未经过授权的驱动包只可进行 1 周的使用时间权限。认证授权流程如下：<br> 1、申请插件唯一编码。每个插件都有一个唯一的编码 ID，改 ID 由开发者在开发者平台申请。<br> 2、授权登录，通过 websocket 服务与授权服务进行认证，websocket 的 url 如下： <code>ws://IP:Port/socket/authorization</code> websocket 连上之后，每隔 120 秒发送认证请求</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&quot;authorizationcode&quot;: &quot;code&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;pluginid&quot;: &quot;id&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>其中 authorizationcode 为用户在插件商城购买的授权码，需要在配置文件中暴露出来，给用户进行配置。 pluginid 为插件申请的唯一 id，这个 id 不能让用户进行配置。</p><p>如果认证成功，返回如下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&quot;status&quot;: &quot;success&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;code&quot;: 200,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;message&quot;: &quot;Authorization successfully&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>其实 code 为 200 是认证成功，其他数字为认证失败。 如果认证失败，需要退出程序。</p>`,11),c=[n];function l(p,i,r,u,d,h){return e(),s("div",null,c)}const C=a(t,[["render",l]]);export{q as __pageData,C as default};
