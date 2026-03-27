'use client';

import { motion } from 'framer-motion';

const POEM_LINES = [
  "九嶷山上白云飞，",
  "帝子乘风下翠微。",
  "斑竹一枝千滴泪，",
  "红霞万朵百重衣。",
  "洞庭波涌连天雪，",
  "长岛人歌动地诗。",
  "我欲因之梦寥廓，",
  "芙蓉国里尽朝晖。"
];

export default function PoemText() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <motion.article 
      variants={container}
      initial="hidden"
      animate="show"
      className="absolute top-10 right-10 md:top-24 md:right-32 h-auto writing-vertical-rl text-white tracking-[0.5em] select-none"
    >
      {/* 标题 - 精确偏移：比正文第一句高出 2 个中文字符的位置 */}
      <motion.div variants={item} className="mr-6 md:mr-12 -mt-[2em]">
        <h2 className="text-3xl md:text-5xl font-extrabold opacity-95 border-l border-white/20 pl-4 md:pl-6">
          七律·答友人
        </h2>
      </motion.div>

      {/* 诗句部分 - 每个 p 为垂直的一列 */}
      <div className="flex flex-col gap-4 md:gap-8">
        {POEM_LINES.map((line, idx) => (
          <motion.p key={idx} variants={item} className="text-2xl md:text-4xl leading-relaxed drop-shadow-2xl">
            {line}
          </motion.p>
        ))}
      </div>

      {/* 落款 - 在诗句左侧（或底部偏移，取决于布局策略） */}
      <motion.div variants={item} className="ml-10 md:ml-16 mt-20 md:mt-32 opacity-80 decoration-slice">
        <span className="text-xl md:text-2xl border-t-2 border-white/40 pt-6">
          毛泽东
        </span>
      </motion.div>
    </motion.article>
  );
}
