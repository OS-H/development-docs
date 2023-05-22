import{_ as s,c as a,o as n,N as e}from"./chunks/framework.719e9f09.js";const m=JSON.parse('{"title":"消息引擎插件","description":"","frontmatter":{},"headers":[],"relativePath":"chajianhuaxitongdajian/purpose_module-main/消息引擎组件/消息引擎插件.md"}'),l={name:"chajianhuaxitongdajian/purpose_module-main/消息引擎组件/消息引擎插件.md"},o=e(`<h1 id="消息引擎插件" tabindex="-1">消息引擎插件 <a class="header-anchor" href="#消息引擎插件" aria-label="Permalink to &quot;消息引擎插件&quot;">​</a></h1><h2 id="版本" tabindex="-1">版本 <a class="header-anchor" href="#版本" aria-label="Permalink to &quot;版本&quot;">​</a></h2><p>rocketMQ 4.4.0</p><h2 id="部署过程" tabindex="-1">部署过程 <a class="header-anchor" href="#部署过程" aria-label="Permalink to &quot;部署过程&quot;">​</a></h2><ol><li><p>将镜像文件导入到服务器（linux系统） 比如镜像包名为<code>rocketmq440.tar</code></p></li><li><p>镜像文件所在目录执行下列命令，加载镜像 <code>docker load -i rocketmq440.tar</code></p></li><li><p>创建目录</p></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">创建数据目录 /home/data/rocketmq</span></span>
<span class="line"><span style="color:#A6ACCD;">创建日志目录 /home/logs/rocketmq</span></span></code></pre></div><ol start="4"><li>启动服务，命令如下</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker run -d --name svc-rocketmq -p 9876:9876 \\ </span></span>
<span class="line"><span style="color:#A6ACCD;">--privileged=true \\ </span></span>
<span class="line"><span style="color:#A6ACCD;">--network rocketmq \\ </span></span>
<span class="line"><span style="color:#A6ACCD;">-v  /home/logs/rocketmq:/root/logs \\ </span></span>
<span class="line"><span style="color:#A6ACCD;">-v /home/data/rocketmq:/root/store \\ </span></span>
<span class="line"><span style="color:#A6ACCD;">-e &quot;MAX_POSSIBLE_HEAP=100000000&quot; \\ </span></span>
<span class="line"><span style="color:#A6ACCD;">rocketmqinc/rocketmq:4.4.0 sh mqnamesrv autoCreateTopicEnable=true</span></span></code></pre></div><p>参数说明</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">--name svc-rocketmq：指定容器名称为svc-rocketmq，为自定义</span></span>
<span class="line"><span style="color:#A6ACCD;">--network=jky_network：为容器指定网络为jky_network，同一网络下的容器能够通过容器名称互通。</span></span>
<span class="line"><span style="color:#A6ACCD;">--privileged=true：如果使用-v映射了目录，则使用该参数获取文件访问权限</span></span></code></pre></div><ol start="5"><li>创建broker目录</li></ol><div class="language-commandline"><button title="Copy Code" class="copy"></button><span class="lang">commandline</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">创建配置文件  /home/config/broker/conf/broker.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">以下为文件内容参考（brokerIP1为宿主机ip)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">brokerClusterName=DefaultCluster </span></span>
<span class="line"><span style="color:#A6ACCD;">brokerName=broker-a </span></span>
<span class="line"><span style="color:#A6ACCD;">brokerId=0 </span></span>
<span class="line"><span style="color:#A6ACCD;">deleteWhen=04 </span></span>
<span class="line"><span style="color:#A6ACCD;">fileReservedTime=48 </span></span>
<span class="line"><span style="color:#A6ACCD;">brokerRole=ASYNC_MASTER </span></span>
<span class="line"><span style="color:#A6ACCD;">flushDiskType=ASYNC_FLUSH </span></span>
<span class="line"><span style="color:#A6ACCD;">brokerIP1=192.168.0.120</span></span></code></pre></div><ol start="6"><li>部署broker服务</li></ol><div class="language-commandline"><button title="Copy Code" class="copy"></button><span class="lang">commandline</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker run -d --name svc-rmqbroker -p 10911:10911 -p 10909:10909 \\ </span></span>
<span class="line"><span style="color:#A6ACCD;">--privileged=true \\ </span></span>
<span class="line"><span style="color:#A6ACCD;">--network rocketmq \\ </span></span>
<span class="line"><span style="color:#A6ACCD;">-v /home/logs/broker:/root/logs \\ </span></span>
<span class="line"><span style="color:#A6ACCD;">-v /home/data/broker:/root/store \\ </span></span>
<span class="line"><span style="color:#A6ACCD;">-v //home/config/broker/conf/broker.conf:/opt/rocketmq-4.4.0/conf/broker.conf \\ </span></span>
<span class="line"><span style="color:#A6ACCD;">-e &quot;NAMESRV_ADDR=svc-rocketmq:9876&quot; </span></span>
<span class="line"><span style="color:#A6ACCD;">-e &quot;MAX_POSSIBLE_HEAP=200000000&quot; \\ </span></span>
<span class="line"><span style="color:#A6ACCD;">rocketmqinc/rocketmq:4.4.0 sh mqbroker autoCreateTopicEnable=true -c /opt/rocketmq-4.4.0/conf/broker.conf</span></span></code></pre></div><p>参数说明：</p><div class="language-commandline"><button title="Copy Code" class="copy"></button><span class="lang">commandline</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">--name svc-rmqbroker：指定容器名称为svc-rmqbroker，为自定义</span></span>
<span class="line"><span style="color:#A6ACCD;">--network=jky_network：为容器指定网络为jky_network，同一网络下的容器能够通过容器名称互通。</span></span>
<span class="line"><span style="color:#A6ACCD;">--privileged=true：如果使用-v映射了目录，则使用该参数获取文件访问权限</span></span></code></pre></div><h2 id="使用文档" tabindex="-1">使用文档 <a class="header-anchor" href="#使用文档" aria-label="Permalink to &quot;使用文档&quot;">​</a></h2><h3 id="java案例" tabindex="-1">java案例 <a class="header-anchor" href="#java案例" aria-label="Permalink to &quot;java案例&quot;">​</a></h3><p>引入pom文件</p><div class="language-commandline"><button title="Copy Code" class="copy"></button><span class="lang">commandline</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;groupId&gt;org.apache.rocketmq&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;artifactId&gt;rocketmq-client&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;version&gt;4.9.0&lt;/version&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/dependency&gt;</span></span></code></pre></div><p>创建Producer或者Consumer</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">String groupName = &quot;test-group&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">DefaultMQProducer producer = new DefaultMQProducer(groupName);</span></span>
<span class="line"><span style="color:#A6ACCD;">producer.setNamesrvAddr(&quot;127.0.0.1:9876&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">producer.start();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">DefaultMQPushConsumer consumer = new DefaultMQPushConsumer(groupName);</span></span>
<span class="line"><span style="color:#A6ACCD;">consumer.setNamesrvAddr(&quot;127.0.0.1:9876&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">consumer.subscribe(&quot;test-topic&quot;, &quot;*&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">consumer.registerMessageListener(new MessageListenerConcurrently() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    @Override</span></span>
<span class="line"><span style="color:#A6ACCD;">    public ConsumeConcurrentlyStatus consumeMessage(List&lt;MessageExt&gt; msgs, ConsumeConcurrentlyContext context) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        System.out.printf(&quot;%s Receive New Messages: %s %n&quot;, Thread.currentThread().getName(), msgs);</span></span>
<span class="line"><span style="color:#A6ACCD;">        return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">consumer.start();</span></span></code></pre></div><p>发送消息或接收消息，使用Producer对象发送消息，可以调用send方法，例如：</p><div class="language-commandline"><button title="Copy Code" class="copy"></button><span class="lang">commandline</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Message msg = new Message(&quot;test-topic&quot; /* Topic */,</span></span>
<span class="line"><span style="color:#A6ACCD;">                          &quot;TagA&quot; /* Tag */,</span></span>
<span class="line"><span style="color:#A6ACCD;">                          (&quot;Hello RocketMQ &quot;).getBytes(RemotingHelper.DEFAULT_CHARSET) /* Message body */</span></span>
<span class="line"><span style="color:#A6ACCD;">                         );</span></span>
<span class="line"><span style="color:#A6ACCD;">SendResult sendResult = producer.send(msg);</span></span></code></pre></div><p>使用Consumer对象接收消息，可以调用start方法，例如：</p><div class="language-commandline"><button title="Copy Code" class="copy"></button><span class="lang">commandline</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">while (true) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Thread.sleep(1000);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>上述代码会让Consumer不停地运行，监听并接收来自“test-topic”主题的所有消息，并打印出来。</p><h3 id="python案例" tabindex="-1">python案例 <a class="header-anchor" href="#python案例" aria-label="Permalink to &quot;python案例&quot;">​</a></h3><p>引入对应的库包文件：（python3版本）RocketMQ-Python</p><p><code>pip install rocketmq-client-python</code></p><p>Apache-RocketMQ-Client-Python：Apache-RocketMQ-Client-Python是基于Python的Apache RocketMQ客户端，可以在Python 3.x和Python 2.7上运行。</p><p><code>pip install apache-rocketmq-client-python</code></p><p>一旦您已经成功安装了适当的Python客户端库，您可以按照其文档来连接到RocketMQ服务器并执行您想要的操作。例如，使用RocketMQ-Python，您可以按如下方式发送消息：</p><div class="language-commandline"><button title="Copy Code" class="copy"></button><span class="lang">commandline</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">from rocketmq.client import Producer, Message</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">producer = Producer(&#39;PID-XXX&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">producer.set_namesrv_addr(&#39;localhost:9876&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">producer.start()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">msg = Message(topic=&#39;test&#39;, body=&#39;Hello, RocketMQ!&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">result = producer.send_sync(msg)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">print(result.status, result.msg_id)</span></span></code></pre></div>`,34),p=[o];function t(c,r,i,C,A,d){return n(),a("div",null,p)}const y=s(l,[["render",t]]);export{m as __pageData,y as default};
