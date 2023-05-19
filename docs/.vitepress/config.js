export default {
  // 指定站点根路径，例如 "/my-site"。
  base: "/vitepress-docs",
  // 指定静态资源文件夹的位置。
  assetsDir: "assets",
  dest: "public",

  title: '开发文档',
  // build: {
  //   rollupOptions: {
  //     output: {
  //       // 指定输出文件名的格式为 UTF-8
  //       chunkFileNames: '[name]-[hash].js',
  //       entryFileNames: '[name].js',
  //       assetFileNames: '[name]-[hash][extname]',
  //       // 指定生成代码的字符集为 UTF-8
  //       encoding: 'utf-8'
  //     }
  //   }
  // }
  themeConfig: {
    siteTitle: "开发文档",
    // nav: [
    //   { text: '指南', link: '/getting-started', activeMatch: '/guide' },
    //   {
    //     text: '下拉选择框',
    //     items: [
    //       { text: 'options-1', link: '/' },
    //       { text: 'options-2', link: 'http://www.baidu.com' }
    //     ]
    //   }
    // ],
    repo: 'GitHub',
    editLinks: true,
    docFooter: { prev: '上一篇', next: '下一篇' },
    sidebar: [
      {
        text: '物联基座',
        items: [
          // { text: '物联基座设备接入', link: '/wulianjizuo/物联基座设备接入' },
          // { text: '物联基座网关接入', link: '/wulianjizuo/物联基座网关接入' },
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: '数字底座',
        items: [
          { text: '数字底座接入文档', link: '/shuzidizuo/数字底座接入文档' },
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'AI引擎',
        items: [
          { text: 'AI引擎接入文档', link: '/AI/AI引擎接入文档' },
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: '数字孪生引擎',
        items: [
          // { text: '数字孪生引擎接入', link: '/shuziluanshengyinqing/数字孪生引擎接入' },
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: '云架构',
        items: [
          // { text: 'Getting Started', link: '/yunjiagou' },
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: '插件化系统搭建',
        items: [
          { text: '插件化架构', link: '/chajianhuaxitongdajian/插件化架构' },
          { text: '缓存插件', link: '/chajianhuaxitongdajian/purpose_module-main/缓存组件/缓存插件' },
          { text: '时空引擎插件', link: '/chajianhuaxitongdajian/purpose_module-main/时空引擎组件/时空引擎插件' },
          { text: '数据库插件', link: '/chajianhuaxitongdajian/purpose_module-main/数据库组件/数据库插件' },
          { text: '搜索引擎插件', link: '/chajianhuaxitongdajian/purpose_module-main/搜索引擎组件/搜索引擎插件' },
          { text: '文件存储插件', link: '/chajianhuaxitongdajian/purpose_module-main/文件存储组件/文件存储插件' },
          { text: '消息引擎插件', link: '/chajianhuaxitongdajian/purpose_module-main/消息引擎组件/消息引擎插件' },
        ],
        collapsible: true,
        collapsed: true
      }
    ],
  }
};