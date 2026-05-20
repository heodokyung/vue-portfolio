# vue-portfolio

Vue 3 + Vite + TypeScript + SCSS 기반 포트폴리오 리뉴얼 프로젝트입니다.

## 실행

이 프로젝트는 **pnpm 기준**으로 관리합니다.
Cloudflare Pages의 npm `clean-install` 단계에서 `Exit handler never called!` 오류가 발생했기 때문에, 배포 안정성을 위해 pnpm으로 고정합니다.

```bash
corepack enable
pnpm install
pnpm run dev
```

개발 서버 기본 주소:

```txt
http://localhost:8000
```

> `pnpm run dev`는 로컬 개발 서버 실행 명령입니다. Cloudflare Pages 배포 명령으로 사용하지 않습니다.

## 검증

```bash
pnpm run lint
pnpm run typecheck
pnpm run build
pnpm run preview
```

전체 점검을 한 번에 실행하려면 다음 명령을 사용합니다.

```bash
pnpm run check
```

## Cloudflare Pages

권장 설정:

- Framework preset: `Vue`
- Build command: `pnpm install --no-frozen-lockfile && pnpm run build`
- Build output directory: `dist`
- Root directory: 비워두기 또는 `/`
- Production branch: `main`
- Build system version: `Version 3`

권장 환경 변수:

- `NODE_VERSION=22.13.0`
- `PNPM_VERSION=10.11.1`
- `SKIP_DEPENDENCY_INSTALL=true`

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

Windows PowerShell:

```powershell
git rm package-lock.json
```

## 데이터 관리

신규 Vue 포트폴리오는 외부 `portfolio-data-json` 저장소를 런타임에 불러오지 않습니다.
초기 데이터는 `src/data/*.ts`에 정적 TypeScript 데이터로 관리합니다.

기존 React v1 포트폴리오가 `portfolio-data-json`을 계속 참조한다면 React v1을 보관하는 동안에는 해당 저장소도 유지하세요.
신규 Vue 포트폴리오 안정화 이후에는 `portfolio-data-json`을 archive/private 처리할 수 있습니다.
