# 방향 결정 문서

## 결론

신규 포트폴리오는 `Vue 3 + Vite + TypeScript`로 새로 시작한다.
기존 `react-portfolio`는 삭제하지 않고 `v1 legacy`로 보관한다.

## 이유

1. 기존 React 코드는 CRA 기반이고 상세 페이지가 37개 개별 파일로 분리되어 있어 덮어쓰기 리뉴얼 비용이 크다.
2. 이번 포트폴리오는 복잡한 상태 관리보다 데이터 구조, UI 컴포넌트, 디자인 시스템이 중요하다.
3. Vue SFC 구조는 UI/SCSS 중심 작업에 적합하며, 도경님의 현재 실무 방향과도 잘 맞는다.
4. React/Vue 두 버전을 동시에 운영하지 않고, 신규 Vue 포트폴리오만 운영본으로 사용한다.

## 기존 React 포트폴리오 처리

- 삭제하지 않는다.
- README 상단에 `Legacy v1` 표시를 추가한다.
- 신규 배포 완료 후 기존 배포 링크는 신규 포트폴리오로 교체한다.
- 필요하면 GitHub에서 archive 처리한다.

## portfolio-data-json 처리

- 기존 React v1이 public JSON을 참조한다면 저장소는 당장 삭제하지 않는다.
- 신규 Vue 포트폴리오는 외부 JSON 저장소를 참조하지 않는다.
- 신규 Vue 포트폴리오 안정화 후 기존 React v1을 archive/private 처리하면 `portfolio-data-json`도 archive/private 전환한다.
