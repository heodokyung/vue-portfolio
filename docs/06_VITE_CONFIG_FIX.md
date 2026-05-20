# Vite 설정 오류 수정 요약

## 문제

개발 서버에서 다음 오류가 발생했습니다.

```txt
[plugin:vite:oxc] Transform failed with 1 error:
[TSCONFIG_ERROR] Failed to load tsconfig for 'src/main.ts': Tsconfig not found
```

또한 개발 서버 포트를 8000으로 설정했는데 실제로 8000으로 열리지 않는 문제가 있었습니다.

## 원인 후보

1. `vite.config.js`와 `vite.config.ts`가 동시에 존재했습니다.
   - `vite.config.js`에는 `vite-plugin-vue-devtools` 설정이 남아 있었습니다.
   - 이 플러그인은 현재 `package.json`에 없는 의존성이며, 내부적으로 transform 단계에 영향을 줄 수 있습니다.
2. `package.json`의 `dev` script가 `--port 5173`으로 되어 있어 `vite.config`의 8000 설정을 덮어썼습니다.
3. Vue 기본 생성 파일인 `src/main.js`, `src/router/index.js`, `jsconfig.json`, starter 컴포넌트가 남아 있어 TypeScript 기준 프로젝트와 혼재되어 있었습니다.

## 수정 내용

- Vite 설정 파일을 `vite.config.ts` 하나로 통일했습니다.
- `vite.config.js`를 제거 대상으로 지정했습니다.
- `package.json`의 dev/preview 포트를 8000으로 통일했습니다.
- `strictPort: true`를 적용해 8000 포트가 사용 중이면 다른 포트로 자동 변경하지 않고 실패하도록 했습니다.
- Vue DevTools 플러그인을 제거했습니다.
- JS 기반 starter 파일을 제거 대상으로 지정했습니다.

## 적용 후 실행

```bash
npm install
npm run dev
```

브라우저에서 아래 주소를 확인합니다.

```txt
http://localhost:8000
```

## 8000 포트가 이미 사용 중일 때

PowerShell에서 확인:

```powershell
netstat -ano | findstr :8000
```

해당 PID 종료:

```powershell
taskkill /PID <PID번호> /F
```

## 삭제해야 할 파일

아래 파일은 기존 Vue starter 또는 중복 설정 파일이므로 제거하세요.

```txt
vite.config.js
jsconfig.json
src/main.js
src/router/index.js
src/stores/counter.js
src/assets/base.css
src/assets/main.css
src/assets/logo.svg
src/components/HelloWorld.vue
src/components/TheWelcome.vue
src/components/WelcomeItem.vue
src/components/icons/
```
