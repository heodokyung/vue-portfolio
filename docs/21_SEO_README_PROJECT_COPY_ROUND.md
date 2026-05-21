# 21. SEO / README / 프로젝트 문구 보강 라운드

## 작업 요약

이번 라운드에서는 다음 작업을 진행했다.

1. GitHub 저장소 README를 운영 문서형으로 정리.
2. `index.html`에 기본 SEO, Open Graph, Twitter 메타 태그 추가.
3. Vue Router 라우트 이동 시 `document.title`, description, OG/Twitter 메타 정보를 동기화하도록 개선.
4. 해시 이동 시 `prefers-reduced-motion` 사용자의 모션 부담을 줄이도록 보정.
5. 주요 비대표 실무 프로젝트 9건의 상세 문구를 기존 이관 문구에서 실무 설명형 문구로 보강.
6. 공개 가능한 실제 스크린샷이 아직 없는 프로젝트를 위해 media caption에 보강 기준을 명시.

## 수정 파일 목록

```txt
README.md
index.html
src/router/index.ts
src/data/projects.ts
docs/21_SEO_README_PROJECT_COPY_ROUND.md
docs/22_LEGACY_AND_SCREENSHOT_NEXT_GUIDE.md
```

## 파일별 변경 이유

### README.md

GitHub 저장소 첫 화면에서 프로젝트의 목적, 기술 스택, 실행 방법, 배포 방법, 구조, SEO/접근성 기준을 바로 확인할 수 있도록 정리했다.

특히 다음 내용을 명확히 했다.

- pnpm 기준 프로젝트.
- Cloudflare Pages 배포 명령.
- `pnpm run dev`는 로컬 실행용이며 배포 명령이 아님.
- 프로젝트 상세 페이지는 개별 파일이 아니라 공통 템플릿 기반.
- 기존 React v1과 `portfolio-data-json`은 안정화 이후 archive/private 검토.

### index.html

검색/공유 기본 품질을 위해 아래 메타 정보를 추가했다.

- `robots`
- `og:type`
- `og:locale`
- `og:site_name`
- `og:title`
- `og:description`
- `og:url`
- `twitter:card`
- `twitter:title`
- `twitter:description`

운영 도메인과 대표 OG 이미지는 아직 확정 정보가 없으므로 추가하지 않았다.

### src/router/index.ts

라우트 이동 시 페이지별 메타 정보를 갱신하도록 개선했다.

반영 기준:

- `/` : 허도경 UI/Frontend Developer 포트폴리오.
- `/projects` : 프로젝트 아카이브 설명.
- `/about` : 경력/기술/작업 기준 설명.
- `/projects/:projectId` : 프로젝트 제목과 summary 기반 설명.
- 404 : 페이지 없음 안내.

또한 `#contact` 같은 해시 이동 시 사용자의 `prefers-reduced-motion` 설정이 켜져 있으면 smooth scroll 대신 auto scroll을 사용하도록 했다.

### src/data/projects.ts

아래 9개 프로젝트의 문구를 보강했다.

```txt
w_finnq_v2
m_hana_app
w_kebhana_company2
w_kebhana_combine
w_kebhana_company
w_mirae
w_kebhana
w_han
m_han
```

기존에는 다수 프로젝트에 아래와 같은 임시 이관 문구가 남아 있었다.

```txt
기존 포트폴리오 데이터에서 1차 이관한 항목으로...
```

이번 라운드에서는 확인 가능한 프로젝트명, 도메인, 플랫폼, 역할, 기술 스택 기준으로 정성 설명을 보강했다. 확인되지 않은 정량 성과, 매출, 전환율, 성능 수치 등은 추가하지 않았다.

## 사용자가 반영해야 할 사항

ZIP을 반영한 뒤 아래 명령으로 확인한다.

```bash
corepack enable
pnpm install
pnpm run check
```

`pnpm-lock.yaml`이 새로 생성되거나 변경되면 함께 커밋한다.

```bash
git add pnpm-lock.yaml
```

## 검증 명령

작업 환경에서는 pnpm이 설치되어 있지 않아 npm script로 동일 소스를 검증했다.

```bash
npm run lint
npm run typecheck
npm run build
```

결과:

```txt
lint       통과
typecheck  통과
build      통과
```

## 수동 QA 체크리스트

- `/` 진입 시 브라우저 탭 제목이 올바른지 확인.
- `/projects` 진입 시 브라우저 탭 제목이 `Projects | Heo Do Kyung Portfolio`로 바뀌는지 확인.
- `/about` 진입 시 브라우저 탭 제목이 `About | Heo Do Kyung Portfolio`로 바뀌는지 확인.
- `/projects/w_finnq_v2` 등 보강한 상세 페이지에서 임시 이관 문구가 사라졌는지 확인.
- 브라우저 개발자 도구 Elements에서 description/og:title/og:description이 라우트별로 갱신되는지 확인.
- Contact 링크 이동 시 헤더에 섹션 제목이 가려지지 않는지 확인.

## 남은 리스크

- 실제 운영 도메인이 확정되지 않아 canonical URL은 아직 추가하지 않았다.
- 대표 OG 이미지는 아직 없다. 공개 가능한 대표 이미지가 확정되면 `/public/og-image.png`를 추가하고 메타 태그에 연결하는 것이 좋다.
- 전체 37개 중 일부 과거 프로젝트에는 아직 임시 이관 문구가 남아 있다. 다음 라운드에서 오래된 브랜드/학습 프로젝트 문구까지 정리할 수 있다.
