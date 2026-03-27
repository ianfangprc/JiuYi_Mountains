'use client';

import { motion } from 'framer-motion';

export default function FooterLink() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 3, duration: 1.5 }}
      className="absolute bottom-10 right-10 md:bottom-16 md:right-24 z-30"
    >
      <a 
        href="http://www.nyjiuyishan.com"
        target="_blank"
        rel="noopener noreferrer"
        title="访问湖南永州宁远九嶷山风景区官方网站"
        className="group relative flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-500 tracking-[0.2em]"
      >
        <div className="flex flex-col items-end">
          <span className="text-xs md:text-sm uppercase opacity-50 mb-1">Explore Heritage</span>
          <span className="text-xl md:text-2xl font-bold">九嶷山景区</span>
        </div>
        
        {/* 悬浮动效线 */}
        <div className="w-10 h-px bg-white/20 group-hover:w-20 group-hover:bg-white transition-all duration-700" />
      </a>
    </motion.div>
  );
}
