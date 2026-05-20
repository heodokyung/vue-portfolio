# 10. Cloudflare Pages npm 기준 배포 설정

## 핵심 결론

이 `vue-portfolio` 프로젝트는 npm 기준으로 배포합니다.
`npm run dev`는 로컬 개발 서버 실행 명령이므로 Cloudflare Pages 배포 명령으로 사용하지 않습니다.

Cloudflare Pages Production 설정은 다음처럼 맞춥니다.

```txt
Framework preset: Vue
Build command: npm run build
Build output directory: dist
Root directory: /
Production branch: main
Build system version: Version 3
```

## Variables and Secrets

신규 Vue 포트폴리오에는 현재 별도 API/DB 환경 변수가 없습니다.
따라서 아래 정도만 둡니다.

```txt
NODE_VERSION=22.13.0
```

아래 값은 다른 프로젝트용이므로 `vue-portfolio`에는 넣지 않습니다.

```txt
PNPM_VERSION=10.11.1
SKIP_DEPENDENCY_INSTALL=true
VITE_AUTH_REDIRECT_ORIGIN=https://planner-33e.pages.dev
```

특히 `SKIP_DEPENDENCY_INSTALL=true`가 있으면 Cloudflare가 의존성 설치를 건너뛸 수 있어 `vite`, `vue-tsc` 같은 패키지를 찾지 못하는 빌드 실패가 날 수 있습니다.

## 로컬 명령과 배포 명령 구분

### 로컬 개발

```bash
npm install
npm run dev
```

브라우저에서 확인:

```txt
http://localhost:8000
```

### 로컬 배포 검증

```bash
npm run check
```

또는 단계별 검증:

```bash
npm run lint
npm run typecheck
npm run build
npm run preview
```

### Cloudflare Pages 배포

Cloudflare Pages는 GitHub main 브랜치에 push된 코드를 기준으로 빌드합니다.
로컬에서 `npm run dev`를 실행한다고 Cloudflare에 배포되지는 않습니다.

```bash
git add .
git commit -m "feat: improve portfolio hero and project cards"
git push origin main
```

## package manager 기준

이 프로젝트는 npm 기준입니다.

커밋해야 하는 파일:

```txt
package.json
package-lock.json
```

만들면 안 되는 파일:

```txt
pnpm-lock.yaml
yarn.lock
```

## 직접 URL 접근 대응

Cloudflare Pages에서 `/projects/:projectId` 같은 직접 URL 접근과 새로고침 대응을 위해 다음 파일을 유지합니다.

```txt
public/_redirects
```

파일 내용:

```txt
/* /index.html 200
```

## 이번 수정으로 반영한 로컬 설정

- `.nvmrc` 추가: Node 22.13.0 기준 명시
- `package.json`에 `packageManager: npm@10.9.2` 추가
- `package.json`에 `engines` 추가
- `package.json`에 `npm run check` 추가
- `README.md`를 npm/Cloudflare 기준으로 갱신
