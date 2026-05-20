# 13. Hero / ProjectCard 개선 반영 상태

## 1. 이번 라운드 반영 범위

이번 ZIP에는 이전 라운드에서 만든 Hero 디자인 고도화와 ProjectCard UI 개선 파일을 다시 포함했다.
Cloudflare 배포가 npm install 단계에서 막혀 실제 화면 확인이 되지 않았기 때문에, 배포 안정화 파일과 함께 다시 전달한다.

## 2. 포함된 주요 파일

```txt
src/views/HomeView.vue
src/components/project/ProjectCard.vue
src/components/common/AppButton.vue
src/utils/text.ts
```

## 3. Hero 개선 요약

- 첫 화면 문구를 현업형 UI/Frontend Developer 포트폴리오 방향으로 정리했다.
- GitHub / 프로젝트 보기 / Contact CTA를 배치했다.
- 총 프로젝트 수, 대표 프로젝트 수, 핵심 역량 수를 시각적으로 보여준다.
- 웹표준, 접근성, 반응형, SCSS 구조화, Vue/React 경험을 강조하는 문장 구조로 정리했다.
- 모바일에서 CTA 버튼과 요약 패널이 세로로 자연스럽게 쌓이도록 구성했다.

## 4. ProjectCard 개선 요약

- Featured 프로젝트 표시를 추가했다.
- 플랫폼, 카테고리, 기간, 회사, 기여도 정보를 카드 안에서 확인할 수 있게 했다.
- 이미지 alt가 비어 있지 않도록 유지했다.
- 카드 hover와 focus-visible 상태를 보강했다.
- 모바일에서 이미지 비율과 카드 여백이 무너지지 않도록 정리했다.

## 5. 다음 디자인 고도화 방향

다음 단계에서는 화면의 기본 구조를 유지하면서 아래 순서로 고도화하는 것이 안전하다.

1. 상세 페이지 상단 Hero형 프로젝트 요약 영역 개선
2. Problem / Solution / Result 영역을 케이스 스터디 카드 구조로 개선
3. web / mobile / responsive 플랫폼별 갤러리 레이아웃 분기
4. 대표 프로젝트 4~6개 문구를 실제 문제 해결 중심으로 재작성
5. 모바일 360px / 390px / 430px 기준 QA
