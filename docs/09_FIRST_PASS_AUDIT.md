# 1차 기본 골격 생성/설정 안정화 작업 기록

## 수정 요약

첨부된 신규 Vue 포트폴리오 프로젝트 기준으로 전체 구조, 빌드 설정, 라우팅, 공통 컴포넌트 분리, 데이터 구조, Cloudflare Pages 배포 가능성을 1차 점검했습니다.
이번 단계에서는 디자인 대개편보다 운영 전 안정화에 필요한 최소 수정에 집중했습니다.

## 진단 결과

### 정상으로 판단한 부분

- `src/components/common`, `layout`, `project`, `data`, `router`, `styles`, `types`, `utils`, `views` 구조가 현재 목표 구조와 잘 맞습니다.
- 프로젝트 상세는 프로젝트별 파일을 만들지 않고 `ProjectDetailView.vue` 하나에서 데이터 기반으로 렌더링하는 방향으로 구현되어 있습니다.
- 프로젝트 데이터 37건의 `id` 중복은 없었고, 현재 데이터에서 참조하는 썸네일/미디어 경로도 모두 존재했습니다.
- 외부 JSON 저장소 런타임 의존 없이 `src/data/*.ts` 기반으로 초기 운영이 가능합니다.
- `npm run typecheck`와 `npm run build`는 통과했습니다.

### 우선 수정이 필요했던 부분

- 프로젝트는 npm 기준으로 진행해야 하는데 README/docs가 pnpm 기준으로 남아 있었습니다.
- ESLint 9 flat config에서 `--ext` 옵션이 더 이상 유효하지 않아 `npm run lint`가 실패했습니다.
- Cloudflare Pages에서 `/projects/:projectId` 같은 history mode 직접 접근을 안정적으로 처리하기 위한 `_redirects` 파일이 없었습니다.
- `ProjectCategory`에는 `study`가 있는데 필터 UI에는 `study`가 없어 향후 학습 프로젝트 추가 시 필터 확장성이 떨어졌습니다.
- 상세 화면 로직과 상세 화면 UI가 같은 View에 섞여 있어 다음 디자인 고도화 단계에서 파일이 커질 가능성이 있었습니다.
- `public/assets/portfolio/thumb_img_project/h_w.tt`는 프로젝트에서 참조되지 않는 텍스트 파일이며, 개인 자기소개서성 내용으로 보이는 텍스트가 포함되어 있어 삭제 권장 대상으로 분류했습니다.
- `public/assets/portfolio/thumb_img_project/#Uc81c#Ubaa9-#Uc5c6#Uc74c-2.png`도 현재 데이터에서 참조되지 않는 파일입니다.

## 수정 파일 목록

- `.gitignore`
- `package.json`
- `package-lock.json`
- `eslint.config.js`
- `README.md`
- `public/_redirects`
- `scripts/cleanup-starter-files.sh`
- `scripts/cleanup-starter-files.ps1`
- `src/types/portfolio.ts`
- `src/components/layout/AppHeader.vue`
- `src/components/project/ProjectFilter.vue`
- `src/components/project/ProjectDetailTemplate.vue`
- `src/views/ProjectsView.vue`
- `src/views/ProjectDetailView.vue`
- `src/styles/_tokens.scss`
- `src/styles/_a11y.scss`
- `docs/03_NEXT_STEPS.md`
- `docs/04_QA_CHECKLIST.md`
- `docs/05_FILE_LIST.md`
- `docs/06_VITE_CONFIG_FIX.md`
- `docs/07_APPLY_AND_QA.md`
- `docs/08_TSCONFIG_PORT_FIX_V2.md`
- `docs/09_FIRST_PASS_AUDIT.md`

## 파일별 변경 이유

### .gitignore

- npm 기준 프로젝트이므로 `package-lock.json`이 커밋될 수 있도록 ignore 대상에서 제거했습니다.
- `node_modules`, `dist`, 환경 파일, 키스토어류는 계속 제외합니다.

### package.json

- npm 기준으로 `npm run lint`가 동작하도록 ESLint 9 flat config에서 지원하지 않는 `--ext` 옵션을 제거했습니다.
- 신규 의존성은 추가하지 않았습니다.

### package-lock.json

- npm 기준 프로젝트로 운영하기 위해 설치 재현성을 보강했습니다.
- Cloudflare Pages도 npm 기준이면 `package-lock.json`을 기준으로 설치할 수 있습니다.

### eslint.config.js

- 기존 데이터 이관 파일이 JSON-like TypeScript 형태라 Prettier 경고가 대량 발생했습니다.
- 1차 안정화 단계에서는 전체 데이터 포맷 변경으로 diff를 키우지 않기 위해 `prettier/prettier`는 lint에서 제외하고, 포맷은 `npm run format`에서 별도로 다루도록 분리했습니다.
- 선택 prop 기본값 관련 경고도 현재 공통 버튼 설계와 맞지 않아 1차에서는 제외했습니다.

### public/_redirects

- Cloudflare Pages에서 Vue Router history mode 직접 접근 시 `index.html`로 fallback되도록 추가했습니다.
- `/projects`, `/projects/:projectId`, `/about`, 존재하지 않는 경로의 앱 내부 404 처리 안정성을 높입니다.

### src/components/project/ProjectDetailTemplate.vue

- 상세 화면의 UI 템플릿을 View에서 분리했습니다.
- `ProjectDetailView.vue`는 라우트 파라미터 기반 데이터 선택에 집중하고, 상세 UI는 공통 템플릿이 담당하도록 변경했습니다.
- 향후 web/mobile/responsive별 상세 디자인 분기를 이 컴포넌트 안에서 확장할 수 있습니다.

### src/views/ProjectDetailView.vue

- 데이터 조회와 존재하지 않는 프로젝트 처리만 남겼습니다.
- 실제 상세 UI는 `ProjectDetailTemplate`으로 위임했습니다.

### src/types/portfolio.ts

- `ProjectFilterValue`를 `ProjectCategory | ProjectPlatform` 기반으로 확장했습니다.
- 향후 외부 링크, GitHub, case study 링크를 프로젝트 데이터에 추가할 수 있도록 `links?: ProjectLink[]`를 `Project` 타입에 추가했습니다.

### src/components/project/ProjectFilter.vue / src/views/ProjectsView.vue

- `study` 필터를 추가했습니다.
- category 필터와 platform 필터를 분리해 향후 데이터 확장 시 조건이 꼬이지 않도록 정리했습니다.

### src/components/layout/AppHeader.vue

- 모바일 메뉴 버튼의 스크린리더 문구를 열림/닫힘 상태에 맞게 변경했습니다.
- Escape 키로 모바일 메뉴를 닫을 수 있도록 보강했습니다.

### src/styles/_tokens.scss / src/styles/_a11y.scss

- 향후 공통 인터랙션 기준을 잡기 위해 transition token을 추가했습니다.
- `prefers-reduced-motion: reduce` 사용자의 모션 감소 설정을 존중하는 전역 접근성 CSS를 추가했습니다.

### README.md / docs 문서

- npm 기준 명령으로 문서를 통일했습니다.
- Cloudflare Pages build command도 `npm run build` 기준으로 정리했습니다.
- 신규 파일과 1차 점검 내용을 문서화했습니다.

### cleanup scripts

- Vue starter 잔여 파일 삭제 스크립트에 미사용/민감 가능 자산 삭제 후보를 추가했습니다.
- 수정 파일 ZIP은 삭제를 직접 표현하기 어렵기 때문에, 실제 반영 후 아래 명령 또는 cleanup script로 삭제하세요.

```bash
rm -f 'public/assets/portfolio/thumb_img_project/h_w.tt'
rm -f 'public/assets/portfolio/thumb_img_project/#Uc81c#Ubaa9-#Uc5c6#Uc74c-2.png'
```

PowerShell:

```powershell
Remove-Item 'public/assets/portfolio/thumb_img_project/h_w.tt' -Force -ErrorAction SilentlyContinue
Remove-Item 'public/assets/portfolio/thumb_img_project/#Uc81c#Ubaa9-#Uc5c6#Uc74c-2.png' -Force -ErrorAction SilentlyContinue
```

## 빌드/검증 결과

아래 명령을 실제 실행했습니다.

```bash
npm install --ignore-scripts --no-audit --no-fund
npm run lint
npm run typecheck
npm run build
```

결과:

- `npm run lint`: 통과
- `npm run typecheck`: 통과
- `npm run build`: 통과
- production build output: `dist`

## 수동 QA 체크리스트

- `npm run dev` 후 `http://localhost:8000` 접속
- `/` 홈 화면 확인
- `/projects` 프로젝트 목록 확인
- 프로젝트 카드 클릭 후 `/projects/:projectId` 상세 진입 확인
- 브라우저 주소창에서 `/projects/m_themarket_vue3` 직접 입력 후 새로고침 확인
- 존재하지 않는 `/projects/unknown` 접근 시 프로젝트 없음 안내 확인
- 존재하지 않는 `/unknown` 접근 시 앱 내부 404 화면 확인
- 모바일 폭 360px에서 헤더 메뉴 열기/닫기 확인
- 모바일 메뉴 버튼에서 `aria-expanded` 값 변경 확인
- 모바일 메뉴 열린 상태에서 Escape 키로 닫히는지 확인
- 프로젝트 필터 `전체/실무/개인/학습/Web/Mobile/Responsive` 클릭 확인
- Tab 키로 헤더, 버튼, 프로젝트 카드, 필터 버튼 이동 확인
- 이미지 깨짐 여부 확인

## Cloudflare Pages 설정

- Framework preset: `Vue`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Environment variable: `NODE_VERSION=22.13.0`

`public/_redirects`가 포함되므로 Vite 빌드 후 `dist/_redirects`로 복사됩니다.

## 남은 리스크/주의사항

- 대표 프로젝트의 `problem`, `solution`, `result`는 아직 공통 기본 문장에 가깝습니다. 실무형 포트폴리오 완성도를 위해 대표 4~6개부터 케이스 스터디 문장으로 교체해야 합니다.
- 현재 디자인은 기본 골격 단계입니다. Hero, 프로젝트 카드, 상세 이미지 레이아웃은 다음 단계에서 고도화하는 것이 좋습니다.
- `h_w.tt`와 미사용 PNG는 수정 파일 ZIP만으로는 삭제가 자동 반영되지 않습니다. cleanup script 또는 `git rm`으로 직접 제거해야 합니다.
- `npm run format`을 실행하면 데이터 이관 파일까지 대량 포맷 변경될 수 있으므로, 실제 운영 repo에서는 별도 커밋으로 분리하는 것을 권장합니다.

## 다음 작업 단계

1. GitHub 신규 repo 생성 후 이번 수정 파일 반영
2. 미사용/민감 가능 자산 2개 삭제 커밋
3. Cloudflare Pages에서 npm 기준 배포 확인
4. Hero 디자인 고도화
5. ProjectCard UI 고도화
6. ProjectDetailTemplate에서 web/mobile/responsive별 시각 분기 강화
7. 대표 프로젝트 4~6개 문구를 케이스 스터디 형태로 보강
8. 모바일/반응형 QA
9. 기존 React 포트폴리오 README에 Legacy 표시
