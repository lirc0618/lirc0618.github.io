# 李仁超的学术主页

网站：https://lirc0618.github.io/

英文首页使用 `/`，中文首页使用 `/zh/`。右上角 `中文 | EN` 可切换语言；在首页通过导航定位栏目后，切换时保留该栏目。页面不按浏览器语言自动跳转，现有英文首页链接继续有效。

## 更新内容

- `_config.yml`：姓名、简介、邮箱、头像和社交链接。
- `_pages/includes/intro.md`、`_pages/includes/zh/intro.md`：英文、中文个人介绍。
- `_data/news.yml`：共用新闻日期与中英文文案。
- `_data/service.yml`：共用期刊和会议审稿经历；`_pages/includes/service.md` 渲染“学术服务 / Academic Service”分区，标题译文在 `_data/locales.yml`。分区位于论文之后，双语导航与语言切换均支持 `#service`。
- `_data/publications.yml`：共用论文题名、作者、发表信息、PDF 和解读路径，以及中英文短简介与标签。
- `_pages/research/`：独立中文解读，使用固定的 `/research/<slug>/` 链接。
- `assets/pdf/`：论文全文 PDF。
- `_pages/includes/honers.md`、`_pages/includes/en/honers.md`：中文、英文荣誉（新增条目时同步两份；原稿未确认的日期保留待补）。
- `_pages/includes/others.md`、`_pages/includes/zh/others.md`：英文、中文教育经历。
- `_data/locales.yml`：导航以外的界面文字、研究标签和中文侧栏。英文侧栏继续使用 `_config.yml`。
- `images/`：网站照片；`images/research/<slug>/` 保存各论文的图像素材。
- `assets/fonts/`：首页与解读页使用的 Inter、Newsreader 字体文件（`academic.css` 通过 `@font-face` 引用，`head.html` 预加载）。
- `_includes/home-hero.html`、`_includes/home-sidebar.html`：首页首屏与侧栏，由 `academic-home.html`/`sidebar.html` 在 `page.homepage` 时引入。
- `assets/css/academic.css`：学术主页与首页改版样式（编辑式排版：衬线标题、卡片化论文列表、分区编号）。
- `assets/css/research.css`：中文解读共用样式，与首页同一套字体和配色。
- `_data/navigation.yml`：英文 `main` 与中文 `zh-CN` 顶部导航。
- `_pages/about.md`、`_pages/about-zh.md`：首页入口，共用 `_includes/academic-home.html`。
- `_docs/`：写作规范、四篇工作的依据与模板。
- `AGENTS.md`：后续代理的维护要求入口。

## 首页改版（2026-11-05）

首页采用编辑式视觉：Newsreader 衬线标题、Inter 正文、暖白底与深青色强调色。`_includes/home-hero.html` 渲染首屏（姓名、研究简介、邮箱/Scholar/ORCID/GitHub 按钮与头像），`_includes/home-sidebar.html` 渲染左侧“研究方向 / 联系方式”。六个分区（关于我、新闻、论文、学术服务、荣誉、教育）由 `_includes/academic-home.html` 统一编号，中英文共用，标题文字在 `_data/locales.yml`。荣誉分区拆分为中文 `_pages/includes/honers.md` 与英文 `_pages/includes/en/honers.md`，新增条目时两份同步、未确认日期保留待补。`_pages/includes/` 为局部模板，已在 `_config.yml` 排除，不再单独输出为页面。

## 新增论文与中文解读

沿用本次四篇工作的已确认规范，先阅读 [论文简介与中文解读维护规范](_docs/RESEARCH_PUBLICATION_GUIDE.md)。文档包含首页简介、常规/重点工作篇幅、贡献与证据表达、页面版式、图表、本地预览和 GitHub 发布验收要求。

- [四篇论文的写作依据与数据口径](_docs/RESEARCH_SOURCE_NOTES.md)：修改现有稿件时核对，新增研究时继续补充。
- [中文解读起稿模板](_docs/templates/research-article.md)：复制到 `_pages/research/` 并替换占位内容。
- [AGENTS.md](AGENTS.md)：供后续代理自动发现上述约定。

论文 PDF 放在 `assets/pdf/`，中文稿放在 `_pages/research/`，图片放在 `images/research/<slug>/`；首页入口与两种语言的简介统一在 `_data/publications.yml` 维护，`_pages/includes/pub.md` 只负责渲染。普通工作讲清主要问题与证据，重点工作按实际贡献深入展开。默认先本地预览，明确要求 git 或发布后再提交并验证线上页面。

新增论文只添加一条数据，填写 `summary.en` 和 `summary.zh-CN`、`badges.en` 和 `badges.zh-CN`；题名、作者、年份及资源路径只维护一次。论文题名保留正式英文，已有长篇解读保留中文，两种首页均标明 `中文解读`。中文解读的返回入口和顶部导航通向中文首页；`EN` 通向英文首页，不表示该篇解读已有英文版。

新闻同样只添加一条数据：`date` 为共用日期，`text.en` 与 `text.zh-CN` 为对应文案。修改新闻或论文信息时同时检查两种首页；不要在英文版本中省略中文原稿的实验条件或改变数字含义。

论文渲染模板用 Markdown 三级标题（`- ### 论文标题`）展示英文题名，使标题单独成行；标签放在标题下一段，再接简介、作者和链接。标题字号、字重及手机端样式由 `assets/css/academic.css` 统一控制；新增数据沿用维护规范中的示例。

## 更新并上传网站

默认先本地修改和预览；明确要求 git、上传或发布后再提交推送。下面的命令按实际修改选择使用，不能只因为文件存在就一起提交。

### 仅修改已有论文列表或新闻

在 VS Code 中打开本项目的终端，确认当前位置是项目根目录（能看到 `README.md`），保存文件后执行：

```sh
# 1. 查看这两个文件改了什么
git status --short -- _data/publications.yml _data/news.yml
git diff -- _data/publications.yml _data/news.yml

# 2. 只暂存这次要上传的文件
git add -- _data/publications.yml _data/news.yml
git diff --cached --name-only
git diff --cached --check

# 3. 确认上一步列出的文件正确后，提交并推送
git commit -m "Update publications and news"
git push origin main
```

如果只更新其中一个文件，就从命令中删去另一个路径。更新个人介绍、荣誉或其他内容时，把路径换成上方“更新内容”列出的对应文件；提交说明也可以改成这次更新的内容。不要直接使用 `git add .`，本地可能还有未准备上传的改动和以 `._` 开头的系统文件。

### 新增或修改独立中文解读

除 `_data/publications.yml` 外，还要纳入本次实际修改的中文稿、PDF 和图片，否则线上可能只有入口或出现资源缺失。以下使用现有 TIFS 路径演示；新增研究时替换为该工作的真实路径：

```sh
git status --short
git diff -- _data/publications.yml _pages/research/pe-ai-tifs.md
git add -- _data/publications.yml _pages/research/pe-ai-tifs.md "assets/pdf/Printed Electronics Based Optical Unclonable Label for Artificial Intelligence Authentication.pdf" images/research/pe-ai-tifs/
git diff --cached --name-only
git diff --cached --check
git commit -m "Update research introduction"
git push origin main
```

如果本次修改了共用样式，再将 `assets/css/research.css` 加入暂存；需要同步新闻时，再加入 `_data/news.yml`。修改维护规范时，把对应的 `_docs/` 文件、`AGENTS.md`、README 或必要配置改动纳入本次已确认的提交范围，逐项检查差异，不夹带其他已有修改。

`git diff --cached --name-only` 如列出了不想上传的文件，先执行 `git restore --staged -- 文件路径` 将其移出暂存区，再提交。

### 发布后检查

GitHub Pages 从 `main` 分支根目录构建网站。推送成功后，在 [Actions](https://github.com/lirc0618/lirc0618.github.io/actions) 中确认本次提交的构建和部署成功，再打开网站检查首页简介、要求同步的新闻、每篇解读、图片及 PDF。推送完成不等于页面已经上线；若看到旧内容，可刷新或在网址添加 `?v=提交短编号` 避开缓存。

完整验收要求见 [维护规范](_docs/RESEARCH_PUBLICATION_GUIDE.md)。

## 本地预览

安装兼容的 Ruby 和 Bundler 后：

```sh
bundle install
bundle exec jekyll serve
```

打开 http://localhost:4000。在 Git Bash 或其他兼容 shell 中，`bash run_server.sh` 使用相同的启动命令。修改 `_config.yml` 后需重启预览服务。

本轮首页与五篇中文解读已使用 Jekyll 3.9.0（与 `Gemfile.lock` 的 github-pages 215 一致）在本地构建到 `_site/redesign-preview/`，包含实际模板、样式、字体和资源输出。构建产物不提交，新检出项目时需重新生成；可临时运行 `python -m http.server 4000 --bind 127.0.0.1 --directory _site/redesign-preview` 查看英文 `/`、中文 `/zh/` 及五篇中文解读。该构建只代表本地核对结果，不代表已部署至 GitHub Pages。

没有 Ruby/Jekyll 时，可生成静态内容预览；历史遗留的 `_site/research-preview/index.html`、`_site/publication-preview/index.html` 和 `_site/bilingual-preview/` 是早期临时产物，新检出项目时不保证存在，也不能替代完整 Jekyll 构建验证。

需要长期保留的规范与核对记录放在 `_docs/`，不要只存在预览目录。`_docs/`、`AGENTS.md` 与 `_pages/includes/`（局部模板）在 `_config.yml` 中排除于站点输出，但应随相关维护任务保存在 Git 仓库中；`_site/` 则继续由 `.gitignore` 排除。

## 模板来源

基于 [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) 和 Minimal Mistakes 定制。保留原项目 LICENSE 及依赖中的许可证与作者声明。
