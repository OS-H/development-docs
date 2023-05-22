import{_ as s,c as n,o as a,N as e}from"./chunks/framework.719e9f09.js";const l="/vitepress-docs/assets/img.0830ce32.png",y=JSON.parse('{"title":"文件存储插件","description":"","frontmatter":{},"headers":[],"relativePath":"chajianhuaxitongdajian/purpose_module-main/文件存储组件/文件存储插件.md"}'),o={name:"chajianhuaxitongdajian/purpose_module-main/文件存储组件/文件存储插件.md"},p=e(`<h1 id="文件存储插件" tabindex="-1">文件存储插件 <a class="header-anchor" href="#文件存储插件" aria-label="Permalink to &quot;文件存储插件&quot;">​</a></h1><h2 id="版本" tabindex="-1">版本 <a class="header-anchor" href="#版本" aria-label="Permalink to &quot;版本&quot;">​</a></h2><p>2023.05.04</p><h2 id="部署过程" tabindex="-1">部署过程 <a class="header-anchor" href="#部署过程" aria-label="Permalink to &quot;部署过程&quot;">​</a></h2><ol><li><p>将镜像文件导入到服务器（linux系统） 比如镜像包名为<code>minio.tar</code></p></li><li><p>镜像文件所在目录执行下列命令，加载镜像 <code>docker load -i minio.tar</code></p></li><li><p>创建目录</p></li></ol><div class="language-commandline"><button title="Copy Code" class="copy"></button><span class="lang">commandline</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">建数据目录 /home/data/minio</span></span>
<span class="line"><span style="color:#A6ACCD;">创建配置文件 /home/config/minio</span></span>
<span class="line"><span style="color:#A6ACCD;">配置文件根据自身需求书写</span></span></code></pre></div><ol start="4"><li>启动服务，命令参考如下：</li></ol><div class="language-commandline"><button title="Copy Code" class="copy"></button><span class="lang">commandline</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker run -d -p 19100:9000 -p 19101:9001 --name sz-minio \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e &quot;MINIO_ROOT_USER=admin&quot; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e &quot;MINIO_ROOT_PASSWORD=123456&quot; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e &quot;MINIO_SERVER_URL=http://sz-minio:9000  &quot; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /home/data/minio:/data \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /home/config/minio:/root/.minio \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--network=jky_network \\</span></span>
<span class="line"><span style="color:#A6ACCD;">minio/minio server  /data --console-address &quot;:9001&quot; -address &quot;:9000&quot;</span></span></code></pre></div><p>参数说明：</p><div class="language-commandline"><button title="Copy Code" class="copy"></button><span class="lang">commandline</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">--name svc-minio：指定容器名称为svc-minio，为自定义</span></span>
<span class="line"><span style="color:#A6ACCD;">--network=jky_network：为容器指定网络为jky_network，同一网络下的容器能够通过容器名称互通。</span></span>
<span class="line"><span style="color:#A6ACCD;">9000为客户端连接端口    9001为web管理端口</span></span></code></pre></div><p>启动成功后，可通过 {ip}:19101 访问minio <img src="`+l+`" alt="img.png"></p><h2 id="使用文档" tabindex="-1">使用文档 <a class="header-anchor" href="#使用文档" aria-label="Permalink to &quot;使用文档&quot;">​</a></h2><p>上述平台部署完毕后，可以在平台界面进行数据的上传管理等操作，以下介绍程序端对接流程：</p><h3 id="java案例" tabindex="-1">java案例: <a class="header-anchor" href="#java案例" aria-label="Permalink to &quot;java案例:&quot;">​</a></h3><p>引入pom文件依赖</p><div class="language-commandline"><button title="Copy Code" class="copy"></button><span class="lang">commandline</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;groupId&gt;io.minio&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;artifactId&gt;minio&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;version&gt;RELEASE.2020-07-02T01-25-59Z&lt;/version&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/dependency&gt;</span></span></code></pre></div><p>.创建MinIO客户端对象：使用以下代码创建一个MinIO客户端对象：</p><div class="language-commandline"><button title="Copy Code" class="copy"></button><span class="lang">commandline</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import io.minio.MinioClient;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">public class MinioExample {</span></span>
<span class="line"><span style="color:#A6ACCD;">  public static void main(String[] args) throws Exception {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 使用MinIO服务器的URL、Access Key和Secret Key来创建一个MinIO客户端对象</span></span>
<span class="line"><span style="color:#A6ACCD;">    MinioClient minioClient = new MinioClient(&quot;http://localhost:9000&quot;, &quot;YOUR-ACCESSKEYID&quot;, &quot;YOUR-SECRETACCESSKEY&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 检查MinIO服务器是否可以连接</span></span>
<span class="line"><span style="color:#A6ACCD;">    boolean found = minioClient.bucketExists(&quot;mybucket&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (found) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      System.out.println(&quot;mybucket exists&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      System.out.println(&quot;mybucket does not exist&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>执行操作：一旦你有了MinIO客户端对象，你就可以执行各种操作，如创建桶、上传文件、下载文件等。以下是一些示例：</p><div class="language-commandline"><button title="Copy Code" class="copy"></button><span class="lang">commandline</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 创建一个新的桶</span></span>
<span class="line"><span style="color:#A6ACCD;">minioClient.makeBucket(&quot;mybucket&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 上传文件</span></span>
<span class="line"><span style="color:#A6ACCD;">minioClient.putObject(&quot;mybucket&quot;, &quot;myobject&quot;, &quot;/path/to/myfile&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 下载文件</span></span>
<span class="line"><span style="color:#A6ACCD;">minioClient.getObject(&quot;mybucket&quot;, &quot;myobject&quot;, &quot;/path/to/downloaded/file&quot;);</span></span></code></pre></div><h3 id="python案例" tabindex="-1">python案例 <a class="header-anchor" href="#python案例" aria-label="Permalink to &quot;python案例&quot;">​</a></h3><p>安装对应的包<code>pip install minio</code></p><p>创建minio对象</p><div class="language-commandline"><button title="Copy Code" class="copy"></button><span class="lang">commandline</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">from minio import Minio</span></span>
<span class="line"><span style="color:#A6ACCD;">from minio.error import ResponseError</span></span>
<span class="line"><span style="color:#A6ACCD;"># 初始化Minio对象</span></span>
<span class="line"><span style="color:#A6ACCD;">client = Minio(&#39;play.min.io&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">               access_key=&#39;ACCESS_KEY&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">               secret_key=&#39;SECRET_KEY&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">               secure=True)</span></span></code></pre></div><p>列出存储桶</p><div class="language-commandline"><button title="Copy Code" class="copy"></button><span class="lang">commandline</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">buckets = client.list_buckets()</span></span>
<span class="line"><span style="color:#A6ACCD;">for bucket in buckets:</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(bucket.name, bucket.creation_date)</span></span></code></pre></div><p>这段代码将打印所有存储桶的名称和创建日期。</p><p>创建存储桶</p><div class="language-commandline"><button title="Copy Code" class="copy"></button><span class="lang">commandline</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">try:</span></span>
<span class="line"><span style="color:#A6ACCD;">    client.make_bucket(&quot;mybucket&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">except ResponseError as err:</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(err)</span></span></code></pre></div><p>上传文件</p><div class="language-commandline"><button title="Copy Code" class="copy"></button><span class="lang">commandline</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">try:</span></span>
<span class="line"><span style="color:#A6ACCD;">    client.fput_object(&#39;mybucket&#39;, &#39;myfile.txt&#39;, &#39;/path/to/local/file&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">except ResponseError as err:</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(err)</span></span></code></pre></div><p>获取下载文件</p><div class="language-commandline"><button title="Copy Code" class="copy"></button><span class="lang">commandline</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">try:</span></span>
<span class="line"><span style="color:#A6ACCD;">    client.fget_object(&#39;mybucket&#39;, &#39;myfile.txt&#39;, &#39;/path/to/local/file&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">except ResponseError as err:</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(err)</span></span></code></pre></div><p>这段代码将从名为“mybucket”的存储桶中获取名为“myfile.txt”的对象，并将其下载到本地文件/path/to/local/file中。</p>`,34),t=[p];function i(c,r,C,m,d,A){return a(),n("div",null,t)}const h=s(o,[["render",i]]);export{y as __pageData,h as default};
