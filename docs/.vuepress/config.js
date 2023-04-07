const path = require("path");

module.exports = {
    title: "ChatGPT-Wiki",
    plugins: ['@vuepress/back-to-top'],
    markdown: {
        lineNumbers: false,
      },
      themeConfig: {
        repo: "CoolPlayLin/ChatGPT-Wiki",
        editLinks: true,
        docsDir: "docs",
        editLinkText: "在Github上编辑此页",
        lastUpdated: "上次更新",
        smoothScroll: true,
        },
    sidebar: [
        {
            title: "Wiki",
            path: "/",
            collapsable: false,
            sidebarDepth: 2,
            children: [
                "/ChatGPT/",
                "/EdgeGPT/"
            ]
        }
    ]
}