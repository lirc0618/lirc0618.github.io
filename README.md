# 李仁超的学术主页

网站：https://lirc0618.github.io/

## 更新内容

- `_config.yml`：姓名、简介、邮箱、头像和社交链接。
- `_pages/includes/intro.md`：个人介绍。
- `_pages/includes/news.md`：新闻。
- `_pages/includes/pub.md`：论文。
- `_pages/includes/honers.md`：荣誉。
- `_pages/includes/others.md`：教育经历。
- `images/`：网站照片。
- `assets/css/academic.css`：当前页面的自定义样式。
- `_data/navigation.yml`：顶部导航。

论文列表用 Markdown 三级标题（`- ### 论文标题`）展示英文题名，使标题单独成行；标签放在标题下一段，再接简介、作者和链接。标题字号、字重及手机端样式由 `assets/css/academic.css` 统一控制；新增条目沿用维护规范中的示例。

## 发布

在本目录运行，先查看改动，再提交需要发布的文件：

```sh
git status --short
git diff
git add _config.yml _pages images assets/css/academic.css
git commit -m "Update academic website"
git push origin main
```

GitHub Pages 从 `main` 分支的根目录自动构建并发布。

## 本地预览

安装兼容的 Ruby 和 Bundler 后：

```sh
bundle install
bundle exec jekyll serve
```

打开 http://localhost:4000。修改 `_config.yml` 后需重启预览服务。

论文列表的标题层级预览为 `_site/publication-preview/index.html`，同样是本地生成的临时静态预览，不提交，也不替代完整 Jekyll 构建验证。

## 模板来源

基于 [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) 和 Minimal Mistakes 定制。保留原项目 LICENSE 及依赖中的许可证与作者声明。
