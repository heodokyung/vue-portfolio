# vue-portfolio

Vue 3 + Vite + TypeScript + SCSS 기반 포트폴리오 리뉴얼 프로젝트입니다.

## 실행

이 프로젝트는 **npm 기준**으로 관리합니다. `pnpm-lock.yaml`을 만들거나 Cloudflare Pages에 `PNPM_VERSION`을 넣지 않습니다.

```bash
npm install
npm run dev
```

개발 서버 기본 주소:

```txt
http://localhost:8000
```

> `npm run dev`는 로컬 개발 서버 실행 명령입니다. Cloudflare Pages 배포 명령으로 사용하지 않습니다.

## 검증

```bash
npm run lint
npm run typecheck
npm run build
npm run preview
```

전체 점검을 한 번에 실행하려면 다음 명령을 사용합니다.

```bash
npm run check
```

## Cloudflare Pages

- Framework preset: `Vue`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- 권장 환경 변수:
  - `NODE_VERSION=22.13.0`

설정하지 않을 항목:

- `PNPM_VERSION`
- `SKIP_DEPENDENCY_INSTALL=true`
- `VITE_AUTH_REDIRECT_ORIGIN` 같은 다른 프로젝트 전용 환경 변수

Vue Router의 직접 URL 접근과 새로고침 대응을 위해 `public/_redirects` 파일을 포함합니다.

## 데이터 관리

신규 Vue 포트폴리오는 외부 `portfolio-data-json` 저장소를 런타임에 불러오지 않습니다.
초기 데이터는 `src/data/*.ts`에 정적 TypeScript 데이터로 관리합니다.

기존 React v1 포트폴리오가 `portfolio-data-json`을 계속 참조한다면 React v1을 보관하는 동안에는 해당 저장소도 유지하세요.
신규 Vue 포트폴리오 안정화 이후에는 `portfolio-data-json`을 archive/private 처리할 수 있습니다.
