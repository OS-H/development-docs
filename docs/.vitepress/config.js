export default {
  // 指定站点根路径，例如 "/my-site"。
  base: "/development-docs/",
  // 指定静态资源文件夹的位置。
  assetsDir: "assets",

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
    repo: 'OS-H/development-docs',
    docsDir: 'docs',
    docsBranch: 'test-github',
    editLinks: true,
    editLinkText: '编辑文档',

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
          { text: '物联基座设备接入', link: '/wulianjizuo/物联基座设备接入' },
          { text: '物联基座网关接入', link: '/wulianjizuo/物联基座网关接入' },
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: '数字底座',
        items: [
          { text: '业务系统接入', link: '/shuzidizuo/业务系统接入' },
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: '数字孪生引擎',
        items: [
          { text: '数字孪生引擎接入', link: '/shuziluanshengyinqing/数字孪生引擎接入' },
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: '物联低代码开放应用平台基座',
        items: [
          // { text: 'Getting Started', link: '/wuliandidaima' },
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
          { text: '插件开发', link: '/chajianhuaxitongdajian/插件开发' },
        ],
        collapsible: true,
        collapsed: true
      }
    ],
  }
};