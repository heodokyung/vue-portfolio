# 09. 현재 라운드 수정 요약

## 작업 범위

이번 라운드는 다음 두 가지를 중심으로 진행했습니다.

1. Cloudflare Pages npm 기준 배포 설정 정리
2. 메인 Hero와 프로젝트 카드 UI 1차 고도화

## 수정 파일 목록

```txt
.nvmrc
README.md
package.json
package-lock.json
src/components/common/AppButton.vue
src/components/project/ProjectCard.vue
src/utils/text.ts
src/views/HomeView.vue
docs/10_CLOUDFLARE_NPM_DEPLOY.md
docs/11_HERO_PROJECT_CARD_DESIGN.md
```

이전 1차 안정화 수정 파일도 함께 포함했습니다.

```txt
.gitignore
eslint.config.js
public/_redirects
scripts/cleanup-starter-files.ps1
scripts/cleanup-starter-files.sh
src/components/layout/AppHeader.vue
src/components/project/ProjectDetailTemplate.vue
src/components/project/ProjectFilter.vue
src/styles/_a11y.scss
src/styles/_tokens.scss
src/types/portfolio.ts
src/views/ProjectDetailView.vue
src/views/ProjectsView.vue
```

## 파일별 변경 이유

### `.nvmrc`

로컬과 Cloudflare Pages의 Node 기준을 맞추기 위해 `22.13.0`을 명시했습니다.

### `package.json`

- npm 기준임을 명확히 하기 위해 `packageManager`를 추가했습니다.
- Node/npm 버전 범위를 `engines`로 명시했습니다.
- `npm run check` 스크립트를 추가해 lint/typecheck/build를 한 번에 검증할 수 있게 했습니다.

### `README.md`

pnpm 기준 설명을 npm 기준으로 정리하고, Cloudflare Pages 설정과 사용하지 말아야 할 환경 변수를 명확히 적었습니다.

### `src/views/HomeView.vue`

Hero 영역을 현업형 UI/Frontend Developer 포트폴리오에 맞게 개선했습니다.

- 요약 지표 추가
- 운영 가능한 UI 구조 패널 추가
- Contact CTA 추가
- Strength 항목 데이터화
- 모바일 배치 개선

### `src/components/project/ProjectCard.vue`

프로젝트 카드의 정보 구조와 시각적 완성도를 개선했습니다.

- Featured 표시
- 플랫폼/카테고리/기간 메타 표시
- 회사명 표시
- 기여도 표시
- 모바일 프로젝트 이미지 보정
- hover/focus-visible 상태 개선

### `src/components/common/AppButton.vue`

`http` 링크만 새 창으로 열고, `mailto:` 링크는 현재 창에서 메일 클라이언트를 열도록 수정했습니다.

### `src/utils/text.ts`

프로젝트 카테고리 라벨 변환 함수 `getCategoryLabel`을 추가했습니다.

## 검증 결과

아래 명령 실행 결과 모두 통과했습니다.

```bash
npm run lint
npm run typecheck
npm run build
npm run check
```

## 사용자가 반영해야 할 사항

1. 수정 ZIP을 프로젝트 루트에 덮어씁니다.
2. 기존에 `pnpm-lock.yaml`이 생겼다면 삭제합니다.
3. Cloudflare Pages에서 `PNPM_VERSION`, `SKIP_DEPENDENCY_INSTALL`, 다른 프로젝트용 `VITE_*` 변수를 제거합니다.
4. Cloudflare Pages Build command는 `npm run build`, Output directory는 `dist`로 둡니다.
5. main 브랜치에 push해서 자동 배포를 확인합니다.

## 남은 작업

1. 상세 페이지 디자인 고도화
2. 대표 프로젝트 문구 보강
3. Contact 섹션 별도 구성
4. 모바일 QA
5. 기존 React 포트폴리오 legacy 처리
