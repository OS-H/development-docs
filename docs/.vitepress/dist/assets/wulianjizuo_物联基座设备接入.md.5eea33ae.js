import{_ as e,c as t,o as s,N as o}from"./chunks/framework.719e9f09.js";const _=JSON.parse('{"title":"传感器设备接入标准","description":"","frontmatter":{},"headers":[],"relativePath":"wulianjizuo/物联基座设备接入.md"}'),a={name:"wulianjizuo/物联基座设备接入.md"},n=o(`<h1 id="传感器设备接入标准" tabindex="-1">传感器设备接入标准 <a class="header-anchor" href="#传感器设备接入标准" aria-label="Permalink to &quot;传感器设备接入标准&quot;">​</a></h1><p>物联基座为设备接入提供了两类开放 api 接口。 1、将设备属性、数据上传到物联基座 2、物联基座下发控制命令到设备</p><h1 id="接入标准" tabindex="-1">接入标准 <a class="header-anchor" href="#接入标准" aria-label="Permalink to &quot;接入标准&quot;">​</a></h1><p>设备与物联基座之间通过 MQTT 协议进行消息传递。设备在连接之前需要向物联基座申请访问令牌设备凭证，这些凭证稍后将称为<code> ACCESS_TOKEN</code>。设备需要发送用户名值为 <code>ACCESS_TOKEN</code> 的 MQTT CONNECT 消息。连接序列期间可能的返回码及其原因： 1、0x00 已连接，已成功连接到首都机场物联网平台 MQTT 服务器。 2、0x04 连接被拒绝，用户名或密码错误。 3、0x05 连接被拒绝，未经授权 。用户名包含无效的 <code>ACCESS_TOKEN</code>。</p><h1 id="数据上传-api" tabindex="-1">数据上传 api <a class="header-anchor" href="#数据上传-api" aria-label="Permalink to &quot;数据上传 api&quot;">​</a></h1><p>数据上传采用 PUBLISH 消息发送到以下主题：<code>v1/devices/me/telemetry</code></p><p>数据上传数据格式采用 json 的键值内容方式。键始终是一个字符串，而值可以是字符串，布尔值，双精度或长整数。示例格式如下： <code></code> <code>{&quot;stringKey&quot;:&quot;value1&quot;, &quot;booleanKey&quot;:true, &quot;doubleKey&quot;:42.0, &quot;longKey&quot;:73}</code> <code></code></p><p>请注意，在这种情况下，服务器端时间戳将分配给上传的数据！如果设备能够获得客户端时间戳，则可以使用以下格式： <code>{&quot;ts&quot;:1451649600512, &quot;values&quot;:{&quot;key1&quot;:&quot;value1&quot;, &quot;key2&quot;:&quot;value2&quot;}}</code></p><p>在上面的示例中，我们假设“ 1451649600512”是具有毫秒精度的 Unix 时间戳。例如，值&#39;1451649600512&#39;对应于&#39;星期五，2016 年 1 月 1 日 12：00：00.512 GMT&#39;。</p><p>通过 mosquitto 工具，将设备遥测数据推送到平台，举例如下： <code>mosquitto pub -d -h &quot;127.0.0.1 -t &quot;v1/devices/me/telemetry&#39; -u &quot;$ACCESS_TOKEN&#39; -f &quot;telemetry-data-as-object.json&quot;</code></p><p>telemetry-data-as-object.json 内容如下 <code>{&quot;ts&quot;:1451649600512,&quot;values&quot;: {&quot;key1&quot;.&quot;value1”，&quot;key2&quot;.&quot;value2&quot;}}</code></p><h1 id="属性上传-api" tabindex="-1">属性上传 api <a class="header-anchor" href="#属性上传-api" aria-label="Permalink to &quot;属性上传 api&quot;">​</a></h1><p>支持将设备的属性发布到物联基座。属性上传采用 PUBLISH 消息发送到以下主题：<code>v1/devices/me/attributes</code>。 通过 mosquitto 工具，将设备属性推送到物联基座，举例如下： <code>mosquitto pub -d -h &quot;127.0.0.1 -t &quot;v1/devices/me/attributes&#39; -u &quot;ACCESS_TOKEN&#39; -f &quot;newattributes-values.json&quot;</code></p><p>newattributes-values.json 的内容如下 <code>(&quot;attribute1&quot;:&quot;valuel&quot;, &quot;attribute2&quot;:true, &quot;attribute3&quot;:42.0, &quot;attribute4&quot;:73)</code></p><h1 id="下发控制-api" tabindex="-1">下发控制 api <a class="header-anchor" href="#下发控制-api" aria-label="Permalink to &quot;下发控制 api&quot;">​</a></h1><p>物联基座支持下发控制命令到设备。具体流程如下： 1、设备通过 SUBSCRIBE 消息订阅如下主题<code>v1/devices/me/rpc/request/+</code> 2、订阅后，设备会收到一条命令，这个命令将作为以后的主题发布消息：<code>v1/devices/me/rpc/request/$request_id</code> 其中<code>$request_id</code>是整数类型的请求标识符,物联基座用来区分不同消息的，回复使用相同消息即可。 设备发布响应也需要基于上述主题<code>v1/devices/me/rpc/response/$request_id</code>. 以下示例是用 javascript 编写的，基于 mqtt.js。纯命令行示例不可用，因为订阅和发布需要在同一 mqtt 会话中进行。</p><div class="language-var"><button title="Copy Code" class="copy"></button><span class="lang">var</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ACCESS_TOKEN = &#39;1111&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">var client = mqtt.connect(&#39;mgtt://127.0.0.1&#39;, { username: ACCESS_TOKEN })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">client.on(&#39;connect&#39;,function()</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.1og(&#39;connected&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  client.subscribe(&#39;vl/devices/me/rpc/request/+&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">client.on(&#39;message&#39;,function (topic, message) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.1og(&#39;request.topic: &#39;+ topic)</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.1og(&#39;request.body: &#39;+ message. toString())</span></span>
<span class="line"><span style="color:#A6ACCD;">  var requestId = topic.slice(&#39;vl/devices/me/rpc/request/&#39;.length)</span></span>
<span class="line"><span style="color:#A6ACCD;">  client.publish(&#39;vl/devices/me/rpc/response/&#39;+ requestId, message)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div>`,17),c=[n];function l(p,u,i,r,d,q){return s(),t("div",null,c)}const m=e(a,[["render",l]]);export{_ as __pageData,m as default};
