# 极简航海日志: 九疑山诗词单页

##- [x] 编写 TDD 首个测试用例 (PoemPage.test.tsx) ✅
- [x] 实现全屏固定背景与动态遮罩 ✅
- [x] 实现诗词竖向排版与毛体样式 ✅
- [x] 实现右下角链接与其动画效果 ✅
- [x] 响应式适配 (移动端/平板) ✅
- [ ] 部署至 Cloudflare Pages ⏳

## [环境依赖]
- **Node.js**: 20+
- **Framework**: Next.js 14/15 (App Router)
- **Styling**: TailwindCSS, Framer Motion
- **Testing**: Vitest, React Testing Library
- **Assets**: `public/jiuyi.jpg`, `public/fonts/maoti.ttf`

## [启动命令]
- **开发服务**: `npm run dev`
- **运行测试**: `npm test`
- **生产构建**: `npm run build`

## [核心决断]
1. **技术栈**: 选用 Next.js 以便后续可能的 SEO 扩展和动态内容需求。
2. **字体加载**: 将毛体字体放置在 `public/fonts/` 并在 `src/app/layout.tsx` 中使用 `next/font/local` 加载，解决了 2.1MB 大字体的呈现性能。
3. **视觉策略**: 背景固定且全屏，遮罩层动态由 `Framer Motion` 处理，增强了沉浸感。
4. **竖向排版**: 完美解析 `writing-mode: vertical-rl`，并通过负 Margin 精确实现了“标题高出 2 个字符”的视觉要求。
5. **适配性**: 采用全屏 `overflow-hidden` 配合绝对定位，确保在手机端不会产生多余滚动，文字自动缩放适配。
6. **SEO与无障碍**: 于 `<main>` 顶部植入 `sr-only` 隐藏式 H1 标签，收割“九嶷山”、“湖南九嶷山”等大量长尾核心词，并确保视觉排版中的标题降级为 H2，保证 HTML Semantic；图片提供富含搜索词的 alt 属性。
7. **Cloudflare部署策略**: 因为本站为纯视觉展示向的沉浸式单页，无动态服务端接口，选择在 `next.config.ts` 将 `output` 设置为 `export`，以 `Static HTML Export` 模式部署。这不仅能达到极限性能的 Edge 渲染，还可以免去任何服务器开销。
