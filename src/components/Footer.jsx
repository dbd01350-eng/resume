import React from 'react';
import portfolioData from '../data/portfolioData.js';

export default function Footer({ onOpenContact }) {
  const { profile } = portfolioData;

  return (
    <footer className="bg-[#FAF7F6] text-[#161616] py-12 sm:py-[80px] px-6 sm:px-10 lg:px-[80px] max-w-[1920px] mx-auto">
      <div className="space-y-[80px]">
        {/* Brand & Logo */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-gray-200 gap-6">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-3 sm:space-x-4 whitespace-nowrap cursor-pointer"
          >
            <img src="/assets/logo_icon.svg" alt="Logo" className="w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] shrink-0" onError={(e) => e.target.style.display = 'none'} />
            <h3 className="font-['Funnel_Display'] font-semibold text-[20px] sm:text-[28px] text-[#161616] whitespace-nowrap">
              심다은 포트폴리오
            </h3>
          </a>
          <p className="text-sm text-[#585858] font-['Pretendard']">
            Design and Coding Portfolio © {new Date().getFullYear()}
          </p>
        </div>

        {/* 3 Column Links Grid (Newsletter Removed, Ecosystem 2 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm font-['Pretendard']">
          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-bold text-[#585858] font-['Funnel_Display'] text-sm uppercase">Navigation</h4>
            <ul className="space-y-2.5 text-[#161616]">
              <li><a href="#home" className="hover:text-[#9F8BE7] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#9F8BE7] transition-colors">About me</a></li>
              <li><a href="#works" className="hover:text-[#9F8BE7] transition-colors">Works</a></li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    if (onOpenContact) {
                      e.preventDefault();
                      onOpenContact();
                    }
                  }}
                  className="hover:text-[#9F8BE7] transition-colors cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-[#585858] font-['Funnel_Display'] text-sm uppercase">Contact</h4>
            <ul className="space-y-2.5 text-[#161616]">
              <li>
                <a href={`mailto:${profile.email}`} className="hover:text-[#9F8BE7] transition-colors break-all">
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={`tel:${profile.phone}`} className="hover:text-[#9F8BE7] transition-colors">
                  {profile.phone}
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenContact && onOpenContact()}
                  className="mt-2 px-4 py-2 rounded-full border border-[#161616] text-xs font-semibold hover:bg-[#161616] hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>이메일 보내기</span>
                  <span>✉</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Ecosystem (2 Columns Grid Layout) */}
          <div className="space-y-4 md:col-span-1">
            <h4 className="font-bold text-[#585858] font-['Funnel_Display'] text-sm uppercase">Ecosystem</h4>
            <ul className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-3 text-[#161616]">
              <li>
                <a 
                  href="https://github.com/dbd01350-eng" // token-exempt: external profile link
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-[#9F8BE7] transition-colors inline-flex items-center gap-1 font-medium"
                >
                  <span>GitHub</span>
                  <span className="text-xs opacity-60">↗</span>
                </a>
              </li>

              <li>
                <a 
                  href="https://www.instagram.com/da_ni_nim" // token-exempt: external instagram link
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-[#9F8BE7] transition-colors inline-flex items-center gap-1 font-medium"
                >
                  <span>Instagram</span>
                  <span className="text-xs opacity-60">↗</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://app.notion.com/p/Daeun-Sim-3d6b09059111805e9cc5d821f30da516?source=copy_link" // token-exempt: external notion link
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-[#9F8BE7] transition-colors inline-flex items-center gap-1 font-medium"
                >
                  <span>Notion</span>
                  <span className="text-xs opacity-60">↗</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.figma.com/design/r4GMpAA7dQrAadLlmcQVGn/%EC%8B%AC%EB%8B%A4%EC%9D%80-%EC%9D%B4%EB%A0%A5%EC%84%9C-%ED%8E%98%EC%9D%B4%EC%A7%80?node-id=7227-600&t=sRrX4rlgyUj93qVx-1" // token-exempt: external figma design link
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-[#9F8BE7] transition-colors inline-flex items-center gap-1 font-medium"
                >
                  <span>Figma</span>
                  <span className="text-xs opacity-60">↗</span>
                </a>
              </li>

            </ul>
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
