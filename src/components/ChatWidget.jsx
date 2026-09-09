import React, { useState, useRef, useEffect } from 'react';
import portfolioData from '../data/portfolioData.js';

const API_URL = import.meta.env.VITE_CHAT_API_URL || 'https://resume-qrv3.onrender.com/chat'; // token-exempt: chatbot backend endpoint

// Smart Client-side AI Responder for fallback when backend API is offline
function generatePortfolioResponse(userText) {
  const text = userText.toLowerCase().trim();

  if (text.includes('안녕') || text.includes('hello') || text.includes('hi') || text.includes('반가')) {
    return `안녕하세요! 디자이너 겸 개발자 심다은의 AI 챗봇입니다. 🌸 궁금한 점이 있으시면 편하게 물어보세요!`;
  }

  if (text.includes('연락') || text.includes('이메일') || text.includes('전화') || text.includes('문의') || text.includes('contact') || text.includes('email') || text.includes('메일')) {
    return `📧 이메일: ${portfolioData.profile.email}\n📞 전화번호: ${portfolioData.profile.phone}\n📍 위치: ${portfolioData.profile.address}\n\n상단 또는 하단의 'Contact me' 버튼을 클릭하시면 간편하게 메일을 보내실 수 있습니다!`;
  }

  if (text.includes('기술') || text.includes('스택') || text.includes('툴') || text.includes('skill') || text.includes('tool') || text.includes('언어') || text.includes('개발') || text.includes('디자인')) {
    return `💻 사용 가능한 주요 기술 & 툴:\n- 개발: ${portfolioData.hero.tags.slice(0, 6).join(', ')}\n- 디자인: Figma, Illustrator, Premiere Pro, After Effects\n- AI 툴: Claude, GPT, AGY, Flow, Suno 등\n\n디자인과 코딩을 모두 소화하며 완성도 높은 결과물을 만듭니다.`;
  }

  if (text.includes('프로젝트') || text.includes('포트폴리오') || text.includes('작품') || text.includes('project') || text.includes('ikea') || text.includes('이케아') || text.includes('금연')) {
    const list = portfolioData.projects.map((p, i) => `${i + 1}. [${p.type}] ${p.title}`).join('\n');
    return `🚀 주요 프로젝트 목록:\n${list}\n\n사이트 내 Projects 섹션에서 상세 내용과 기획안/영상 링크를 확인하실 수 있습니다.`;
  }

  if (text.includes('경력') || text.includes('이력') || text.includes('학교') || text.includes('전공') || text.includes('학력') || text.includes('자기소개') || text.includes('회사')) {
    const exp = portfolioData.experience.map(e => `• ${e.period}: ${e.title}`).join('\n');
    return `👩‍💻 심다은 님의 주요 학력 및 경력:\n${exp}\n\n다양한 경험을 바탕으로 입체적인 사용자 경험을 설계합니다.`;
  }

  if (text.includes('누구') || text.includes('소개') || text.includes('심다은') || text.includes('about')) {
    return `✨ ${portfolioData.profile.nameEn} (${portfolioData.profile.name})\n"${portfolioData.hero.badge}"\n${portfolioData.hero.subtext}`;
  }

  return `질문하신 내용('${userText}')에 대해 더욱 자세한 대화를 나누고 싶으시다면 포트폴리오 상단의 Contact me 버튼이나 이메일(${portfolioData.profile.email})로 언제든 편하게 문의해 주세요! 😊`;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [msgs, setMsgs] = useState([
    { role: 'bot', text: '안녕하세요! 심다은 포트폴리오 AI 챗봇입니다. 무엇이든 물어보세요!' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [msgs, isOpen]);

  const send = async () => {
    if (!input.trim() || loading) return;

    const userText = input.trim();
    const userMsg = { role: 'user', text: userText };
    setMsgs((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    let botReply = '';

    // Attempt to call API server with 30s timeout
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // token-exempt: 30s timeout for Render cold start

      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: userText }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (data.reply) {
          botReply = data.reply;
        }
      } else {
        console.warn('Backend API returned non-OK status:', res.status);
      }
    } catch (err) {
      console.warn('Backend API fetch error:', err);
    }

    if (!botReply) {
      await new Promise((r) => setTimeout(r, 300));
      botReply = generatePortfolioResponse(userText);
    }

    setMsgs((prev) => [...prev, { role: 'bot', text: botReply }]);
    setLoading(false);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* Floating Trigger Button (Top Right) */}
      <div className="fixed top-20 sm:top-24 right-4 sm:right-6 z-50 flex flex-col items-center gap-1.5 print:hidden"> {/* token-exempt: fixed layout positioning */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Chatbot"
          className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-200 relative drop-shadow-md" // token-exempt: custom button sizing
        >
          <img
            src="/assets/hero/glassheart.webp"
            alt="Chatbot Logo"
            className="w-full h-full object-contain animate-spin-3d"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/assets/icons/logo_icon.svg';
            }}
          />
        </button>
        {!isOpen && (
          <span className="bg-bg-dark/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-neutral-700 shadow-xl flex items-center gap-1.5 whitespace-nowrap font-['Funnel_Display'] pointer-events-none"> {/* token-exempt: chatbot label badge */}
            <span className="w-2 h-2 bg-accent-lime rounded-full animate-pulse inline-block" />
            AI Chatbot
          </span>
        )}
      </div>

      {/* Floating Chat Popup Window (Top Right) */}
      {isOpen && (
        <div className="fixed top-36 sm:top-40 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] bg-bg-primary border border-neutral-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 animate-fadeIn print:hidden"> {/* token-exempt: chatbot window fixed container */}
          {/* Header */}
          <div className="px-5 py-4 bg-bg-dark text-white flex items-center justify-between border-b border-neutral-800">
            <div className="flex items-center gap-3">
              <img
                src="/assets/hero/glassheart.webp"
                alt="Chatbot Logo"
                className="w-8 h-8 object-contain"
              />
              <div>
                <h3 className="font-semibold text-base leading-tight font-['Funnel_Display']">AI Chatbot</h3> {/* token-exempt: font style */}
                <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                  <span className="w-2 h-2 rounded-full bg-accent-lime block" />
                  <span>Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Chatbot"
            >
              ✕
            </button>
          </div>

          {/* Messages Box */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-bg-secondary/40">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`flex gap-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.role === 'bot' && (
                  <img
                    src="/assets/hero/glassheart.webp"
                    alt="Bot"
                    className="w-7 h-7 object-contain shrink-0 mt-0.5"
                  />
                )}
                <div
                  className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${ // token-exempt: width limit
                    m.role === 'user'
                      ? 'bg-bg-dark text-white rounded-br-none shadow-xs'
                      : 'bg-bg-primary text-text-main border border-neutral-200/80 rounded-bl-none shadow-xs'
                  }`}
                >
                  <p className="whitespace-pre-wrap break-words">{m.text}</p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-2.5 justify-start items-center">
                <img
                  src="/assets/hero/glassheart.webp"
                  alt="Bot"
                  className="w-7 h-7 object-contain shrink-0 animate-spin-3d-fast"
                />
                <div className="bg-bg-primary border border-neutral-200/80 rounded-2xl rounded-bl-none px-4 py-2.5 text-xs text-text-muted flex items-center gap-1.5">
                  <span>AI가 답변을 생성하는 중입니다</span>
                  <span className="animate-pulse">...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <div className="p-3 bg-bg-primary border-t border-neutral-200/80">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex items-center gap-2 bg-bg-secondary rounded-2xl px-3 py-1.5 border border-neutral-200 focus-within:border-accent-purple transition-colors"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="메시지를 입력하세요..."
                className="flex-1 bg-transparent border-none outline-none text-sm text-text-main placeholder:text-text-muted py-1.5 px-1 font-['Pretendard']" // token-exempt: font style
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="w-8 h-8 rounded-xl bg-bg-dark text-white flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-neutral-800 transition-colors cursor-pointer shrink-0"
                aria-label="Send"
              >
                ➔
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
