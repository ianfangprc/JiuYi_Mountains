import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const maoFont = localFont({
  src: "../../public/fonts/maoti.ttf",
  variable: "--font-maoti",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "九疑山上白云飞 - 湖南永州宁远九嶷山风景与毛泽东《七律·答友人》",
  description: "沉浸式体验毛泽东《七律·答友人》诗境。领略湖南永州宁远九嶷山的自然风景与厚重人文。九嶷山上白云飞，在线重温伟人笔下气势恢宏的九嶷山景区美景。",
  keywords: ["九嶷山", "湖南九嶷山", "宁远九嶷山", "永州九嶷山", "九嶷山景区", "九疑山上白云飞", "七律答友人", "毛泽东诗词"],
  openGraph: {
    title: "湖南宁远九嶷山风景沉浸展 | 七律·答友人",
    description: "跟随毛主席《七律·答友人》在线游历永州九嶷山景区，感受“九疑山上白云飞”的诗歌气象。",
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${maoFont.variable} font-maoti`}>
      <body className="antialiased overflow-hidden">
        {children}
      </body>
    </html>
  );
}
