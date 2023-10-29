import { defineConfig } from 'vitepress'
import { DefaultTheme } from "vitepress/theme"
import { readdirSync } from "node:fs"
import { env } from "node:process"

type SidebarItem = DefaultTheme.SidebarItem

function generateSidebar(path: string): SidebarItem[] {
    const Sidebars: SidebarItem[] = []
    readdirSync("docs/" + path).forEach((value) => {
        if (value.includes("index")) {
            Sidebars.unshift({
                text: "概述",
                link: `/${path}/${value}`
            })
        } else if (value.includes("README")) {

        } else {
            Sidebars.push({
                text: value.replace(".md", ""),
                link: `/${path}/${value}`,
            })
        }
    })
    return Sidebars
}

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    title: "ChatGPT Wiki",
    description: "各种项目的非官方中文翻译",
    themeConfig: {
        sidebar: [
            {
                text: "主页",
                items: generateSidebar("Home")
            },
            {
                text: "ChatGPT",
                items: generateSidebar("ChatGPT")
            },
            {
                text: "EdgeGPT",
                items: generateSidebar("EdgeGPT")
            }
        ],
        algolia: {
            apiKey: env.API_KEY as string,
            appId: env.APP_ID as string,
            indexName: "chatgptwiki",
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present ChatGPT-Wiki Project.',
        },
        nav: [
            {
                text: "关于", items: [
                    { text: "帮助我们翻译", link: "https://crowdin.com/project/chatgpt-wikis" }
                ]
            }
        ]
    },
})
