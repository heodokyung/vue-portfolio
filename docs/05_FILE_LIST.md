# 생성 파일 목록과 역할

## 루트 설정

- `package.json`: Vue 3/Vite/TypeScript 기반 명령과 의존성 정의
- `vite.config.ts`: Vue 플러그인과 `@` alias 설정
- `package-lock.json`: npm 기준 설치 재현성을 위한 lock 파일
- `public/_redirects`: Cloudflare Pages에서 Vue Router history mode 직접 접근을 index.html로 연결
- `tsconfig.json`: 엄격한 TypeScript 설정
- `eslint.config.js`: Vue/TypeScript/Prettier 린트 설정
- `.prettierrc.json`: 코드 포맷 기준
- `.gitignore`: 배포/설치/환경 파일 제외
- `index.html`: 앱 진입 HTML
- `README.md`: 설치, 실행, 배포 안내

## 앱 진입

- `src/main.ts`: Vue 앱 생성 및 라우터 연결
- `src/App.vue`: 공통 레이아웃, skip link, RouterView
- `src/router/index.ts`: 라우트 정의와 스크롤 복원

## 타입/데이터

- `src/types/portfolio.ts`: 프로젝트, 스킬, 경력, 소개 타입
- `src/data/profile.ts`: 프로필/헤드라인 데이터
- `src/data/projects.ts`: 기존 프로젝트 37건 이관 데이터
- `src/data/skills.ts`: 스킬 12건 이관 데이터
- `src/data/careers.ts`: 경력 6건 이관 데이터
- `src/data/about.ts`: 자격/교육/활동 7건 이관 데이터

## 공통 컴포넌트

- `src/components/common/AppButton.vue`: 라우터 링크/외부 링크/버튼 공통 처리
- `src/components/common/AppCard.vue`: 카드 박스
- `src/components/common/AppContainer.vue`: 중앙 정렬 컨테이너
- `src/components/common/AppSection.vue`: 섹션 패딩/톤 처리
- `src/components/common/AppSectionTitle.vue`: 섹션 제목/설명
- `src/components/common/AppBadge.vue`: 작은 배지
- `src/components/common/AppTagList.vue`: 태그 목록

## 레이아웃

- `src/components/layout/AppHeader.vue`: 반응형 헤더/모바일 메뉴
- `src/components/layout/AppFooter.vue`: 푸터

## 프로젝트 컴포넌트

- `src/components/project/ProjectFilter.vue`: 프로젝트 필터
- `src/components/project/ProjectCard.vue`: 프로젝트 카드
- `src/components/project/ProjectGrid.vue`: 프로젝트 그리드
- `src/components/project/ProjectMetaList.vue`: 상세 메타 정보
- `src/components/project/ProjectGallery.vue`: 상세 이미지 갤러리
- `src/components/project/ProjectDetailTemplate.vue`: 데이터 기반 공통 프로젝트 상세 템플릿

## 페이지

- `src/views/HomeView.vue`: 홈
- `src/views/ProjectsView.vue`: 프로젝트 목록
- `src/views/ProjectDetailView.vue`: 공통 프로젝트 상세
- `src/views/AboutView.vue`: 소개/경력/스킬
- `src/views/NotFoundView.vue`: 404

## 스타일

- `src/styles/_tokens.scss`: 색상, radius, shadow, layout 토큰
- `src/styles/_reset.scss`: 기본 리셋
- `src/styles/_a11y.scss`: 접근성 유틸리티
- `src/styles/main.scss`: 전역 스타일 진입점

## 자산

- `public/assets/portfolio/thumb_img_project`: 기존 프로젝트 썸네일
- `public/assets/portfolio/thumb_img_skill`: 기존 스킬 아이콘
