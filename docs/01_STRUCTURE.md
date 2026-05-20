# 프로젝트 구조

```txt
vue-portfolio/
  public/
    assets/portfolio/
      thumb_img_project/
      thumb_img_skill/
  src/
    components/
      common/
      layout/
      project/
    data/
    router/
    styles/
    types/
    utils/
    views/
```

## 주요 폴더

- `src/data`: 기존 JSON 데이터를 TypeScript 데이터로 이관한 영역
- `src/types`: 포트폴리오 데이터 타입 정의
- `src/components/common`: 버튼, 카드, 섹션, 타이틀, 태그 등 공통 UI
- `src/components/project`: 프로젝트 목록/상세 전용 컴포넌트
- `src/views`: 라우트 단위 페이지
- `public/assets/portfolio`: 기존 썸네일 이미지 이관 영역

## 라우트

```txt
/                 HomeView
/projects         ProjectsView
/projects/:id     ProjectDetailView
/about            AboutView
404               NotFoundView
```
