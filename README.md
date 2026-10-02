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

## 模板来源

基于 [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) 和 Minimal Mistakes 定制。保留原项目 LICENSE 及依赖中的许可证与作者声明。
