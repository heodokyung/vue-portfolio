# vue-portfolio

Vue 3 + Vite + TypeScript + SCSS 기반 포트폴리오 리뉴얼 프로젝트입니다.

## 실행

```bash
pnpm install
pnpm dev
```

개발 서버 기본 주소:

```txt
http://localhost:8000
```

## 검증

```bash
pnpm typecheck
pnpm build
pnpm preview
```

## Cloudflare Pages

- Framework preset: `Vue`
- Build command: `pnpm build`
- Build output directory: `dist`
- Root directory: `/`
- 권장 환경 변수:
  - `NODE_VERSION=22.13.0`
  - `PNPM_VERSION=10.11.1`

## 데이터 관리

신규 Vue 포트폴리오는 외부 `portfolio-data-json` 저장소를 런타임에 불러오지 않습니다.
초기 데이터는 `src/data/*.ts`에 정적 TypeScript 데이터로 관리합니다.

기존 React v1 포트폴리오가 `portfolio-data-json`을 계속 참조한다면 React v1을 보관하는 동안에는 해당 저장소도 유지하세요.
신규 Vue 포트폴리오 안정화 이후에는 `portfolio-data-json`을 archive/private 처리할 수 있습니다.
