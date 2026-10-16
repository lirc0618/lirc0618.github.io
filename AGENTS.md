# 学术主页维护约定

- 新增或修改论文简介、中文解读、研究图片与相关发布内容前，先读 [_docs/RESEARCH_PUBLICATION_GUIDE.md](_docs/RESEARCH_PUBLICATION_GUIDE.md)。
- 修改现有四篇解读或引用其结果时，再读 [_docs/RESEARCH_SOURCE_NOTES.md](_docs/RESEARCH_SOURCE_NOTES.md)，核对实验条件与尚未统一的口径。
- 页面起稿可复用 [_docs/templates/research-article.md](_docs/templates/research-article.md)，按论文内容调整结构与深度，替换所有占位内容。
- 用户当次指令优先。默认先完成本地内容与预览；用户已明确要求 git、上传或发布时，直接完成对应范围的提交、推送与线上验证，不重复询问。
- 提交前检查工作区和暂存区，只纳入当前任务相关文件，以及用户明确要求一起提交的文件（例如 `news.md`）。保留其他已有改动，不使用 `git add .`。
- `_docs/` 是维护资料，`_site/` 是可重新生成的预览或构建输出；不要将临时预览、内部核对笔记混入公开研究页面。
- 修改目录、模板、发布或预览方式时，同步核对 README、维护规范和模板说明；内部文档由 `_config.yml` 的 `exclude` 排除于站点输出，仍保存在 Git 中，不加入 `include`。
