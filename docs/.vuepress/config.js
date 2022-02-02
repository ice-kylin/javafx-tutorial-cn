module.exports = {
  base: "/",
  head: [
    [
      "meta",
      {
        name: "title",
        content: "JavaFX 教程中文翻译",
      },
    ],
    // [
    //   "link",
    //   {
    //     rel: "icon",
    //     type: "image/png",
    //     sizes: "128x128",
    //     href: "/favicon-128x128.png",
    //   },
    // ],
    // [
    //   "link",
    //   {
    //     rel: "icon",
    //     type: "image/png",
    //     sizes: "32x32",
    //     href: "/favicon-32x32.png",
    //   },
    // ],
    // [
    //   "link",
    //   {
    //     rel: "icon",
    //     type: "image/png",
    //     sizes: "16x16",
    //     href: "/favicon-16x16.png",
    //   },
    // ],
    // [
    //   "meta",
    //   {
    //     name: "keywords",
    //     href: "archlinux 安装,archlinux 教程,archlinux 指南,archlinux,Arch Linux,Linux",
    //   },
    // ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1.0",
      },
    ],
    ["meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge,chrome=1" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://javafx.icekylin.online/" }],
    // [
    //   "meta",
    //   {
    //     property: "og:title",
    //     content: "archlinux 简明指南 — Arch Linux 安装使用教程",
    //   },
    // ],
    // [
    //   "meta",
    //   {
    //     property: "og:description",
    //     content:
    //       "本指南包含从 archlinux 安装、显卡驱动、日常软件配置，到多媒体制作、编程等你可能需要的全部内容。让 archlinux 成为你的常用系统吧！",
    //   },
    // ],
    // [
    //   "meta",
    //   {
    //     property: "og:image",
    //     content: "https://javafx.icekylin.online/image-400x400.png",
    //   },
    // ],
    // ["meta", { property: "twitter:card", content: "summary_large_image" }],
    // [
    //   "meta",
    //   { property: "twitter:url", content: "https://javafx.icekylin.online/" },
    // ],
    // [
    //   "meta",
    //   {
    //     property: "twitter:title",
    //     content: "archlinux 简明指南 — Arch Linux 安装使用教程",
    //   },
    // ],
    // [
    //   "meta",
    //   {
    //     property: "twitter:description",
    //     content:
    //       "本指南包含从 archlinux 安装、显卡驱动、日常软件配置，到多媒体制作、编程等你可能需要的全部内容。让 archlinux 成为你的常用系统吧！",
    //   },
    // ],
    // [
    //   "meta",
    //   {
    //     property: "twitter:image",
    //     content: "https://javafx.icekylin.online/image.jpg",
    //   },
    // ],
    // [
    //   "meta",
    //   {
    //     name: "baidu-site-verification",
    //     content: "code-CJJd7gooWE",
    //   },
    // ],
    // [
    //   "meta",
    //   {
    //     name: "msvalidate.01",
    //     content: "5F7926C2A8770A498525E9E64994663C",
    //   },
    // ],
    // [
    //   "meta",
    //   {
    //     name: "360-site-verification",
    //     content: "87416cd673fcfd727db0aeb869a17caf",
    //   },
    // ],
    [
      "link",
      { rel: "stylesheet", type: "text/css", href: "/static/css/font.css" },
    ],
    //     [
    //       "script",
    //       {},
    //       `var _hmt = _hmt || [];
    // (function () {
    //   var hm = document.createElement("script");
    //   hm.src = "https://hm.baidu.com/hm.js?e7059486ad3b16e21ea7058836c51b9b";
    //   var s = document.getElementsByTagName("script")[0];
    //   s.parentNode.insertBefore(hm, s);
    // })();`,
    //     ],
    //     [
    //       "script",
    //       {},
    //       `(function () {
    //   var bp = document.createElement("script");
    //   var curProtocol = window.location.protocol.split(":")[0];
    //   if (curProtocol === "https") {
    //     bp.src = "https://zz.bdstatic.com/linksubmit/push.js";
    //   } else {
    //     bp.src = "http://push.zhanzhang.baidu.com/push.js";
    //   }
    //   var s = document.getElementsByTagName("script")[0];
    //   s.parentNode.insertBefore(bp, s);
    // })();`,
    //     ],
    //     [
    //       "script",
    //       {
    //         async: "",
    //         src: "https://www.googletagmanager.com/gtag/js?id=G-MQRPJQK9SC",
    //       },
    //     ],
    //     [
    //       "script",
    //       {},
    //       `window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('js', new Date());

    // gtag('config', 'G-MQRPJQK9SC');`,
    //     ],
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "JavaFX 教程中文翻译",
      description: "JavaFX 教程中文翻译",
    },
    // "/en/": {
    //   lang: "en-US",
    //   title: "archGuide",
    //   description:
    //     "This guide contains everything you may need from archlinux installation, graphics driver, daily software configuration, multimedia production, programming, etc. Let archlinux be your common system!",
    // },
  },
  themeConfig: {
    logo: "/static/svg/arch-logo.svg",
    displayAllHeaders: true,
    sidebar: [
      "/javafx-tutorial.md",
      "/javafx-overview.md",
      "your-first-javafx-application.md",
    ],
    sidebarDepth: 1,
    smoothScroll: true,
    activeHeaderLinks: false,
    lastUpdatedText: "📑 最后更新",
    contributorsText: "🎨 参与贡献",
    repo: "https://github.com/ice-kylin/javafx-tutorial-cn",
    docsDir: "docs",
    docsBranch: "main",
    repoLabel: "🍺 Github",
    editLinks: true,
    editLinkText: "📝 编辑本文",
    notFound: ["👻 页面走丢了", "👻 这个页面不存在呢"],
    backToHome: "🏠 把我带回家",
  },
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "搜索",
          },
        },
      },
    ],
    // [
    //   "@vuepress/plugin-google-analytics",
    //   {
    //     id: "G-MQRPJQK9SC",
    //   },
    // ],
    "@vuepress/plugin-medium-zoom",
  ],
};
