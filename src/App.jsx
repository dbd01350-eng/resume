import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HeroSection from "./pages/HeroSection.jsx";
import ParallaxSection from "./pages/ParallaxSection.jsx";
import AboutSection from "./pages/AboutSection.jsx";
import MarqueeTextSection from "./pages/MarqueeTextSection.jsx";
import ProjectsSection from "./pages/ProjectsSection.jsx";
import CTASection from "./pages/CTASection.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ResumePage from "./pages/ResumePage.jsx";
import SkeletonLoader from "./components/SkeletonLoader.jsx";
import ChatWidget from "./components/ChatWidget.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);
  const handleOpenResume = () => setIsResumeOpen(true);
  const handleCloseResume = () => setIsResumeOpen(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF7F6] p-8 max-w-6xl mx-auto space-y-12 pt-32">
        <div className="flex justify-between items-center pb-8">
          <SkeletonLoader className="h-8 w-44" />
          <div className="flex space-x-6">
            <SkeletonLoader className="h-6 w-20" />
            <SkeletonLoader className="h-6 w-20" />
            <SkeletonLoader className="h-6 w-20" />
          </div>
        </div>
        <SkeletonLoader className="h-32 w-3/4" />
        <SkeletonLoader className="h-16 w-1/2" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          <SkeletonLoader className="h-64 rounded-3xl" />
          <SkeletonLoader className="h-64 rounded-3xl" />
          <SkeletonLoader className="h-64 rounded-3xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7F6] text-[#161616] font-[var(--font-pretendard)]">
      {/* Header */}
      <Header onOpenContact={handleOpenContact} onOpenResume={handleOpenResume} />

      {/* Main Figma Node Hierarchy */}
      <main>
        <HeroSection />
        <AboutSection />
        <MarqueeTextSection />
        <ProjectsSection />
        <ParallaxSection />
        <CTASection onOpenContact={handleOpenContact} />
      </main>

      {/* Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Contact Modal / Page */}
      {isContactOpen && <ContactPage onClose={handleCloseContact} />}

      {/* Resume Modal / A4 Print Page */}
      {isResumeOpen && <ResumePage onClose={handleCloseResume} />}

      {/* Floating AI Chatbot */}
      <ChatWidget />
    </div>
  );
}
