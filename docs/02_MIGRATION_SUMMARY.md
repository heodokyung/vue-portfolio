# 데이터 이관 요약

## 이관한 데이터

- `portfolio_project.json` → `src/data/projects.ts`
- `portfolio_skill.json` → `src/data/skills.ts`
- `portfolio_work.json` → `src/data/careers.ts`
- `portfolio_about.json` → `src/data/about.ts`
- 프로젝트 썸네일 → `public/assets/portfolio/thumb_img_project`
- 스킬 아이콘 → `public/assets/portfolio/thumb_img_skill`

## 자동 보정한 항목

- `persent` → `contribution`
- `leng` → `locale`
- `gubun` → `role`, `tags`로 분리
- `type` → `platform`
- HTML `<br />` 포함 제목 → 일반 텍스트로 정리
- 중복 `m_themarket` ID → `m_themarket_vue3`, `m_themarket_operation`으로 분리

## 확인 필요

현재 각 프로젝트의 `problem`, `solution`, `result`는 구조 확인용 기본 문장이다.
실제 포트폴리오 완성도를 높이려면 대표 프로젝트부터 케이스 스터디 문장으로 교체해야 한다.
