import{_ as s,c as n,o as a,N as l}from"./chunks/framework.719e9f09.js";const o="/vitepress-docs/assets/img.3503eaa5.png",D=JSON.parse('{"title":"数据库插件","description":"","frontmatter":{},"headers":[],"relativePath":"chajianhuaxitongdajian/purpose_module-main/数据库组件/数据库插件.md"}'),e={name:"chajianhuaxitongdajian/purpose_module-main/数据库组件/数据库插件.md"},p=l(`<h1 id="数据库插件" tabindex="-1">数据库插件 <a class="header-anchor" href="#数据库插件" aria-label="Permalink to &quot;数据库插件&quot;">​</a></h1><h2 id="版本" tabindex="-1">版本 <a class="header-anchor" href="#版本" aria-label="Permalink to &quot;版本&quot;">​</a></h2><p>mysql 8.0.33</p><h2 id="部署过程" tabindex="-1">部署过程： <a class="header-anchor" href="#部署过程" aria-label="Permalink to &quot;部署过程：&quot;">​</a></h2><ol><li><p>将镜像文件导入到服务器（linux系统） ,比如镜像包名为mysql8033.tar</p></li><li><p>镜像文件所在目录执行下列命令，加载镜像 <code>docker load -i mysql8033.tar</code></p></li><li><p>创建目录</p></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">创建数据目录 /home/data/mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">创建配置文件 /home/config/mysql/my.cnf</span></span>
<span class="line"><span style="color:#A6ACCD;">配置文件my.cnf内容根据自身需求书写</span></span></code></pre></div><ol start="4"><li>启动服务，命令如下：</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker run --name svc-mysql -p 3306:3306 -e MYSQL_ROOT_USERNAME=root -e MYSQL_ROOT_PASSWORD=123456 -v /home/data/mysql:/var/lib/mysql -v /home/config/mysql/my.cnf:/etc/mysql/my.cnf --network=jky_network -d mysql:8.0.33</span></span></code></pre></div><p>参数说明：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">--name svc-mysql：指定容器名称为svc-mysql，为自定义</span></span>
<span class="line"><span style="color:#A6ACCD;">--network=jky_network：为容器指定网络为jky_network，同一网络下的容器能够通过容器名称互通。</span></span></code></pre></div><h2 id="使用文档" tabindex="-1">使用文档 <a class="header-anchor" href="#使用文档" aria-label="Permalink to &quot;使用文档&quot;">​</a></h2><p>通过上面部署命令启动完毕的mysql，来进行mysql相关业务能力调用。</p><ol><li>连接mysql服务器 当MySQL服务器启动后，你需要连接到它才能执行任何操作。你可以使用MySQL提供的客户端工具来连接MySQL服务器。在Windows中，你可以使用MySQL Workbench或者命令行客户端；在Linux中，你可以使用命令行客户端。 <code>mysql -h host -u user -p</code></li></ol><p>在windows中，可以直接通过诸如navicat相关工具直接连接 <img src="`+o+`" alt="img.png"></p><ol start="2"><li>创建数据库<code>mysql&gt; CREATE DATABASE dbname;</code></li><li>更新数据<code>mysql&gt; UPDATE tablename SET column1 = value1, column2 = value2 WHERE condition; </code></li><li>常见代码集成demo</li></ol><h3 id="java" tabindex="-1">java： <a class="header-anchor" href="#java" aria-label="Permalink to &quot;java：&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">spring:</span></span>
<span class="line"><span style="color:#A6ACCD;">  application:</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: nnnn</span></span>
<span class="line"><span style="color:#A6ACCD;">  datasource:</span></span>
<span class="line"><span style="color:#A6ACCD;">    driver-class-name: com.mysql.jdbc.Driver</span></span>
<span class="line"><span style="color:#A6ACCD;">    username: root</span></span>
<span class="line"><span style="color:#A6ACCD;">    url: jdbc:mysql://svc-mysql:3306/tdb?characterEncoding=utf-8&amp;characterSetResults=utf8&amp;autoReconnect=true&amp;useSSL=false&amp;allowMultiQueries=true</span></span>
<span class="line"><span style="color:#A6ACCD;">    password: iii</span></span></code></pre></div><h3 id="python" tabindex="-1">python： <a class="header-anchor" href="#python" aria-label="Permalink to &quot;python：&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import pymysql</span></span>
<span class="line"><span style="color:#A6ACCD;">DBHOST = &quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">DBPORT =</span></span>
<span class="line"><span style="color:#A6ACCD;">DBUSER = &quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">DBPWD = &quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">DBNAME = &quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">DBCHAR = &quot;utf8mb4&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Mysql(object):</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">MYSQL数据库对象，负责产生数据库连接 , 此类中的连接采用连接池实现获取连接对象：conn = Mysql.getConn()</span></span>
<span class="line"><span style="color:#A6ACCD;">释放连接对象;conn.close()或del conn</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">#连接池对象</span></span>
<span class="line"><span style="color:#A6ACCD;">__pool = None</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    def __init__(self):</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 数据库构造函数，从连接池中取出连接，并生成操作游标</span></span>
<span class="line"><span style="color:#A6ACCD;">        self._conn = Mysql.__getConn()</span></span>
<span class="line"><span style="color:#A6ACCD;">        self._cursor = self._conn.cursor()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    @staticmethod</span></span>
<span class="line"><span style="color:#A6ACCD;">    def __getConn():</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        @summary: 静态方法，从连接池中取出连接</span></span>
<span class="line"><span style="color:#A6ACCD;">        @return MySQLdb.connection</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        if Mysql.__pool is None:</span></span>
<span class="line"><span style="color:#A6ACCD;">            __pool = PooledDB(</span></span>
<span class="line"><span style="color:#A6ACCD;">                creator=mysql_config.DB_CREATOR,</span></span>
<span class="line"><span style="color:#A6ACCD;">                mincached=mysql_config.DB_MIN_CACHED,</span></span>
<span class="line"><span style="color:#A6ACCD;">                maxcached=mysql_config.DB_MAX_CACHED,</span></span>
<span class="line"><span style="color:#A6ACCD;">                maxshared=mysql_config.DB_MAX_SHARED,</span></span>
<span class="line"><span style="color:#A6ACCD;">                maxconnections=mysql_config.DB_MAX_CONNECYIONS,</span></span>
<span class="line"><span style="color:#A6ACCD;">                blocking=mysql_config.DB_BLOCKING,</span></span>
<span class="line"><span style="color:#A6ACCD;">                maxusage=mysql_config.DB_MAX_USAGE,</span></span>
<span class="line"><span style="color:#A6ACCD;">                setsession=mysql_config.DB_SET_SESSION,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                host=mysql_config.DBHOST,</span></span>
<span class="line"><span style="color:#A6ACCD;">                port=mysql_config.DBPORT,</span></span>
<span class="line"><span style="color:#A6ACCD;">                user=mysql_config.DBUSER,</span></span>
<span class="line"><span style="color:#A6ACCD;">                passwd=mysql_config.DBPWD,</span></span>
<span class="line"><span style="color:#A6ACCD;">                db=mysql_config.DBNAME,</span></span>
<span class="line"><span style="color:#A6ACCD;">                use_unicode=False,</span></span>
<span class="line"><span style="color:#A6ACCD;">                charset=mysql_config.DBCHAR,</span></span>
<span class="line"><span style="color:#A6ACCD;">                cursorclass=DictCursor)</span></span>
<span class="line"><span style="color:#A6ACCD;">        return __pool.connection()</span></span></code></pre></div>`,19),c=[p];function t(i,r,C,A,y,m){return a(),n("div",null,c)}const u=s(e,[["render",t]]);export{D as __pageData,u as default};
