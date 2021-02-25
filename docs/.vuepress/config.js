const config = {
  title: 'zRain',
  base: '/blooog/',
  description: 'Just playing around',
  head: [['link', { rel: 'icon', href: '/img/logo.svg' }]],
  scss: {
    data: '@import "@theme/styles/_var"',
  },
  themeConfig: {
    logo: '/img/logo.svg',
    d_logo: '/img/darkLogo.svg',
    theme: 'light',
    nav: [
      { text: '📄 记录册', link: '/guide' },
      { text: '📂 收集', link: '/collect/' },
      {
        text: '📐 工具',
        items: [{ text: '🎨 渐进色选取', link: '/tool/colorPicker/' }],
      },
      {
        text: '🎈 娱乐',
        items: [{ text: '🌌 雪花绘画', link: '/language/english/' }],
      },
      {
        text: '🧪 实验性',
        items: [{ text: '🎵 音乐', link: '/language/chinese/' }],
      },
    ],
    collect: [
      {
        text: '前端工具',
        items: [
          {
            text: 'Flatuicolors',
            url: 'https://flatuicolors.com/',
            icon: 'https://flatuicolors.com/static/favicon.ico',
            des: '网站常用配色',
          },
          {
            text: 'Lipsum',
            url: 'https://www.lipsum.com/',
            icon: 'https://www.lipsum.com/favicon.ico',
            des: '假文',
          },
        ],
      },
      {
        text: '代码工具类',
        items: [
          {
            text: 'Carbon',
            url: 'https://carbon.now.sh/',
            des: '代码图片生成工具',
            icon: 'https://carbon.now.sh/favicon.ico',
          },
        ],
      },
    ],
  },
  additionalPages: [
    {
      path: '/guide/',
      frontmatter: {
        layout: 'Guide',
      },
    },
    {
      path: '/collect/',
      frontmatter: {
        layout: 'Collect',
      },
    },
    {
      path: '/tool/colorPicker/',
      frontmatter: {
        layout: 'ColorPicker',
      },
    },
  ],
  markdown: {
    anchor: {
      permalink: false,
    },
  },
  plugins: [
    [
      'vuepress-plugin-container',
      {
        type: 'tip',
        before: info =>
          `<div class="tip coustom_block block"><p class="title">${info}</p>\n`,
        after: '</div>\n',
        defaultTitle: '提示',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'danger',
        before: info =>
          `<div class="danger coustom_block block"><p class="title">${info}</p>\n`,
        after: '</div>\n',
        defaultTitle: '警告',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'warning',
        before: info =>
          `<div class="warning coustom_block block"><p class="title">${info}</p>\n`,
        after: '</div>\n',
        defaultTitle: '危险',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'console_error',
        before: () => `<div class="console_error coustom_block">\n`,
        after: '</div>\n',
      },
    ],
  ],
}

module.exports = config
