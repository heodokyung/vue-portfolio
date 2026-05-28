# Heo Do Kyung Portfolio

Vue 3 + Vite + TypeScript + SCSS + lottie-web 기반의 신규 포트폴리오 프로젝트입니다.  
기존 React 포트폴리오를 덮어쓰지 않고, 현업형 UI Developer 포트폴리오로 새롭게 구성합니다.

## 목표

이 포트폴리오는 단순한 프로젝트 목록이 아니라 아래 역량을 보여주는 것을 목표로 합니다.

- 웹표준과 접근성을 고려한 화면 구현
- 모바일 우선 반응형 UI 설계
- SCSS 기반의 유지보수 가능한 스타일 구조
- Vue 3 / React 기반 UI 개발 경험
- 운영·개편 프로젝트에서의 안정적인 문제 해결 경험
- 데이터와 화면 구조가 분리된 프로젝트 아카이브

## 기술 스택

- Vue 3
- Vite
- TypeScript
- SCSS
- Vue Router
- Cloudflare Pages

DB, Firebase, MongoDB 같은 외부 데이터베이스는 현재 사용하지 않습니다.  
프로젝트 데이터는 `src/data/*.ts`의 정적 TypeScript 데이터로 관리합니다.

## 프로젝트 구조

```txt
src/
  assets/
  components/
    common/
    layout/
    project/
  data/
  router/
  styles/
  types/
  utils/
  views/
```

주요 기준은 다음과 같습니다.

- 공통 UI는 `components/common`에 둡니다.
- 레이아웃 요소는 `components/layout`에 둡니다.
- 프로젝트 목록/상세 전용 컴포넌트는 `components/project`에 둡니다.
- 프로젝트 상세 페이지는 개별 파일을 만들지 않고 `ProjectDetailView.vue`와 `ProjectDetailTemplate.vue`를 공통으로 사용합니다.
- 프로젝트 내용은 `src/data/projects.ts`에서 관리합니다.

## 실행

이 프로젝트는 **pnpm 기준**으로 관리합니다.  
Cloudflare Pages의 npm `clean-install` 단계에서 `Exit handler never called!` 오류가 발생한 이력이 있어, 배포 안정성을 위해 pnpm으로 고정합니다.

```bash
corepack enable
pnpm install
pnpm run dev
```

개발 서버 기본 주소:

```txt
http://localhost:8000
```

`pnpm run dev`는 로컬 개발 서버 실행 명령입니다. Cloudflare Pages 배포 명령으로 사용하지 않습니다.

## 검증

```bash
pnpm run lint
pnpm run typecheck
pnpm run content:audit
pnpm run build
pnpm run preview
```

`content:audit`은 프로젝트 ID 중복, 이미지 경로 누락, 이미지 alt 누락, 임시 이관 문구 잔존 여부를 확인합니다.

전체 점검을 한 번에 실행하려면 다음 명령을 사용합니다.

```bash
pnpm run check
```

## Cloudflare Pages 배포

권장 설정:

```txt
Framework preset: Vue
Build command: pnpm install --no-frozen-lockfile && pnpm run build
Build output directory: dist
Root directory: 비워두기 또는 /
Production branch: main
Build system version: Version 3
```

권장 환경 변수:

```txt
NODE_VERSION=22.13.0
PNPM_VERSION=10.11.1
SKIP_DEPENDENCY_INSTALL=true
```

주의:

- 현재 저장소에 `pnpm-lock.yaml`을 아직 커밋하지 않았다면 `--no-frozen-lockfile`을 사용합니다.
- 로컬에서 `pnpm install` 후 `pnpm-lock.yaml`을 커밋했다면 Build command를 아래처럼 바꿀 수 있습니다.

```txt
pnpm install --frozen-lockfile && pnpm run build
```

Vue Router의 직접 URL 접근과 새로고침 대응을 위해 `public/_redirects` 파일을 포함합니다.

## npm lockfile 정리

pnpm 기준으로 전환했기 때문에 기존 `package-lock.json`은 제거합니다.

```bash
git rm package-lock.json
```

이미 삭제되어 있다면 해당 명령은 실패해도 무시해도 됩니다.

## 주요 페이지

- `/` : Hero, 강점, 대표 프로젝트, 기술 스택, 경력 요약, Contact
- `/projects` : 전체 프로젝트 아카이브와 필터
- `/projects/:projectId` : 데이터 기반 공통 상세 페이지
- `/about` : 경력, 기술, 작업 기준
- `404` : 잘못된 주소 안내

## SEO / 접근성 기준

- 라우트 이동 시 페이지 제목과 description, OG/Twitter 메타 정보를 갱신합니다.
- Vue Router 직접 URL 접근을 위해 Cloudflare `_redirects`를 사용합니다.
- 본문 바로가기 링크를 제공합니다.
- Contact 앵커 이동 시 sticky header에 가려지지 않도록 `scroll-padding-top`을 적용합니다.
- `prefers-reduced-motion` 설정이 켜진 사용자는 해시 이동 애니메이션을 줄입니다.

## 데이터 관리

신규 Vue 포트폴리오는 외부 `portfolio-data-json` 저장소를 런타임에 불러오지 않습니다.  
초기 데이터는 `src/data/*.ts`에 정적 TypeScript 데이터로 관리합니다.

기존 React v1 포트폴리오가 `portfolio-data-json`을 계속 참조한다면 React v1을 보관하는 동안에는 해당 저장소도 유지하세요.  
신규 Vue 포트폴리오 안정화 이후에는 기존 React v1과 `portfolio-data-json`을 archive/private 처리할 수 있습니다.

## 운영 전 확인할 것

- 실제 운영 도메인이 확정되면 OG 이미지와 canonical URL을 추가합니다.
- 대표 프로젝트별 실제 공개 가능한 스크린샷이 있으면 `src/data/projects.ts`의 `media` 배열에 추가합니다.
- 기존 React 포트폴리오 저장소는 삭제하지 말고 README에 Legacy 표시 후 archive/private를 검토합니다.


## 이번 라운드 디자인 방향

- 홈은 `Identity / Projects / Work / Skills / Guide / Contact`를 한 페이지 흐름으로 보여줍니다.
- 기존 React legacy 포트폴리오의 Lottie 자산을 `public/assets/lottie`로 이관해 경력/기술/학습 섹션에 사용합니다.
- `lottie-web`은 해당 JSON 모션을 Vue 환경에서 재생하기 위한 최소 런타임 의존성입니다.
- 상세 페이지의 “이전 목록 위치로” 버튼은 상세 진입 전 스크롤 위치로 돌아가도록 설계했습니다.
