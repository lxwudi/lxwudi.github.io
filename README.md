# Lingxiao Fu · 付凌霄

个人学术主页，使用原生 HTML、CSS 与 JavaScript，部署在 GitHub Pages。

**网站：** https://lxwudi.github.io/

## 本地预览

在本目录运行：

```sh
python3 -m http.server 8000
```

访问 http://localhost:8000。无需安装前端依赖或执行构建。

## 修改内容

- `index.html`：个人信息、论文、项目、教育、荣誉与联系方式。中文使用 `lang-zh`，英文使用 `lang-en`，修改时同步更新两种语言。
- `styles.css`：字体、配色、布局与手机适配。
- `script.js`：语言切换、研究状态筛选与手机导航。
- `assets/portrait.jpg`：头像。
- `sitemap.xml`：更新日期。

支持 `?lang=en` 与 `?lang=zh` 链接，语言选择会保存在访问者本机。未选择时默认显示中文。

## GitHub Pages

仓库：`lxwudi/lxwudi.github.io`。

在 Settings → Pages 中选择 **Deploy from a branch**，分支 **main**，目录 **/ (root)**。提交到 main 后会自动发布。

`.nojekyll` 保证静态文件直接发布。页面不依赖外部字体、分析脚本或后端服务。

## 内容说明

根据 2026 年 11 月提供的简历与论文整理。两篇在投稿件明确标注为 Under review，录用后请及时修改。SURBN 的参数量仅指下游可训练模型；CoveTree 的加速范围来自单请求并发测试。项目中的姿态图是处理流程示意，不是实际测量或产品截图。

网站只收录公开展示所需的信息；原始简历与未公开论文 PDF 不在此仓库中。
