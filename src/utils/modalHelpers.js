/**
 * Helper to determine modal content based on project link configuration
 */
export function getModalDataForLink(link, projectTitle = '') {
  if (link.label === '리디자인 기획안') {
    return {
      isOpen: true,
      title: 'IKEA Website 리디자인 기획안',
      images: Array.from({ length: 30 }, (_, i) => {
        const num = String(i + 1).padStart(2, '0');
        return `/assets/ikea_redesign/${num}.png`;
      }),
      isVideo: false,
      videoUrl: '',
    };
  }

  if (link.label === '개발 기획안') {
    return {
      isOpen: true,
      title: 'IKEA Website UI/UX 개발 기획안',
      images: [
        '/assets/ikea_uiux/01.png',
        ...Array.from({ length: 22 }, (_, i) => `/assets/ikea_uiux/${i + 31}.png`),
      ],
      isVideo: false,
      videoUrl: '',
    };
  }

  if (link.label === '영상기획서') {
    return {
      isOpen: true,
      title: `${projectTitle} 영상기획서`,
      images: Array.from({ length: 9 }, (_, i) => `/assets/no_smoking_makeplan/${i + 1}.png`),
      isVideo: false,
      videoUrl: '',
    };
  }

  if (link.label === '스토리보드') {
    return {
      isOpen: true,
      title: `${projectTitle} 스토리보드`,
      images: Array.from({ length: 2 }, (_, i) => `/assets/no_smoking_storyboard/${i + 1}.png`),
      isVideo: false,
      videoUrl: '',
    };
  }

  if (link.label === 'VIDEO' && link.url?.endsWith('.mp4')) {
    return {
      isOpen: true,
      title: `${projectTitle} VIDEO`,
      images: [],
      isVideo: true,
      videoUrl: link.url,
    };
  }

  return null;
}
