# The Anti-List System | 80条不为清单

基于段永平“不为清单”哲学构建的 AI 辅助决策系统。

![image](https://github.com/user-attachments/assets/placeholder.png)

## 核心理念 (Core Philosophy)

本项目的核心是查理·芒格和段永平推崇的“逆向思维”：
> "我只想知道我将来会死在哪里，这样我就永远不去那里。"

大多数工具教你如何成功，而本系统专注于教你如何**不犯蠢**、**不亏钱**、**不犯致命错误**。

## 功能特性 (Features)

1.  **80条不为清单 (Rules Inventory)**
    *   收录段永平关于投资、商业、教育和人生的80条“不为”准则。
    *   支持分类筛选与实时搜索。

2.  **系统分析 (System Analysis)**
    *   提炼出的底层思维模型（如：能力边界、长期主义、反人性赌博）。

3.  **决策神谕 (Decision Oracle)**
    *   **AI 驱动**：输入你的投资或商业决策。
    *   系统会扫描你的决策是否违反了80条规则中的任何一条。
    *   输出冷酷的“通过”或“拒绝”判决。

4.  **事前验尸模拟器 (Pre-Mortem Simulator)**
    *   输入一个你打算做的项目。
    *   AI 扮演来自2030年的法医，为你生成一份“尸检报告”，详细描述该项目是如何因违反规则而惨败的。

5.  **反向导师 (The Anti-Mentor)**
    *   一个基于 Google Gemini 的聊天机器人。
    *   它拒绝提供“捷径”或“建议”，只提供警告和哲学层面的批判。

## 技术栈 (Tech Stack)

*   **Frontend**: React 19, TypeScript, Tailwind CSS
*   **AI Model**: Google Gemini 2.5 Flash
*   **Design**: "Deep Space Industrial" (深空工业) / Cyberpunk Aesthetics
*   **Icons**: Lucide React

## 部署 (Deployment)

本项目设计为静态单页应用 (SPA)，可直接部署至 Vercel, Netlify 或 Cloudflare Pages。

**环境变量**:
由于使用了 Google Gemini API，你需要提供 API Key。
在构建设置中添加环境变量：
`API_KEY` = `你的_Google_Gemini_API_Key`

## 开发者 (Developer)

*   **Twitter**: [@uschan](https://x.com/uschan)
*   **Blog**: [WildSalt](https://wildsalt.me/)

---
*Success is not about being smarter. It is about being consistently not stupid.*
