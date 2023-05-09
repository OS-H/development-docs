import{_ as s,c as a,o as n,N as e}from"./chunks/framework.719e9f09.js";const d=JSON.parse('{"title":"物联网关接入标准","description":"","frontmatter":{},"headers":[],"relativePath":"wulianjizuo/物联基座网关接入.md"}'),o={name:"wulianjizuo/物联基座网关接入.md"},t=e(`<h1 id="物联网关接入标准" tabindex="-1">物联网关接入标准 <a class="header-anchor" href="#物联网关接入标准" aria-label="Permalink to &quot;物联网关接入标准&quot;">​</a></h1><p>物联基座支持通过网关来批量接入设备，开放接口如下： 1、设备连接、断开通知 2、将网关管理的设备属性、数据上传到物联基座 3、物联基座下发控制命令到网关</p><h1 id="接入标准" tabindex="-1">接入标准 <a class="header-anchor" href="#接入标准" aria-label="Permalink to &quot;接入标准&quot;">​</a></h1><p>物联网关与物联基座之间通过 MQTT 协议进行消息传递。设备在连接之前需要向物联基座申请访问令牌设备凭证，这些凭证稍后将称为<code> ACCESS_TOKEN</code>。设备需要发送用户名的值为 <code>ACCESS_TOKEN</code> 的 MQTT CONNECT 消息。连接序列期间可能的返回码及其原因： 1、0x00 已连接，已成功连接到首都机场物联网平台 MQTT 服务器。 2、0x04 连接被拒绝，用户名或密码错误。 3、0x05 连接被拒绝，未经授权 。用户名包含无效的 <code>ACCESS_TOKEN</code>。</p><h1 id="设备连接、断开通知" tabindex="-1">设备连接、断开通知 <a class="header-anchor" href="#设备连接、断开通知" aria-label="Permalink to &quot;设备连接、断开通知&quot;">​</a></h1><p>设备连接采用 PUBLISH 消息发送到以下主题： <code>v1/gateway/connect</code> 消息格式： <code>{&quot;device&quot;:&quot;Device A&quot;}</code> 其中 Device A 是您的连接成功的设备名称。</p><p>设备断开连接采用 PUBLISH 消息发送到以下主题： <code>v1/gateway/disconnect</code> 消息格式： <code>{&quot;device&quot;:&quot;Device A&quot;}</code> 其中 Device A 是您的断开连接的设备名称。</p><h1 id="数据上传-api" tabindex="-1">数据上传 api <a class="header-anchor" href="#数据上传-api" aria-label="Permalink to &quot;数据上传 api&quot;">​</a></h1><p>数据上传采用 PUBLISH 消息发送到以下主题： <code>v1/gateway/telemetry</code> 数据格式</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&quot;Device A&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;ts&quot;: 1483228800000,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;values&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;temperature&quot;: 42,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;humidity&quot;: 80</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;ts&quot;: 1483228801000,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;values&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;temperature&quot;: 43,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;humidity&quot;: 82</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;Device B&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;ts&quot;: 1483228800000,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;values&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;temperature&quot;: 42,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;humidity&quot;: 80</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>其中 Device A 和  Device B 是您的设备名称，temperature 和 humidity 是遥测键，ts 是 unix 时间戳（以毫秒为单位）。 请注意，如果不传入时间戳，服务器端将自动将时间戳分配给上传的数据。</p><h1 id="属性上传-api" tabindex="-1">属性上传 api <a class="header-anchor" href="#属性上传-api" aria-label="Permalink to &quot;属性上传 api&quot;">​</a></h1><p>支持将网关设备的属性发布到物联基座。属性上传采用 PUBLISH 消息发送到以下主题：<code>v1/gateway/attributes</code>。 数据格式</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;Device A&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;attribute1&quot;: &quot;value1&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;attribute2&quot;: 42</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;Device B&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;attribute1&quot;: &quot;value1&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;attribute2&quot;: 42</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>其中&quot;Device A&quot;和&quot;Device B&quot;是您的设备名称，&quot;attribute1&quot;和&quot;attribute2&quot;是属性键。</p><h1 id="下发控制-api" tabindex="-1">下发控制 api <a class="header-anchor" href="#下发控制-api" aria-label="Permalink to &quot;下发控制 api&quot;">​</a></h1><p>物联基座支持下发控制命令到网关。具体流程如下： 1、网关通过 SUBSCRIBE 消息订阅如下主题<code>v1/gateway/rpc</code> 2、物联基座发送请求命令格式如下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&quot;device&quot;: &quot;Device A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;id&quot;: &quot;request_id&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;method&quot;: &quot;toggle_gpio&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;params&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;pin&quot;: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>设备处理完命令后，网关可以使用以下格式将命令发送回：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&quot;device&quot;: &quot;Device A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;id&quot;: &quot;request_id&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;success&quot;: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>其中 request_id 是您的请求标识符，Device A 是您的设备名称，method 是您的 RPC 方法名称。</p>`,21),p=[t];function l(c,i,u,r,C,A){return n(),a("div",null,p)}const y=s(o,[["render",l]]);export{d as __pageData,y as default};
