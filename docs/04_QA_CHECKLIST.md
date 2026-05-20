# QA 체크리스트

## 설치/빌드

```bash
pnpm install
pnpm typecheck
pnpm build
pnpm preview
```

## 화면 QA

- `/` 홈 화면이 정상 노출되는가?
- `/projects` 필터 버튼이 키보드와 마우스로 모두 동작하는가?
- `/projects/:projectId` 직접 접근과 새로고침이 가능한가?
- 존재하지 않는 프로젝트 ID에서 안내 화면이 노출되는가?
- 모바일 360px, 태블릿 768px, PC 1280px에서 레이아웃이 깨지지 않는가?

## 접근성 QA

- Tab 키로 헤더 메뉴, 필터, 카드 링크 이동이 가능한가?
- 모바일 메뉴 버튼에 `aria-expanded` 값이 변경되는가?
- 필터 버튼에 `aria-pressed` 값이 변경되는가?
- 이미지 alt가 의미 있게 들어가 있는가?
- 색 대비가 충분한가?

## 데이터 QA

- 중복 ID가 없는가?
- 모든 프로젝트가 `/projects/:id`로 접근 가능한가?
- 썸네일 파일 경로가 깨지지 않는가?
- legacy React v1에서 쓰던 데이터와 누락된 프로젝트가 없는가?
