# 26. One Page / Legacy Motion / Detail UX 개선

## 수정 요약

이번 라운드는 사용자의 피드백을 기준으로 “구조는 좋아졌지만 화면의 매력과 정체성이 약하다”는 문제를 먼저 해결하는 방향으로 진행했다.

반영 범위:

- 홈을 단순 랜딩이 아니라 `Identity / Projects / Work / Skills / About / Guide / Contact`가 이어지는 원페이지 구조로 재구성
- 기존 React legacy 포트폴리오의 Lottie JSON 3종 이관
- 경력 섹션에는 자전거 모션, 기술/학습 섹션에는 코딩/노트형 모션 적용
- Header 메뉴를 `/projects`, `/about` 중심이 아니라 홈 섹션 앵커 중심으로 변경
- 상세 페이지에서 “이전 목록 위치로” 버튼 추가
- 라우터 스크롤 복원 로직을 route 단위 저장 방식으로 개선
- 모바일 상세 이미지는 CSS scroll-snap 기반 스와이프 갤러리로 변경
- 웹 상세 이미지는 브라우저 프레임 기반의 lead + grid 갤러리로 개선
- 같은 유형의 프로젝트는 회사/카테고리/플랫폼 점수 기반으로 정렬
- 상세 좌측 sticky 영역에 Overview / 문제·해결 / 담당 범위 / 이미지 / 관련 프로젝트 / Guide 링크 추가

## 수정 파일 목록

```txt
package.json
README.md
src/components/common/AppLottieMotion.vue
src/types/lottie-web.d.ts
src/views/HomeView.vue
src/views/ProjectDetailView.vue
src/components/project/ProjectDetailTemplate.vue
src/components/project/ProjectGallery.vue
src/components/layout/AppHeader.vue
src/components/layout/AppFooter.vue
src/router/index.ts
public/assets/lottie/career-road.json
public/assets/lottie/skill-coding.json
public/assets/lottie/about-note.json
docs/26_ONE_PAGE_LEGACY_MOTION_DETAIL_UX.md
```

## 파일별 변경 이유

### package.json

`lottie-web` 의존성을 추가했다. 기존 legacy에서 사용하던 Lottie JSON을 Vue 환경에서 재생하기 위한 최소 의존성이다.

```json
"lottie-web": "5.12.2"
```

### src/components/common/AppLottieMotion.vue

Lottie JSON을 공통으로 재생하기 위한 컴포넌트다. 동적 import를 사용해 필요한 시점에만 `lottie-web`을 불러온다.

### src/views/HomeView.vue

홈을 원페이지 구조로 재구성했다. 이제 홈에서 포지셔닝, 프로젝트, 경력, 기술, 자격/학습, 가이드, 연락까지 한 흐름으로 확인할 수 있다.

### src/components/project/ProjectGallery.vue

- 모바일 프로젝트: 좌우 스와이프 가능한 `scroll-snap` 갤러리
- 웹 프로젝트: 첫 이미지는 크게, 나머지는 브라우저 프레임 카드로 표시

### src/router/index.ts

상세 페이지 진입 전 route별 스크롤 위치를 저장하고, 상세에서 이전 화면으로 돌아갈 때 저장 위치를 복원하도록 개선했다.

### src/components/project/ProjectDetailTemplate.vue

- “프로젝트 목록” 대신 “이전 목록 위치로” 버튼 제공
- 좌측 sticky 영역에 상세 섹션 바로가기와 Guide 링크 추가
- 같은 유형 프로젝트의 연결 이유 표시

## 사용자가 반영해야 할 사항

이번 라운드는 `lottie-web` 의존성이 추가되었으므로 ZIP 반영 후 반드시 의존성을 다시 설치해야 한다.

```bash
corepack enable
pnpm install
pnpm run check
```

Cloudflare Pages는 기존 설정을 유지한다.

```txt
Build command: pnpm install --no-frozen-lockfile && pnpm run build
Build output directory: dist
NODE_VERSION=22.13.0
PNPM_VERSION=10.11.1
SKIP_DEPENDENCY_INSTALL=true
```

## 수동 QA 체크리스트

- 홈 Header 메뉴가 각 섹션으로 자연스럽게 이동하는지
- Home 하나만 봐도 경력 전체 흐름이 보이는지
- 경력/기술/학습 Lottie가 과하지 않고 섹션 의미와 연결되는지
- 프로젝트 상세에서 `이전 목록 위치로` 클릭 시 상세 진입 전 위치로 돌아가는지
- 모바일 상세 갤러리가 좌우 스와이프되는지
- 웹 상세 갤러리의 첫 이미지가 충분히 크게 보이는지
- 관련 프로젝트에 “같은 회사/서비스”, “Mobile · 실무”처럼 구분 이유가 보이는지
- 좌측 sticky 메뉴에서 Gallery, Related 등으로 이동되는지

## 남은 리스크

- Lottie 모션은 사용자 취향에 따라 속도/크기 조정이 필요할 수 있다.
- 실제 실기기에서 스크롤 복원은 브라우저별 동작 차이가 있을 수 있어 QA가 필요하다.
- 홈에 모든 정보를 담는 구조는 정보량이 많아질 수 있으므로, 다음 라운드에서 섹션 밀도와 여백을 다시 조정하는 것이 좋다.

## 다음 단계

1. ZIP 반영 후 `pnpm install` 및 `pnpm run check`
2. PC/모바일 실제 화면 캡처 확인
3. Hero와 Project Board의 시각 밀도 조정
4. Lottie 크기/속도 미세 조정
5. 대표 프로젝트별 상세 문구에 실제 문제 해결 사례 추가
