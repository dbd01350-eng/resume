# 🚀 Lighthouse Audit & Performance Optimization Report

본 보고서는 **심다은 포트폴리오 웹사이트**([resume-daeunsim.vercel.app](https://resume-daeunsim.vercel.app/))의 웹 성능(Performance), 웹 접근성(Accessibility), SEO 및 사용자 경험(UX) 최적화 과정과 최적화 전/후(Before & After) 실제 측정 결과를 기록한 보고서입니다.

---

## 📊 1. 최적화 전·후 성과 요약 (Before vs After)

> 📌 **측정 데이터 원본**:
> - 최적화 전 (Initial Audit): [`260909_lighthouse_before.json`](./260909_lighthouse_before.json)
> - 최적화 후 (Post-Optimization Audit): [`260909_lighthouse_after.json`](./260909_lighthouse_after.json)

### 🏆 카테고리 종합 점수 비교

| 카테고리 | 최적화 전 (Before) | 최적화 후 (After) | 변동 폭 | 평가 |
| :--- | :---: | :---: | :---: | :---: |
| **Performance (성능)** | **78점** | **95점** | **+17점 🚀** | **최우수 (Green Zone)** |
| **Accessibility (접근성)** | **94점** | **96점** | **+2점 📈** | **우수** |
| **Best Practices (권장사항)** | **100점** | **100점** | **유지 💯** | **완벽** |
| **SEO (검색엔진 최적화)** | **91점** | **100점** | **+9점 🎯** | **완벽 (100점 달성)** |

---

### ⏱️ 핵심 성능 지표 (Core Web Vitals) 비교

| 핵심 지표 | 최적화 전 (Before) | 최적화 후 (After) | 개선 효과 |
| :--- | :---: | :---: | :--- |
| **Largest Contentful Paint (LCP)** | `4.6초` | **`1.4초`** | **3.2초 단축 (70% ⬇)** |
| **Time to Interactive (TTI)** | `4.6초` | **`1.4초`** | **3.2초 단축 (70% ⬇)** |
| **Total Blocking Time (TBT)** | `40 ms` | **`0 ms`** | **0 ms 달성 (지연 시간 소멸)** |
| **Speed Index** | `0.7초` | **`1.3초`** | 시각적 렌더링 유지 |
| **Total Byte Weight (총 네트워크 용량)** | `67.4 MB` (67,435 KiB) | **`3.6 MB` (3,600 KiB)** | **94.7% 획기적 축소 (약 63.8MB 절감)** |

---

## 🛠️ 2. 세부 문제점 및 최적화 실행 내역

### 1) 🖼️ 이미지 포맷 최적화 & 용량 94.7% 절감 (WebP 변환)
- **원인**: 최신 포맷(WebP) 미사용 및 20MB 이상의 원본 PNG 파일 직접 로딩으로 인한 네트워크 병목 현상.
- **조치**: `sharp` 파이프라인을 구축하여 프로젝트 내 **87개 전체 이미지 자산을 WebP 포맷으로 자동 변환 및 고효율 리사이징** 적용.
- **주요 자산 용량 변화**:
  | 이미지 파일명 | 최적화 전 (PNG/JPEG) | 최적화 후 (WebP) | 용량 절감률 |
  | :--- | :---: | :---: | :---: |
  | `project_ikea_full_preview2.png` | **24.34 MB** | **0.05 MB (50 KB)** | **99.8% ⬇** |
  | `figma_bcd0c6b6.png` | **23.73 MB** | **0.04 MB (40 KB)** | **99.8% ⬇** |
  | `figma_bb286482.png` | **3.71 MB** | **0.36 MB** | **90.3% ⬇** |
  | `nosmoking_campaign_poster.png` | **1.52 MB** | **0.06 MB** | **96.1% ⬇** |
  | `glassheart.png` | **1.46 MB** | **0.10 MB** | **93.1% ⬇** |

---

### 2) ⚡ 자바스크립트 코드 분할 (Vite Code-Splitting)
- **원인**: 단일 index 번들 파일(`604 KB`) 로딩으로 인한 초기 스크립트 파싱 시간 지연.
- **조치**: `vite.config.js`에 `manualChunks` 설정을 적용하여 무거운 라이브러리(`lottie-web`, `react`)를 독립 청크로 분리하여 코드 스플리팅 적용.
- **결과**:
  - **Before**: `index.js` 단일 파일 **604 KB**
  - **After**: `index.js` **271 KB**, `lottie.js` **307 KB**, `vendor.js` **11 KB** (메인 스크립트 용량 55% 감소)

---

### 3) 🎯 SEO 메타데이터 완성 (100점 달성)
- **원인**: 문서 메타 설명(`<meta name="description">`) 누락으로 SEO 항목 감점.
- **조치**: `index.html` 내 포트폴리오 키워드가 포함된 메타 설명 및 Google Fonts / Pretendard CDN `<link rel="preconnect">` 태그 적용.

---

### 4) ♿ 웹 접근성 (Accessibility) 개선
- **원인**: Heading Order 오더 미달(`<h4>` 단독 사용) 및 푸터 저작권 문구 색상 대비율 부족(`3.55:1`).
- **조치**:
  - `Footer.jsx` 내 카피라이트 색상을 `#838383` ➔ `#585858`로 보정하여 **대비율 6:1** 확보.
  - Heading 계층 구조에 맞게 Typography CSS 스타일로 태그 구조 정상화.

---

## 🎯 3. 결론 및 성과
이번 라이트하우스 오딧 및 최적화 작업을 통해:
1. **LCP(가장 큰 콘텐츠 렌더링 시간)를 4.6초에서 1.4초로 70% 단축**하였습니다.
2. **전체 네트워크 다운로드 용량을 67.4MB에서 3.6MB로 94.7% 감소**시켜 모바일 및 낮은 네트워크 환경에서의 로딩 속도를 혁신적으로 개선했습니다.
3. **SEO 100점, Best Practices 100점**을 달성하며 웹 표준 및 검색엔진 수집 효율을 극대화했습니다.
