import Background from "@/components/Background";
import PoemText from "@/components/PoemText";
import FooterLink from "@/components/FooterLink";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-end overflow-hidden">
      {/* 视觉不可见的 SEO 护城河：高优关键词聚集区 */}
      <h1 className="sr-only">湖南永州宁远九嶷山风景区：九疑山上白云飞（毛泽东《七律·答友人》沉浸式数字体验）</h1>
      
      {/* 视觉背景组件 */}
      <Background />
      
      {/* 诗词文本区域 */}
      <section className="p-10 md:p-20 z-20 w-fit">
        <PoemText />
      </section>
      
      {/* 底部链接 */}
      <FooterLink />

      {/* 极简装饰元素：侧边进度线（未来扩展预留） */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 h-40 w-px bg-white/10 z-10 hidden md:block" />
    </main>
  );
}
