# 12. Cloudflare Pages pnpm 배포 전환 기록

## 1. 원인 요약

Cloudflare Pages 배포 로그에서 빌드 명령 실행 전 자동 의존성 설치 단계가 실패했다.

```txt
Installing project dependencies: npm clean-install --progress=false
npm error Exit handler never called!
```

이 오류는 앱 코드의 Vite/Vue 빌드 오류가 아니라 Cloudflare 빌드 이미지에서 실행한 npm clean-install 단계의 npm CLI 오류로 판단한다.
따라서 `npm run build` 자체를 수정하는 문제가 아니라, Cloudflare 의존성 설치 방식을 우회하거나 pnpm으로 바꾸는 것이 안정적이다.

## 2. 결정

기존에 정상 동작하던 프로젝트와 같은 방식으로 `vue-portfolio`도 pnpm 기준으로 전환한다.

- package manager: pnpm
- pnpm version: 10.11.1
- node version: 22.13.0
- Cloudflare 자동 install 비활성화
- Build command에서 직접 install + build 실행

## 3. Cloudflare Pages 설정

### Build configuration

```txt
Build command: pnpm install --no-frozen-lockfile && pnpm run build
Build output directory: dist
Root directory: 비워두기 또는 /
Production branch: main
Build system version: Version 3
```

### Variables and Secrets

```txt
NODE_VERSION=22.13.0
PNPM_VERSION=10.11.1
SKIP_DEPENDENCY_INSTALL=true
```

### 넣지 말아야 할 값

```txt
VITE_AUTH_REDIRECT_ORIGIN=https://planner-33e.pages.dev
```

이 값은 planner 프로젝트 전용 값이므로 vue-portfolio에는 넣지 않는다.

## 4. pnpm-lock.yaml 처리 기준

현재 ZIP에는 `pnpm-lock.yaml`을 포함하지 않았다.
이유는 작업 환경에서 pnpm 패키지 매니저를 설치할 수 없어 lockfile을 실제로 생성/검증하지 못했기 때문이다.

따라서 첫 배포 안정화를 위해 Cloudflare Build command는 아래처럼 둔다.

```txt
pnpm install --no-frozen-lockfile && pnpm run build
```

로컬에서 아래 명령을 실행한 뒤 `pnpm-lock.yaml`이 생성되면 커밋한다.

```bash
corepack enable
pnpm install
pnpm run check
```

그 다음 Cloudflare Build command를 더 엄격하게 바꿀 수 있다.

```txt
pnpm install --frozen-lockfile && pnpm run build
```

## 5. 로컬 반영 명령

```bash
git rm package-lock.json
corepack enable
pnpm install
pnpm run check
git add .
git commit -m "chore: switch portfolio deployment to pnpm"
git push origin main
```

Windows PowerShell에서도 동일하게 실행 가능하다.

```powershell
git rm package-lock.json
corepack enable
pnpm install
pnpm run check
git add .
git commit -m "chore: switch portfolio deployment to pnpm"
git push origin main
```

## 6. 수동 QA 체크리스트

- Cloudflare Deployments에서 자동 install 단계가 `npm clean-install`로 나오지 않는지 확인한다.
- 로그에 `pnpm install`이 실행되는지 확인한다.
- `pnpm run build`가 실행되는지 확인한다.
- 배포 후 `/`, `/projects`, `/projects/{projectId}`, `/about`, 존재하지 않는 URL을 직접 열어본다.
- 모바일 크기에서 Hero CTA와 ProjectCard가 겹치지 않는지 확인한다.

## 7. 남은 주의사항

- `pnpm-lock.yaml`은 사용자가 로컬에서 생성 후 커밋해야 한다.
- `package-lock.json`이 GitHub에 남아 있으면 Cloudflare가 npm 프로젝트로 오인할 수 있으므로 반드시 삭제 커밋한다.
- `SKIP_DEPENDENCY_INSTALL=true`를 설정했으면 Build command 안에 `pnpm install`이 반드시 포함되어야 한다.
