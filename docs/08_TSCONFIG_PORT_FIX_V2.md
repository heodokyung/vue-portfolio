# Vite tsconfig / 8000 port 오류 수정 v2

## 증상

```txt
[TSCONFIG_ERROR] Failed to load tsconfig for 'src/main.ts': Tsconfig not found
Plugin: vite:oxc
File: C:/workspace/vue-portfolio/src/main.ts
```

## 핵심 원인

1. 이전 폴더에 `vite.config.js`, `jsconfig.json`, `src/main.js` 등 Vue starter 잔여 파일이 남아 있으면 Vite가 잘못된 설정을 읽을 수 있습니다.
2. `package.json`의 `dev` 명령에 `--port 5173`이 남아 있으면 `vite.config.ts`의 8000 설정보다 CLI 옵션이 우선됩니다.
3. 최신 Vite/OXC 변환 과정에서 tsconfig 탐색이 엄격하게 동작할 수 있어, Vue 표준 구조인 `tsconfig.json` + `tsconfig.app.json` + `tsconfig.node.json` 구조로 변경했습니다.

## 변경 사항

- `tsconfig.json`을 references 구조로 변경
- `tsconfig.app.json` 추가
- `tsconfig.node.json` 정리
- `package.json` dev/preview 포트 8000 통일
- `package.json` typecheck/build 명령에서 `tsconfig.app.json`을 명시
- `vite.config.ts`만 사용하도록 정리
- 의존성 버전을 exact version으로 고정해 불필요한 버전 흔들림을 줄임

## 반드시 삭제할 잔여 파일

아래 파일이 프로젝트 루트 또는 src 하위에 남아 있으면 삭제하세요.

```txt
vite.config.js
jsconfig.json
src/main.js
src/router/index.js
src/stores/
src/assets/base.css
src/assets/main.css
src/assets/logo.svg
src/components/HelloWorld.vue
src/components/TheWelcome.vue
src/components/WelcomeItem.vue
src/components/icons/
node_modules/
pnpm-lock.yaml
package-lock.json
yarn.lock
```

## 권장 적용 순서

```powershell
cd C:\workspace
Rename-Item vue-portfolio vue-portfolio_old
# 새 ZIP을 C:\workspace\vue-portfolio 로 압축 해제
cd C:\workspace\vue-portfolio
pnpm install
pnpm dev
```

접속 주소:

```txt
http://localhost:8000
```

## 검증 명령

```bash
pnpm typecheck
pnpm build
pnpm preview
```
