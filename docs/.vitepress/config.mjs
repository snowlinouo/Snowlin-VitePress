import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Snowlin-VitePress/",
  title: "SnowLin",
  description: "測試網站",
  head: [["link", { rel: "icon", href: "/imgs/logo.png" }]],
  themeConfig: {
    outlineTitle: '本頁目錄',
    outline: [2, 6],
    lastUpdatedText: '更新日期',
    logo: '/imgs/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首頁', link: '/' },
      { text: '範例', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '演示 1',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '演示 2',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜尋',
            buttonAriaLabel: '搜尋',
          },
          modal: {
            noResultsText: '無法找到相關項目',
            resetButtonTitle: '清除查詢條件',
            footer: {
              selectText: '選擇',
              navigateText: '切換',
            },
          },
        },
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/snowlinouo/' },
      { icon: 'youtube', link: 'https://www.youtube.com/c/nightsnowlin' },
      { icon: 'facebook', link: 'https://www.facebook.com/SnowLinOuO' },
      { icon: 'discord', link: 'https://discord.gg/W7P6UFQ' },
      { icon: 'x', link: 'https://twitter.com/nightsnowlin' },
      
    ],

    docFooter: {
      prev: '上一頁',
      next: '下一頁',
    },

    footer: {
      copyright: "Copyright @ 2024 SnowLin",
    }
  }
})
