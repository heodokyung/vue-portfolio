# 적용 및 QA 체크리스트

## 적용 방법

신규 프로젝트라면 `vue-portfolio-fixed-full.zip`을 새 폴더에 풀어서 시작하는 방식을 권장합니다.

기존 폴더에 덮어쓸 경우에는 중복 파일을 먼저 삭제하세요.

```powershell
Remove-Item vite.config.js -ErrorAction SilentlyContinue
Remove-Item jsconfig.json -ErrorAction SilentlyContinue
Remove-Item src/main.js -ErrorAction SilentlyContinue
Remove-Item src/router/index.js -ErrorAction SilentlyContinue
Remove-Item src/stores -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item src/assets/base.css -ErrorAction SilentlyContinue
Remove-Item src/assets/main.css -ErrorAction SilentlyContinue
Remove-Item src/assets/logo.svg -ErrorAction SilentlyContinue
Remove-Item src/components/HelloWorld.vue -ErrorAction SilentlyContinue
Remove-Item src/components/TheWelcome.vue -ErrorAction SilentlyContinue
Remove-Item src/components/WelcomeItem.vue -ErrorAction SilentlyContinue
Remove-Item src/components/icons -Recurse -Force -ErrorAction SilentlyContinue
```

그 다음 수정 파일을 덮어쓰고 실행합니다.

```bash
pnpm install
pnpm dev
```

## 검증 명령

```bash
pnpm typecheck
pnpm build
pnpm preview
```

## 수동 QA

- `http://localhost:8000`으로 접속되는지 확인
- `/projects` 접속 확인
- `/projects/:projectId` 직접 접근 확인
- 존재하지 않는 `/projects/unknown` 접근 시 안내 화면 확인
- 모바일 폭에서 헤더 메뉴 열기/닫기 확인
- 키보드 Tab 이동 확인
- 이미지가 깨지지 않는지 확인
- 브라우저 새로고침 시 라우트가 유지되는지 확인

## 데이터 관련 주의

신규 Vue 프로젝트는 `portfolio-data-json` 저장소를 사용하지 않습니다.
데이터는 `src/data/projects.ts`, `src/data/skills.ts`, `src/data/careers.ts`, `src/data/about.ts`, `src/data/profile.ts`에 포함되어 있습니다.
기존 React v1이 살아 있는 동안에만 `portfolio-data-json`을 유지하면 됩니다.
