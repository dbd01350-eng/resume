import React from 'react';
import portfolioData from '../data/portfolioData.js';

export default function Footer() {
  const { profile } = portfolioData;

  return (
    <footer className="bg-[#FAF7F6] text-[#161616] py-12 sm:py-[80px] px-6 sm:px-10 lg:px-[80px] max-w-[1920px] mx-auto">
      <div className="space-y-[80px]">
        {/* Brand & Logo */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-gray-200 gap-6">
          <div className="flex items-center space-x-3 sm:space-x-4 whitespace-nowrap">
            <img src="/assets/logo_icon.svg" alt="Logo" className="w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] shrink-0" onError={(e) => e.target.style.display = 'none'} />
            <h3 className="font-['Funnel_Display'] font-semibold text-[20px] sm:text-[28px] text-[#161616] whitespace-nowrap">
              심다은 포트폴리오
            </h3>
          </div>
          <p className="text-sm text-[#585858] font-['Pretendard']">
            Design and Coding Portfolio © {new Date().getFullYear()}
          </p>
        </div>

        {/* 4 Column Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm font-['Pretendard']">
          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-bold text-[#585858] font-['Funnel_Display'] text-sm uppercase">Navigation</h4>
            <ul className="space-y-2.5 text-[#161616]">
              <li><a href="#home" className="hover:text-[#9F8BE7] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#9F8BE7] transition-colors">About me</a></li>
              <li><a href="#works" className="hover:text-[#9F8BE7] transition-colors">Works</a></li>
              <li><a href="#contact" className="hover:text-[#9F8BE7] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-[#585858] font-['Funnel_Display'] text-sm uppercase">Contact</h4>
            <ul className="space-y-2.5 text-[#161616]">
              <li><a href={`mailto:${profile.email}`} className="hover:text-[#9F8BE7] transition-colors">{profile.email}</a></li>
              <li><a href={`tel:${profile.phone}`} className="hover:text-[#9F8BE7] transition-colors">{profile.phone}</a></li>
            </ul>
          </div>

          {/* Ecosystem */}
          <div className="space-y-4">
            <h4 className="font-bold text-[#585858] font-['Funnel_Display'] text-sm uppercase">Ecosystem</h4>
            <ul className="space-y-2.5 text-[#161616]">
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#9F8BE7] transition-colors">Github</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#9F8BE7] transition-colors">Instagram</a></li>
              <li><a href="https://notion.so" target="_blank" rel="noreferrer" className="hover:text-[#9F8BE7] transition-colors">Notion</a></li>
              <li><a href="https://figma.com/@simdaeun" target="_blank" rel="noreferrer" className="hover:text-[#9F8BE7] transition-colors">Figma Community</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-bold text-[#585858] font-['Funnel_Display'] text-sm uppercase">Newsletter</h4>
            <p className="text-[#585858] text-xs">Subscribe to our insights:</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-white text-[#161616] text-xs px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#9F8BE7] flex-1"
              />
              <button 
                type="submit" 
                className="bg-[#161616] text-white px-4 py-2.5 rounded-xl text-xs font-bold font-['Funnel_Display'] hover:bg-[#303030] transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-[#838383] font-['Funnel_Display']">
          심다은 포트폴리오 • Created with Vibe Coding &amp; Figma MCP
        </div>
      </div>
    </footer>
  );
}
