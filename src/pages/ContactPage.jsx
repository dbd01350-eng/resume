import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage({ onClose }) {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ loading: false, success: false, error: null });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    // Dynamically load Google reCAPTCHA Enterprise script if not already present
    const scriptId = 'google-recaptcha-enterprise-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.google.com/recaptcha/enterprise.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    emailjs.sendForm(
      'service_md0xqro',
      'template_u1tmak3',
      formRef.current,
      { publicKey: 'Ki8H2L4_cadvYTylG' }
    )
    .then(() => {
      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((err) => {
      console.error('EmailJS Error:', err);
      setStatus({ loading: false, success: false, error: '메일 전송에 실패했습니다. 다시 시도해주세요.' });
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-bg-dark/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10">
      <div className="bg-bg-primary text-text-main rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative border border-gray-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-bg-secondary hover:bg-gray-200 flex items-center justify-center text-text-main font-bold text-xl transition-colors"
          aria-label="닫기"
        >
          ✕
        </button>

        {/* Header Title */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 bg-accent-lime text-text-main rounded-full font-funnel inline-block mb-3">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-funnel tracking-tight">
            이메일 문의하기
          </h2>
          <p className="text-text-sub mt-2 text-sm sm:text-base">
            프로젝트 문의나 제안사항이 있으시면 아래 양식을 작성하여 이메일을 보내주세요.
          </p>
        </div>

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2 text-text-main">
              이름 (Name)
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="성함을 입력하세요"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-bg-secondary text-text-main focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-text-main">
              이메일 주소 (Email)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@domain.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-bg-secondary text-text-main focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-text-main">
              제목 (Subject)
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="문의 제목을 입력하세요"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-bg-secondary text-text-main focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2 text-text-main">
              내용 (Message)
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="문의 내용을 상세히 작성해 주세요."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-bg-secondary text-text-main focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all resize-none"
            />
          </div>

          {/* Google reCAPTCHA Enterprise */}
          <div className="py-2 flex justify-center sm:justify-start">
            <div
              className="g-recaptcha"
              data-sitekey="6Leg6a0tAAAAAGejFNSU--fwm6M91K_Js_1lsomg"
              data-action="LOGIN"
            />
          </div>

          {/* Status Feedback */}
          {status.success && (
            <div className="p-4 rounded-xl bg-green-100 text-green-800 text-sm font-semibold">
              🎉 이메일이 성공적으로 전송되었습니다! 빠르게 답변 드리겠습니다.
            </div>
          )}

          {status.error && (
            <div className="p-4 rounded-xl bg-red-100 text-red-800 text-sm font-semibold">
              ❌ {status.error}
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-full border border-gray-300 text-text-main hover:bg-bg-secondary transition-colors font-semibold"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={status.loading}
              className="px-8 py-3 rounded-full bg-accent-lime text-text-main hover:opacity-90 transition-opacity font-semibold font-funnel disabled:opacity-50"
            >
              {status.loading ? '전송 중...' : '보내기 →'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
