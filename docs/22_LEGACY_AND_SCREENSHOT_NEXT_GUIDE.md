# 22. Legacy 처리와 스크린샷 보강 다음 작업 가이드

## 다음 작업 우선순위

현재 Vue 포트폴리오는 구조, 배포, 주요 UI, 상세 페이지, About, Contact, 404, SEO 기본값까지 1차 정리가 완료된 상태다. 다음 단계는 운영 준비에 가까운 정리 작업이다.

권장 순서:

1. 실제 모바일/태블릿/PC 화면 QA.
2. 대표 프로젝트별 공개 가능한 실제 스크린샷 보강.
3. 남은 과거 프로젝트 문구 정리.
4. 기존 React 포트폴리오 README에 Legacy 표시.
5. 기존 `portfolio-data-json` 저장소 archive/private 검토.
6. 운영 도메인 확정 후 canonical/OG image/sitemap 추가.

## 대표 프로젝트 스크린샷 보강 기준

현재 `src/data/projects.ts`의 `media` 배열은 대표 이미지 1장을 중심으로 구성되어 있다. 실제 공개 가능한 스크린샷이 있다면 아래처럼 추가한다.

```ts
media: [
  {
    src: '/assets/portfolio/projects/project-id/overview.png',
    alt: '프로젝트명 주요 화면 전체 구조',
    caption: '프로젝트의 전체 정보 구조와 주요 CTA 흐름을 보여주는 화면입니다.',
  },
  {
    src: '/assets/portfolio/projects/project-id/mobile-list.png',
    alt: '프로젝트명 모바일 상품 리스트 화면',
    caption: '모바일 터치 영역과 상품 정보 밀도를 고려해 구현한 리스트 화면입니다.',
  },
]
```

주의:

- 회사 내부 정보, 비공개 운영 데이터, 개인정보, 관리자 화면은 노출하지 않는다.
- 실제 수치가 보이는 화면은 반드시 마스킹한다.
- 공개 가능한 범위가 애매하면 썸네일 수준의 흐림 처리 이미지 또는 설명형 이미지로 대체한다.
- 이미지 파일명은 영문 소문자와 하이픈을 사용한다.

## 추천 이미지 폴더 구조

```txt
public/assets/portfolio/projects/
  cj-themarket-vue3/
    overview.png
    mobile-list.png
  finnq-web-renewal/
    overview.png
    responsive.png
```

기존 `thumb_img_project`는 썸네일 보관용으로 유지하고, 상세 갤러리용 이미지는 `projects` 하위에 분리하는 것을 추천한다.

## 기존 React 포트폴리오 Legacy README 문구 예시

기존 React 포트폴리오 저장소의 README 상단에 아래 문구를 추가한다.

```md
# Legacy Portfolio v1

이 저장소는 기존 React 기반 포트폴리오 v1입니다.  
신규 운영 포트폴리오는 Vue 3 + Vite + TypeScript + SCSS 기반의 `vue-portfolio` 저장소에서 관리합니다.

## 상태

- 유지 목적: 기존 포트폴리오 이력 보관
- 신규 기능 추가: 중단
- 데이터 저장소: 기존 `portfolio-data-json`이 필요한 동안만 유지
- 향후 계획: 신규 Vue 포트폴리오 안정화 후 archive 또는 private 처리 검토
```

## portfolio-data-json 처리 기준

신규 Vue 포트폴리오는 외부 JSON 저장소를 사용하지 않는다. 다만 기존 React v1이 해당 저장소를 참조한다면 바로 삭제하지 않는다.

권장 처리:

1. React v1이 더 이상 운영 링크로 쓰이지 않는지 확인.
2. `portfolio-data-json`이 다른 페이지에서 참조되지 않는지 확인.
3. README에 Legacy data repository 표시.
4. 신규 Vue 포트폴리오 안정화 후 archive 또는 private 처리.

## Cloudflare 운영 도메인 확정 후 추가할 항목

도메인이 확정되면 아래 작업을 추가한다.

- `index.html`에 canonical URL 추가.
- `public/og-image.png` 추가.
- `index.html`에 `og:image`, `twitter:image` 추가.
- `public/robots.txt` 추가.
- `public/sitemap.xml` 추가.

도메인이 확정되기 전에는 잘못된 URL이 검색엔진에 남을 수 있으므로 보류하는 것이 안전하다.
