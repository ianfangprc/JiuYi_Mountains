'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* 核心摄影图 */}
      <Image
        src="/jiuyi.jpg"
        alt="湖南永州宁远九嶷山风景区 - 九疑山上白云飞"
        fill
        className="object-cover transition-transform duration-[10s] ease-in-out scale-110"
        priority
      />
      
      {/* 半透明黑色渐变遮罩 */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 mask-gradient"
      />
    </div>
  );
}
