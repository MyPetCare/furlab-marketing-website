# Furlab Marketing Website

Furlab 的官方营销网站，采用 React + Vite + TypeScript 构建，自动部署到 Vercel。

## 🚀 技术栈

- **React 19** - UI 框架
- **Vite 6** - 构建工具
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架（通过 CDN）
- **React Router** - 路由管理
- **Vercel** - 部署平台

## 📋 项目结构

```
furlab-marketing-website/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 自动部署配置
├── components/             # React 组件
│   ├── Carousel.tsx
│   ├── CTAButton.tsx
│   ├── FaqItem.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Icons.tsx
│   ├── Layout.tsx
│   └── SeoHelper.tsx
├── pages/                  # 页面组件
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── FeaturesPage.tsx
│   ├── ResourcesPage.tsx
│   ├── ArticlePage.tsx
│   ├── ContactPage.tsx
│   ├── DownloadPage.tsx
│   ├── PrivacyPage.tsx
│   ├── TermsPage.tsx
│   └── NotFoundPage.tsx
├── constants/              # 常量和配置
│   └── content.ts
├── App.tsx                 # 应用入口
├── index.tsx              # React 入口
├── index.html             # HTML 模板
├── types.ts               # TypeScript 类型定义
├── vite.config.ts         # Vite 配置
├── vercel.json            # Vercel 部署配置
├── tsconfig.json          # TypeScript 配置
├── package.json           # 项目依赖
└── .gitignore             # Git 忽略文件
```

## 🛠️ 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看网站。

### 构建生产版本

```bash
npm run build
```

构建产物将生成在 `dist/` 目录。

### 预览生产构建

```bash
npm run preview
```

### 类型检查

```bash
npm run lint
```

## 🚢 部署到 Vercel

### 首次部署配置

#### 1. 创建 Vercel 项目

1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 点击 "Add New..." → "Project"
3. 选择 GitHub 仓库 `furlab-marketing-website`
4. 配置项目设置：
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

#### 2. 获取 Vercel 配置信息

**获取 VERCEL_TOKEN:**
1. 进入 Vercel Dashboard
2. 点击右上角头像 → Settings → Tokens
3. 点击 "Create Token"
4. 输入 Token 名称（如 "GitHub Actions"）
5. 设置过期时间并创建
6. **立即复制 Token**（只会显示一次）

**获取 VERCEL_ORG_ID 和 VERCEL_PROJECT_ID:**

方法一：通过 Vercel CLI
```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录并关联项目
vercel link

# 查看 .vercel/project.json
cat .vercel/project.json
```

方法二：通过项目设置
1. 进入项目 Settings → General
2. 在页面底部找到 "Project ID"
3. 在账户设置中找到 "Team ID"（即 ORG_ID）

#### 3. 配置 GitHub Secrets

1. 进入 GitHub 仓库
2. Settings → Secrets and variables → Actions
3. 点击 "New repository secret"
4. 添加以下三个 Secrets：

| Name | Value | 说明 |
|------|-------|------|
| `VERCEL_TOKEN` | 从 Vercel 获取的 Token | 用于 Vercel 部署认证 |
| `VERCEL_ORG_ID` | 您的 Vercel Team ID | 组织/团队 ID |
| `VERCEL_PROJECT_ID` | 项目 ID | 从 Vercel 项目设置获取 |

### 自动部署流程

配置完成后，每次 push 到 `main` 分支，将自动触发以下流程：

1. ✅ GitHub Actions 检出代码
2. ✅ 安装 Node.js 18
3. ✅ 安装项目依赖
4. ✅ 构建生产版本
5. ✅ 部署到 Vercel 生产环境

部署状态可以在仓库的 "Actions" 标签页查看。

### 手动部署（可选）

如果需要手动部署，可以使用 Vercel CLI：

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署到预览环境
vercel

# 部署到生产环境
vercel --prod
```

## 📝 内容管理

网站内容主要在 `constants/content.ts` 中配置：

- **导航和 CTA**: `content.common`
- **首页内容**: `content.home`
- **功能页面**: `content.features_page`
- **博客文章**: `content.blog.posts`
- **FAQ**: `content.contact.faqs`
- **网站配置**: `siteConfig`

修改内容后，提交到 `main` 分支即可自动部署。

## 🔧 配置说明

### Vite 配置 (`vite.config.ts`)

- **开发服务器**: 端口 3000，监听所有网络接口
- **路径别名**: `@/` 指向项目根目录
- **生产构建优化**:
  - 禁用 sourcemap（减小体积）
  - 使用 esbuild 压缩
  - React 相关库分离打包

### Vercel 配置 (`vercel.json`)

- **SPA 路由支持**: 所有路由重定向到 `index.html`
- **构建命令**: `npm run build`
- **输出目录**: `dist`

## 🎨 SEO 优化

网站已实施以下 SEO 最佳实践：

- ✅ 动态页面标题和描述
- ✅ Open Graph 标签支持
- ✅ Canonical URL 设置
- ✅ JSON-LD 结构化数据
- ✅ 语义化 HTML
- ✅ `robots.txt` 和 `sitemap.xml`

## 📄 License

Copyright © 2025 Furlab, Inc. All rights reserved.

## 🤝 贡献

如需修改网站内容或功能，请：

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 📞 联系方式

- Website: https://www.furlab.com
- Email: hello@furlab.com

---

Built with ❤️ by Furlab Team
