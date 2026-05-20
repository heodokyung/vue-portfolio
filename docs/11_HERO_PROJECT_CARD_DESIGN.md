# 11. Hero / ProjectCard 1차 디자인 고도화

## 작업 목적

이번 단계는 과한 애니메이션이나 클론코딩 느낌을 피하고, 현업형 UI/Frontend Developer 포트폴리오에 맞는 첫인상을 만드는 것이 목적입니다.

핵심 키워드:

- 정돈됨
- 신뢰감
- 실무형
- 접근성
- 밝은 배경
- 네이비/차콜 텍스트
- 블루/민트 계열 포인트
- 카드형 UI
- 모바일 우선 반응형

## Hero 개선 내용

수정 파일:

```txt
src/views/HomeView.vue
```

변경 내용:

- `aria-labelledby`를 사용해 Hero 섹션의 제목 구조를 명확히 정리했습니다.
- 핵심 CTA를 `프로젝트 보기 / GitHub 보기 / Contact`로 정리했습니다.
- 실무 프로젝트 수, 대표 프로젝트 수, 핵심 역량 수를 요약 지표로 노출했습니다.
- 우측 패널을 단순 키워드 나열에서 `운영 가능한 UI 구조` 카드로 변경했습니다.
- 체크리스트형 항목을 추가해 웹표준, 공통 컴포넌트, 반응형 UI, SCSS 구조화 메시지가 더 명확해지도록 했습니다.
- 모바일에서는 우측 패널이 먼저 보이도록 배치해 첫 화면의 정보 밀도를 높였습니다.

## ProjectCard 개선 내용

수정 파일:

```txt
src/components/project/ProjectCard.vue
src/utils/text.ts
```

변경 내용:

- 카드 클릭 영역에 `aria-label`을 추가했습니다.
- `Featured` 플래그를 이미지 상단에 표시했습니다.
- 플랫폼, 카테고리, 기간 정보를 카드 상단 메타로 정리했습니다.
- 회사명이 있는 프로젝트는 제목 위에 회사명을 노출합니다.
- 기여도 데이터가 있는 경우 카드 하단에 `기여 100%` 형태로 표시합니다.
- 모바일 프로젝트 이미지는 카드 안에서 과하게 잘리지 않도록 별도 스타일을 적용했습니다.
- hover/focus-visible 상태를 함께 고려해 마우스와 키보드 사용자 모두 상태 변화를 확인할 수 있게 했습니다.

## AppButton 개선 내용

수정 파일:

```txt
src/components/common/AppButton.vue
```

변경 내용:

- `http` 링크만 새 창으로 열리도록 수정했습니다.
- `mailto:` 링크는 현재 창에서 기본 메일 클라이언트로 연결되도록 조정했습니다.
- 버튼 스타일에 border/box-shadow/transition을 정리했습니다.

## 검증 결과

다음 명령을 실행해 통과했습니다.

```bash
npm run lint
npm run typecheck
npm run build
npm run check
```

빌드 결과:

```txt
dist/index.html
dist/assets/index-*.css
dist/assets/index-*.js
```

## 다음 디자인 고도화 후보

1. 상세 페이지 상단 Hero를 platform별로 더 다르게 보이도록 분기
2. 대표 프로젝트 4~6개를 실제 문제 해결형 문구로 재작성
3. ProjectCard 이미지 비율과 썸네일 품질 정리
4. Career Summary를 타임라인형 UI로 개선
5. Contact 섹션을 메인 하단에 별도 추가
