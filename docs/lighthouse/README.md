# 🚀 Lighthouse Audit & Performance Optimization Report

본 문서는 **심다은 포트폴리오 웹사이트**의 성능, 접근성, SEO 및 최적화 기록을 관리하는 문서입니다.

---

## 📊 1. 최초 측정 결과 (2026-09-09)
> 측정 결과 파일: [`lighthouse_260909.json`](./lighthouse_260909.json)

| 카테고리 | 점수 | 주요 원인 및 문제점 |
| :--- | :---: | :--- |
| **Performance (성능)** | **78점** | - LCP 4.6초, 네트워크 페이로드 총 67.4MB (24MB+ 대형 PNG 원본 이미지 포함)<br>- 메인 JS 번들 단일 파일 (604KB) |
| **Accessibility (접근성)** | **94점** | - Heading Order (`<h4>` 단독 사용) 미달<br>- 푸터 텍스트 색상 대비율 미달 |
| **Best Practices** | **100점** | - 웹 표준 및 보완 권장사항 완벽 준수 |
| **SEO (검색엔진 최적화)** | **91점** | - `<meta name="description">` 태그 누락 |

---

## ⚡ 2. 수행한 주요 최적화 작업

1. **이미지 포맷 WebP 압축 및 해상도 최적화**
   - `project_ikea_full_preview2.png`: `24.34 MB` ➔ `0.05 MB` *(99.8% 절감)*
   - `figma_bcd0c6b6.png`: `23.73 MB` ➔ `0.04 MB` *(99.8% 절감)*
   - 프로젝트 내 87개 전체 이미지를 WebP로 자동 압축 변환.
2. **SEO 메타 데이터 및 CDN Preconnect 추가**
   - `<meta name="description">` 추가 및 Google Fonts / Pretendard CDN preconnect 설정.
3. **접근성(Color Contrast & Heading Order) 개선**
   - Heading 태그 오더 정리 및 푸터 텍스트 대비율 상향 (`3.55:1` ➔ `6:1`).
4. **Vite Code-Splitting (번들링 최적화)**
   - 단일 대형 JS 파일(604KB)을 `vendor.js`, `lottie.js`, `index.js` (271KB)로 분할.

---

## 📈 3. 개선 후 기대 효과
- **Performance**: 78점 ➔ **95점+**
- **Accessibility**: 94점 ➔ **100점**
- **SEO**: 91점 ➔ **100점**
