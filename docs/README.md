---
home: true
heroImage: "/static/svg/arch.svg"
heroText: JavaFX 教程中文翻译
tagline: 📖 用 JavaFX 做出现代、美观的 UI ✨
actions:
  - text: 🐱‍🏍 开始阅读
    link: "/javafx-tutorial.html"
    type: primary
  - text: 🍺 Github
    link: "https://github.com/ice-kylin/javafx-tutorial-cn"
    type: secondary
navbar: true
footer: '<p style="font-size: 8px">
  Code licensed under MIT, Made with ❤️️ love by
  <a
    href="https://github.com/ice-kylin/javafx-tutorial-cn/graphs/contributors"
    class="grabient-text"
    target="_blank"
    rel="noopener noreferrer"
    >ALL contributors</a
  >.
</p>
'
footerHtml: true
---

## 💻 本地运行

:::: code-group
::: code-group-item Pacman

```bash{4-5}
sudo pacman -S nodejs yarn # 安装 nodejs 和 yarn
git clone https://github.com/ice-kylin/javafx-tutorial-cn.git
cd ./arch-guide
yarn install
yarn docs:dev
```

:::
::: code-group-item HomeBrew

```zsh{4-5}
brew install yarn # 安装 yarn
git clone https://github.com/ice-kylin/javafx-tutorial-cn.git
cd ./arch-guide
yarn install
yarn docs:dev
```

:::
::: code-group-item Scoop

```bat{5-6}
scoop install nodejs # 安装 nodejs
scoop install yarn # 安装 yarn
git clone https://github.com/ice-kylin/javafx-tutorial-cn.git
cd ./arch-guide
yarn install
yarn docs:dev
```

:::
::::

其它系统请参阅 [Yarn 中文文档](https://yarn.bootcss.com/docs/install/) 安装 `Yarn`。
