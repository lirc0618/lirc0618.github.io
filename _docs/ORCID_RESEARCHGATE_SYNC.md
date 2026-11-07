# ORCID 与 ResearchGate 同步底稿

核对日期：2026-10-16。此文件是内部操作资料，不作为公开研究页面。

## 账号与已核对的公开记录

- ORCID：https://orcid.org/0009-0008-7293-2583
- ResearchGate：https://www.researchgate.net/profile/Li-Renchao
- ORCID 公共 API 当次返回 1 个作品组：AsianHOST 2023。不能据此排除账号内另有非公开记录。
- ResearchGate 公开主页当次显示 1 篇论文，同样是 AsianHOST 2023。
- 两个平台均应保留现有 AsianHOST 条目，不重复创建。

AsianHOST 已确认书目信息：

- 题名：A Lightweight Authentication Scheme with PE-Based Unclonable Label
- 作者顺序：Renchao Li; Zhen Weng; Aijiao Cui; Gang Qu
- 会议：2023 Asian Hardware Oriented Security and Trust Symposium (AsianHOST)
- 年份：2023；页码：1–6
- DOI：https://doi.org/10.1109/AsianHOST59942.2023.10409427
- ResearchGate 现有条目：https://www.researchgate.net/publication/377669259_A_Lightweight_Authentication_Scheme_with_PE-Based_Unclonable_Label

## 待补入的四篇

作者本次回复按“四篇均已录用待出版”处理。题名、作者顺序与会议简称来自 `_pages/includes/pub.md`；不把会议届次当作已确认的出版日期。

### TIFS

- Title: Printed Electronics Based Optical Unclonable Label for Artificial Intelligence Authentication
- Authors: Renchao Li; Aijiao Cui; Mingyu Li; Zijie Yan; Chip-Hong Chang
- Journal: IEEE Transactions on Information Forensics and Security
- Type: Journal article
- Status: Accepted for publication; forthcoming
- Publication year, volume, issue, pages, DOI: 留空，待正式书目确认。

网站目前的“TIFS 2025”与本次待出版状态、2026 年录用新闻存在待统一口径，不将 2025 自动填入外部账号。本任务尚未修改网站。

### EMPUF

- Title: EMPUF: A Leakage-Controlled Pre-Fabrication Benchmark for PCB Spectral Fingerprints
- Authors: Renchao Li; Hao Lu; Xiangyu Wang
- Conference: ASP-DAC 2027
- Type: Conference paper
- Status: Accepted for publication; forthcoming
- DOI: 10.1145/3840404.3848174（来自本地稿件；作者本轮指出已分配 DOI，现保留在导入文件中）。
- Publication date, pages: 留空，待正式书目确认。

2026-10-16 再查 Crossref 返回 404；DOI.org Handle API 同样返回 404，responseCode 为 100。当前未查到公开解析记录，不能据此否认稿件已获分配的 DOI，也不能认定已经正式出版。先前导入稿遗漏此 DOI，已按作者本轮纠正补入。ORCID 的 Add DOI 自动抓取当前可能失败；可用 BibTeX 或手动填写标识符，并保留待出版状态。

### Device-wise calibration

- Title: Device-wise Conformal False-Alarm Calibration for Federated IoT Intrusion Detection
- Authors: Renchao Li; Aijiao Cui
- Conference: PRICAI 2026
- Type: Conference paper
- Status: Accepted for publication; forthcoming
- Publication date, pages, DOI: 留空，待正式书目确认。

### Transformer KV-cache fingerprints

- Title: How Model Transformations Affect Fingerprints in Transformer Key–Value Caches
- Authors: Xiangyu Wang; Hao Lu; Renchao Li
- Conference: CIIS 2026
- Type: Conference paper
- Status: Accepted for publication; forthcoming
- Publication date, pages, DOI: 留空，待正式书目确认。

## ORCID 操作

1. 登录 https://orcid.org/my-orcid ，先检查包括非公开作品在内的完整列表，按题名和作者排除重复。
2. Works → +Add → Add BibTeX，选择本目录的 `orcid-forthcoming.bib`。
3. 在导入预览逐条检查题名、作者、作品类型、期刊/会议，以及 citation 中的 forthcoming 注记。缺失字段可手工补充；出版日期当前留空。
4. BibTeX 字段映射有限，不假定 `note` 会显示为独立的出版状态。若预览没有保留待出版说明，手工检查/编辑 citation，确认包含 `Accepted for publication; forthcoming` 后再保存；不要把正式题名改成带状态说明的标题。
5. 检查每项可见性与账号既有偏好一致，保存后核对新增 4 篇，AsianHOST 未重复。无标识符的记录未必自动合并，故导入前必须排重。
6. 正式出版后在现有记录补入 DOI、出版日期、卷页，避免另建重复记录。

如果导入器无法接受缺少出版日期的条目，改用 Add manually；不为了通过导入而虚构日期。本文件尚未通过登录态导入预览验证。

## ResearchGate 操作

1. 登录后按完整英文题名搜索四篇；存在条目时使用认领/关联功能，复用已有页面。
2. 缺失条目再通过 Add new 创建，按实际界面选择期刊论文或会议论文。若界面提供 publication status，选择 Accepted / In press / Forthcoming 中含义相符的选项。
3. 使用上面的英文题名和完整作者顺序，将自己的作者名关联至现有 Li Renchao 账号。若界面没有状态字段，在允许编辑的描述中注明 `Accepted for publication; forthcoming`；若流程强制要求未确认的日期，先保留待处理。
4. 仅凭录用状态不自动将论文标为 preprint，也不生成新的 ResearchGate DOI。
5. 本次先准备书目条目。公开全文前分别核对本地 PDF 的版本及其适用的共享许可；主页已放 PDF 不等于可在 ResearchGate 使用同样的上传条件。
6. 保存后检查 Research 列表、作者关联、待出版说明及重复条目。

## 当前完成情况

- 已核对两平台公开记录，已整理四篇书目和 ORCID 导入文件；EMPUF DOI 已按作者纠正补入，公开解析仍未核实。
- 作者本轮确认 ORCID 已更新完成（由用户在 Edge 中操作；尚未独立核验最终记录）。
- ResearchGate 尚待补入四篇。Tabbit 稳定 CLI 调用失败；随后 Edge 连接检查未发现可连接浏览器，因此当前由用户在 Edge 中操作、助手按实际页面指导。

## 来源

- ORCID 公开记录 API：https://pub.orcid.org/v3.0/0009-0008-7293-2583/works
- AsianHOST Crossref 元数据：https://api.crossref.org/works/10.1109/AsianHOST59942.2023.10409427
- ORCID 导入说明：https://support.orcid.org/hc/en-us/articles/360006894794-Importing-works-from-a-BibTeX-file
- ORCID 添加作品说明：https://support.orcid.org/hc/en-us/articles/360006973133-Add-works-to-your-ORCID-record
- ResearchGate 添加/认领说明：https://help.researchgate.net/research-and-publications/how-to-add-research
- TIFS 合作者主页（列为 Accepted）：https://www3.ntu.edu.sg/home/echchang/home.htm
