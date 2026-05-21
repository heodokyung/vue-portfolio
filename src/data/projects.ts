import type { Project } from '@/types/portfolio'

export const projects = [
  {
    "id": "m_themarket_vue3",
    "legacyId": "m_themarket",
    "title": "CJ The Market Vue3 주요 화면 변경 개편 1차",
    "company": "CJ",
    "platform": "mobile",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2024-08-30",
      "end": null,
      "label": "2024.8.30 ~ 현재"
    },
    "contribution": 80,
    "role": [
      "UI Development"
    ],
    "stack": [
      "Vue 3",
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "CJ The Market 모바일 Vue3 개편 구간에서 주요 화면 UI 구현을 담당했습니다. 운영 중인 커머스 서비스의 기존 흐름을 유지하면서, 반복 사용되는 상품·이벤트·탭 UI를 Vue3 화면 구조에 맞춰 안정적으로 정리한 프로젝트입니다.",
    "problem": "운영 중인 커머스 서비스는 상품 탐색, 이벤트, 구매 전환 흐름이 긴밀하게 연결되어 있어 작은 UI 변경도 기존 화면 안정성에 영향을 줄 수 있었습니다.",
    "solution": [
      "Vue3 화면 구조에 맞춰 마크업과 SCSS 범위를 명확히 분리하고, 반복되는 UI 패턴을 재사용 가능한 단위로 정리했습니다.",
      "상품 리스트, 탭, 이벤트 영역처럼 운영 변경이 잦은 UI는 모바일 터치 영역과 텍스트 가독성을 함께 고려해 구현했습니다.",
      "기존 운영 화면과 신규 개편 화면의 스타일 충돌을 줄이기 위해 컴포넌트 단위 클래스 구조와 반응형 기준을 정리했습니다."
    ],
    "result": [
      "운영 서비스의 기존 UX를 유지하면서 Vue3 기반 주요 화면을 안정적으로 반영할 수 있는 UI 기반을 마련했습니다.",
      "상품·이벤트·탭 UI처럼 반복 요청이 많은 영역에서 재사용 가능한 구현 패턴을 확보했습니다.",
      "모바일 기준의 터치 영역, 이미지 비율, 텍스트 말줄임, 반응형 QA 포인트를 함께 정리했습니다."
    ],
    "tags": [
      "Vue 3",
      "SCSS",
      "Mobile UI",
      "운영개편",
      "반응형"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/cj_themarket_m.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/cj_themarket_m.png",
        "alt": "CJ The Market Vue3 주요 화면 변경 개편 1차 대표 이미지",
        "caption": "CJ The Market Vue3 주요 화면 변경 개편 1차 대표 이미지입니다. 프로젝트의 화면 유형과 담당 범위를 빠르게 확인할 수 있도록 정리했습니다."
      }
    ],
    "featured": true,
    "isNew": false
  },
  {
    "id": "w_themarket",
    "legacyId": null,
    "title": "CJ The Market 웹 사이트 UI개선 및 운영",
    "company": "CJ",
    "platform": "web",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2022-11-01",
      "end": null,
      "label": "2022.11.01 ~ 현재"
    },
    "contribution": 30,
    "role": [
      "UI Development"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "CJ The Market 웹 운영 프로젝트에서 기획전, 이벤트, 상품 노출 UI 개선을 담당했습니다. 단발성 페이지 제작에 그치지 않고 운영자가 반복적으로 요청하는 화면 패턴을 안정적으로 유지할 수 있도록 웹표준과 SCSS 구조를 중심으로 작업했습니다.",
    "problem": "커머스 웹 운영은 프로모션마다 요구사항이 달라 화면 단위 수정이 반복되고, 이 과정에서 UI 일관성과 유지보수성이 쉽게 흔들릴 수 있었습니다.",
    "solution": [
      "기획전·상품 리스트·배너 영역의 공통 패턴을 기준으로 마크업 구조와 SCSS 책임 범위를 정리했습니다.",
      "브라우저별 기본 동작, 이미지 비율, 콘텐츠 길이 차이를 고려해 운영 화면이 깨지지 않도록 방어적인 CSS를 적용했습니다.",
      "PC 웹에서 정보 탐색이 자연스럽게 이어지도록 섹션 간 여백, 카드형 콘텐츠, 버튼/링크 상태를 일관되게 구성했습니다."
    ],
    "result": [
      "반복 운영 요청에 대응하기 쉬운 웹 UI 작업 기준을 만들었습니다.",
      "프로모션별로 달라지는 콘텐츠에도 레이아웃이 안정적으로 유지되도록 구현했습니다.",
      "웹표준 기반 마크업과 SCSS 구조화 경험을 포트폴리오에서 설명할 수 있는 대표 운영 사례로 정리했습니다."
    ],
    "tags": [
      "Web UI",
      "SCSS",
      "운영",
      "커머스",
      "웹표준"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/cj_themarket_w.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/cj_themarket_w.png",
        "alt": "CJ The Market 웹 사이트 UI개선 및 운영 대표 이미지",
        "caption": "CJ The Market 웹 사이트 UI개선 및 운영 대표 이미지입니다. 프로젝트의 화면 유형과 담당 범위를 빠르게 확인할 수 있도록 정리했습니다."
      }
    ],
    "featured": true,
    "isNew": false
  },
  {
    "id": "m_themarket_operation",
    "legacyId": "m_themarket",
    "title": "CJ The Market 모바일 웹 UI개선 및 운영",
    "company": "CJ",
    "platform": "mobile",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2022-11-01",
      "end": "2024-08-30",
      "label": "2022.11.01 ~ 2024.8.30"
    },
    "contribution": 30,
    "role": [
      "UI Development"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "CJ The Market 모바일 웹 운영 프로젝트에서 이벤트, 상품, 프로모션 화면의 UI 개선을 담당했습니다. 현재 대표 프로젝트에서는 Vue3 개편 사례를 우선 노출하고, 이 항목은 운영 경험을 보완하는 아카이브 성격으로 정리했습니다.",
    "problem": "모바일 웹 운영 화면은 작은 화면 안에서 상품 정보, 프로모션 메시지, CTA가 함께 노출되어 콘텐츠 길이와 이미지 비율에 따라 레이아웃이 흔들릴 가능성이 있었습니다.",
    "solution": [
      "모바일 기준의 이미지 비율, 텍스트 말줄임, 버튼 터치 영역을 우선 확인하며 화면을 구현했습니다.",
      "운영 중인 기존 스타일과 충돌하지 않도록 페이지·컴포넌트 단위 클래스를 명확히 구분했습니다.",
      "프로모션별 콘텐츠 변경에 대응할 수 있도록 카드, 탭, 리스트 UI의 기본 구조를 안정적으로 유지했습니다."
    ],
    "result": [
      "모바일 커머스 운영 화면의 반복 수정 요청에 안정적으로 대응했습니다.",
      "작은 화면에서도 상품 탐색과 이벤트 정보 확인이 자연스럽게 이어지도록 UI 품질을 관리했습니다.",
      "현재 Vue3 개편 프로젝트로 이어지는 모바일 UI 운영 경험을 축적했습니다."
    ],
    "tags": [
      "Mobile Web",
      "SCSS",
      "운영",
      "커머스"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/cj_themarket_m.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/cj_themarket_m.png",
        "alt": "CJ The Market 모바일 웹 UI개선 및 운영 대표 이미지"
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "w_finnq_v3",
    "legacyId": null,
    "title": "Finnq 웹 사이트 React 전면 개편 및 운영",
    "company": "Finnq",
    "platform": "responsive",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2021-07-12",
      "end": "2022-09-16",
      "label": "2021.07.12 ~ 2022.09.16"
    },
    "contribution": 100,
    "role": [
      "UI Development",
      "Frontend"
    ],
    "stack": [
      "React",
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "Finnq 웹 사이트의 React 전면 개편과 운영을 담당했습니다. 금융 서비스 특성상 신뢰감 있는 화면 구조, 반응형 대응, 컴포넌트 기반 유지보수성을 함께 고려해 기존 웹 서비스를 새로운 프론트엔드 구조로 정리한 프로젝트입니다.",
    "problem": "금융 서비스 웹은 콘텐츠 신뢰도와 접근성이 중요하고, 전면 개편 이후에도 공지·상품·이벤트 등 운영 화면을 꾸준히 확장해야 했습니다.",
    "solution": [
      "React 기반 화면 구조에 맞춰 페이지와 UI 단위를 분리하고, 반복되는 콘텐츠 패턴을 컴포넌트 관점에서 정리했습니다.",
      "SCSS 구조를 정리해 금융 서비스에 필요한 차분한 톤, 명확한 정보 위계, 반응형 레이아웃을 일관되게 구현했습니다.",
      "운영 단계에서 콘텐츠가 추가되더라도 화면 균형이 유지되도록 카드, 리스트, 섹션 패턴을 재사용 가능한 형태로 구성했습니다."
    ],
    "result": [
      "React 기반 전면 개편 이후에도 운영 가능한 웹 UI 구조를 확보했습니다.",
      "금융 서비스에 필요한 명확한 정보 위계와 반응형 화면 품질을 유지했습니다.",
      "개편과 운영을 모두 경험한 대표 React 프로젝트로 포트폴리오 핵심 사례를 구성했습니다."
    ],
    "tags": [
      "React",
      "SCSS",
      "Responsive",
      "Finance",
      "운영개편"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/finnq_w_v2.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/finnq_w_v2.png",
        "alt": "Finnq 웹 사이트 React 전면 개편 및 운영 대표 이미지",
        "caption": "Finnq 웹 사이트 React 전면 개편 및 운영 대표 이미지입니다. 프로젝트의 화면 유형과 담당 범위를 빠르게 확인할 수 있도록 정리했습니다."
      }
    ],
    "featured": true,
    "isNew": false
  },
  {
    "id": "m_finnq_app_v2",
    "legacyId": null,
    "title": "Finnq App 3.0 전면 개편 및 서비스 운영",
    "company": "Finnq",
    "platform": "mobile",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2018-08-01",
      "end": "2022-09-16",
      "label": "2018.08.01 ~ 2022.09.16"
    },
    "contribution": 70,
    "role": [
      "UI Development",
      "Frontend"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript",
      "Hybrid App"
    ],
    "summary": "Finnq App 3.0 전면 개편과 서비스 운영에서 하이브리드 앱 UI 구현을 담당했습니다. 모바일 금융 앱의 화면 밀도, 터치 흐름, 운영 안정성을 고려해 앱 내부 웹뷰 기반 화면을 구축하고 지속적으로 개선했습니다.",
    "problem": "모바일 금융 앱은 작은 화면 안에서 인증, 상품, 안내, CTA가 함께 동작하기 때문에 화면 전환 흐름과 터치 사용성이 특히 중요했습니다.",
    "solution": [
      "하이브리드 앱 환경을 고려해 모바일 웹뷰에서 안정적으로 동작하는 HTML, SCSS, JavaScript 기반 UI를 구현했습니다.",
      "금융 앱 사용자가 핵심 정보를 빠르게 파악할 수 있도록 타이포그래피, 버튼, 리스트, 안내 영역의 위계를 정리했습니다.",
      "운영 중 추가되는 화면에서도 동일한 사용성을 유지할 수 있도록 반복 UI 패턴과 예외 케이스를 함께 관리했습니다."
    ],
    "result": [
      "모바일 금융 앱 전면 개편과 장기 운영을 함께 경험했습니다.",
      "웹뷰 환경의 제약을 고려한 모바일 UI 구현과 QA 대응 경험을 축적했습니다.",
      "앱 내부 화면의 정보 구조, 터치 영역, 운영 안정성을 함께 설명할 수 있는 대표 모바일 프로젝트로 정리했습니다."
    ],
    "tags": [
      "Hybrid App",
      "Mobile UI",
      "SCSS",
      "Finance",
      "운영"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/finnq_m.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/finnq_m.png",
        "alt": "Finnq App 3.0 전면 개편 및 서비스 운영 대표 이미지",
        "caption": "Finnq App 3.0 전면 개편 및 서비스 운영 대표 이미지입니다. 프로젝트의 화면 유형과 담당 범위를 빠르게 확인할 수 있도록 정리했습니다."
      }
    ],
    "featured": true,
    "isNew": false
  },
  {
    "id": "w_toy_netflix",
    "legacyId": null,
    "title": "개인프로젝트 - [React] Netflix Clone",
    "company": "개인프로젝트",
    "platform": "responsive",
    "category": "side",
    "locale": "etc",
    "period": {
      "start": "2022-07-18",
      "end": "2022-08-08",
      "label": "2022.07.18 ~ 2022.08.08"
    },
    "contribution": 100,
    "role": [
      "Frontend"
    ],
    "stack": [
      "React",
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "React 학습과 API 연동 흐름을 익히기 위해 제작한 개인 프로젝트입니다. 신규 포트폴리오에서는 클론 프로젝트가 대표 경험처럼 보이지 않도록 아카이브 영역에서 보조 사례로만 노출합니다.",
    "problem": "초기 개인 프로젝트는 화면 완성도는 보여줄 수 있지만, 현업형 포트폴리오의 핵심 메시지인 운영 경험과 문제 해결 능력을 설명하기에는 한계가 있었습니다.",
    "solution": [
      "React 컴포넌트 구성, API 데이터 렌더링, 목록 UI 구현 경험을 학습 목적의 사이드 프로젝트로 분리했습니다.",
      "대표 프로젝트에서는 제외하고, 전체 프로젝트 아카이브에서 프론트엔드 학습 이력을 보완하는 항목으로 정리했습니다."
    ],
    "result": [
      "React 기본 구조와 데이터 기반 UI 렌더링 경험을 축적했습니다.",
      "현업형 대표 프로젝트와 학습형 프로젝트의 노출 우선순위를 분리했습니다."
    ],
    "tags": [
      "React",
      "Side Project",
      "API",
      "학습"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/toy_netflix_list.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/toy_netflix_list.png",
        "alt": "개인프로젝트 - [React] Netflix Clone 대표 이미지"
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "w_toy_todo_list",
    "legacyId": null,
    "title": "개인프로젝트 - [React] Todo App",
    "company": "개인프로젝트",
    "platform": "responsive",
    "category": "side",
    "locale": "etc",
    "period": {
      "start": "2022-07-13",
      "end": "2022-07-19",
      "label": "2022.07.13 ~ 2022.07.19"
    },
    "contribution": 100,
    "role": [
      "Frontend"
    ],
    "stack": [
      "React",
      "HTML",
      "SCSS",
      "JavaScript",
      "Hybrid App"
    ],
    "summary": "개인프로젝트 - [React] Todo App 프로젝트에서 Frontend 역할을 담당했습니다. 기존 포트폴리오 데이터에서 1차 이관한 항목으로, 상세 성과 문장은 다음 단계에서 케이스 스터디 형태로 보강이 필요합니다.",
    "problem": "기존 상세 페이지는 프로젝트별 개별 파일로 분리되어 있어 유지보수 비용이 높았습니다.",
    "solution": [
      "프로젝트 데이터를 정규화해 공통 상세 템플릿에서 렌더링할 수 있도록 구성했습니다.",
      "플랫폼(web/mobile/responsive) 값에 따라 동일 상세 페이지 안에서 표현 방식을 달리할 수 있게 설계했습니다."
    ],
    "result": [
      "37개 상세 페이지를 데이터 기반 구조로 통합할 수 있는 기반을 마련했습니다.",
      "향후 프로젝트 추가 시 데이터만 추가하면 목록과 상세가 함께 갱신됩니다."
    ],
    "tags": [
      "Frontend",
      "Web",
      "Responsive",
      "Side Project"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/toy_todo_list.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/toy_todo_list.png",
        "alt": "개인프로젝트 - [React] Todo App 대표 이미지"
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "w_finnq_transmission",
    "legacyId": null,
    "title": "마이데이터 전송요구동의 인증 개발",
    "company": "마이데이터",
    "platform": "responsive",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2022-06-13",
      "end": "2022-06-17",
      "label": "2022.06.13 ~ 2022.06.17"
    },
    "contribution": 100,
    "role": [
      "Frontend"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "마이데이터 전송요구동의 인증 개발 프로젝트에서 금융 인증 흐름의 웹 UI 구현을 담당했습니다. 사용자가 민감한 동의 과정을 이해하고 진행할 수 있도록 단계별 정보 구조와 명확한 상태 표현을 중심으로 화면을 구성했습니다.",
    "problem": "마이데이터 동의·인증 화면은 사용자가 처리 단계를 명확히 이해해야 하며, 금융 서비스 특성상 모호한 문구나 불안정한 UI가 신뢰도 저하로 이어질 수 있었습니다.",
    "solution": [
      "동의, 인증, 완료 등 단계별 화면 흐름을 기준으로 정보 위계와 CTA 배치를 정리했습니다.",
      "금융권 웹 환경에서 요구되는 명확한 문구, 상태 표현, 예외 안내 영역을 고려해 UI를 구현했습니다.",
      "운영 중인 서비스와 연결되는 화면인 만큼 기존 스타일 체계와 충돌하지 않도록 마크업과 SCSS 범위를 관리했습니다."
    ],
    "result": [
      "민감한 인증 흐름을 사용자가 단계적으로 이해할 수 있는 UI 구조로 구현했습니다.",
      "금융 서비스의 신뢰도와 명확성을 고려한 화면 설계·구현 경험을 확보했습니다.",
      "React 운영 경험과 함께 금융 인증 도메인 UI 구현 역량을 보여주는 대표 사례로 정리했습니다."
    ],
    "tags": [
      "Finance",
      "인증",
      "MyData",
      "Responsive UI",
      "웹표준"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/w_finnq_transmission.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/w_finnq_transmission.png",
        "alt": "마이데이터 전송요구동의 인증 개발 대표 이미지",
        "caption": "마이데이터 전송요구동의 인증 개발 대표 이미지입니다. 프로젝트의 화면 유형과 담당 범위를 빠르게 확인할 수 있도록 정리했습니다."
      }
    ],
    "featured": true,
    "isNew": false
  },
  {
    "id": "w_toy_coin_list",
    "legacyId": null,
    "title": "개인프로젝트 - [React] 암호화폐 랭킹 사이트",
    "company": "개인프로젝트",
    "platform": "responsive",
    "category": "side",
    "locale": "etc",
    "period": {
      "start": "2022-04-01",
      "end": "2022-04-07",
      "label": "2022.04.01 ~ 2022.04.07"
    },
    "contribution": 100,
    "role": [
      "Frontend"
    ],
    "stack": [
      "React",
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "개인프로젝트 - [React] 암호화폐 랭킹 사이트 프로젝트에서 Frontend 역할을 담당했습니다. 기존 포트폴리오 데이터에서 1차 이관한 항목으로, 상세 성과 문장은 다음 단계에서 케이스 스터디 형태로 보강이 필요합니다.",
    "problem": "기존 상세 페이지는 프로젝트별 개별 파일로 분리되어 있어 유지보수 비용이 높았습니다.",
    "solution": [
      "프로젝트 데이터를 정규화해 공통 상세 템플릿에서 렌더링할 수 있도록 구성했습니다.",
      "플랫폼(web/mobile/responsive) 값에 따라 동일 상세 페이지 안에서 표현 방식을 달리할 수 있게 설계했습니다."
    ],
    "result": [
      "37개 상세 페이지를 데이터 기반 구조로 통합할 수 있는 기반을 마련했습니다.",
      "향후 프로젝트 추가 시 데이터만 추가하면 목록과 상세가 함께 갱신됩니다."
    ],
    "tags": [
      "Frontend",
      "Web",
      "Responsive",
      "Side Project"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/toy_coin_list.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/toy_coin_list.png",
        "alt": "개인프로젝트 - [React] 암호화폐 랭킹 사이트 대표 이미지"
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "w_finnq_v2",
    "legacyId": null,
    "title": "Finnq 웹 서비스 2.0 운영",
    "company": "Finnq",
    "platform": "responsive",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2018-08-01",
      "end": "2021-07-12",
      "label": "2018.08.01 ~ 2021.07.12"
    },
    "contribution": 80,
    "role": [
      "UI Development"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "Finnq 웹 서비스 2.0 운영 프로젝트에서 금융 상품, 이벤트, 공지 등 운영성 콘텐츠의 UI 개선을 담당했습니다. React 전면 개편 이전 단계의 운영 경험으로, 금융 서비스 웹에서 안정적인 마크업 구조와 반복 가능한 SCSS 패턴을 쌓은 프로젝트입니다.",
    "problem": "금융 서비스 운영 화면은 콘텐츠 신뢰도와 정확성이 중요하고, 상품·공지·이벤트 변경이 반복되기 때문에 화면마다 다른 방식으로 구현되면 유지보수 비용이 커질 수 있었습니다.",
    "solution": [
      "운영 페이지의 제목, 안내문, 리스트, 버튼, 배너 영역을 일관된 마크업 구조로 정리했습니다.",
      "반응형 환경에서 콘텐츠 길이가 달라져도 레이아웃이 무너지지 않도록 여백, 줄바꿈, 버튼 배치를 방어적으로 구현했습니다.",
      "금융 서비스의 차분한 톤과 명확한 정보 전달을 유지하도록 SCSS 단위와 화면별 예외 스타일을 구분했습니다."
    ],
    "result": [
      "장기 운영 중에도 반복되는 화면 수정 요청에 안정적으로 대응했습니다.",
      "React 전면 개편 프로젝트로 이어지는 금융 웹 UI 운영 경험을 축적했습니다.",
      "웹표준 기반 마크업과 SCSS 유지보수 경험을 설명할 수 있는 운영 사례로 정리했습니다."
    ],
    "tags": [
      "Finance",
      "Web UI",
      "SCSS",
      "운영",
      "반응형"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/finnq_w.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/finnq_w.png",
        "alt": "Finnq 웹 서비스 2.0 운영 대표 이미지",
        "caption": "Finnq 웹 서비스 2.0 운영의 대표 화면입니다. 실제 프로젝트 상세 이미지는 운영 보안과 공개 가능 범위에 맞춰 추가 보강할 수 있습니다."
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "w_kebhana_open",
    "legacyId": null,
    "title": "KEB하나은행 기업뱅킹 고도화 구현",
    "company": "KEB하나은행",
    "platform": "web",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2017-11-10",
      "end": "2018-07-31",
      "label": "2017.11.10 ~ 2018.07.31"
    },
    "contribution": 40,
    "role": [
      "UI Development"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "KEB하나은행 기업뱅킹 고도화 프로젝트에서 업무용 웹 UI 구현을 담당했습니다. 복잡한 금융 업무 화면을 사용자가 안정적으로 탐색할 수 있도록 표, 폼, 버튼, 안내 영역의 구조와 웹표준 기반 마크업을 중심으로 작업했습니다.",
    "problem": "기업뱅킹 화면은 데이터 입력, 조회, 승인, 안내가 한 화면에 함께 배치되는 경우가 많아 정보 구조가 복잡하고 화면 일관성이 무너지기 쉬웠습니다.",
    "solution": [
      "업무용 화면의 표, 폼, 버튼, 안내 메시지 패턴을 기준으로 HTML 구조와 CSS 책임 범위를 명확히 정리했습니다.",
      "데이터가 많아지는 상황에서도 가독성이 유지되도록 행간, 여백, 상태 표시, 액션 위치를 일관되게 구성했습니다.",
      "금융권 운영 환경을 고려해 브라우저 호환성과 웹표준 마크업을 우선 기준으로 구현했습니다."
    ],
    "result": [
      "복잡한 기업뱅킹 업무 화면을 안정적으로 구현한 금융권 웹 프로젝트 경험을 확보했습니다.",
      "표·폼 중심의 업무 시스템 UI를 웹표준과 유지보수 관점에서 설명할 수 있게 정리했습니다.",
      "현업형 UI 개발자로서 운영성과 정확성이 중요한 프로젝트 경험을 대표 사례에 포함했습니다."
    ],
    "tags": [
      "Banking",
      "Web UI",
      "HTML",
      "CSS",
      "웹표준"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/kebhana_w_open.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/kebhana_w_open.png",
        "alt": "KEB하나은행 기업뱅킹 고도화 구현 대표 이미지",
        "caption": "KEB하나은행 기업뱅킹 고도화 구현 대표 이미지입니다. 프로젝트의 화면 유형과 담당 범위를 빠르게 확인할 수 있도록 정리했습니다."
      }
    ],
    "featured": true,
    "isNew": false
  },
  {
    "id": "m_hana_app",
    "legacyId": null,
    "title": "KEB하나은행 기업뱅킹 1Q bank App 구축",
    "company": "KEB하나은행",
    "platform": "mobile",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2018-01-08",
      "end": "2018-06-29",
      "label": "2018.01.08 ~ 2018.06.29"
    },
    "contribution": 100,
    "role": [
      "UI Development"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript",
      "Hybrid App"
    ],
    "summary": "KEB하나은행 기업뱅킹 1Q bank App 구축 프로젝트에서 모바일 하이브리드 앱 UI 구현을 담당했습니다. 기업 고객이 사용하는 업무성 화면을 모바일 환경에 맞게 정리하고, 입력·조회·안내 흐름이 안정적으로 보이도록 구현한 프로젝트입니다.",
    "problem": "기업뱅킹 모바일 앱은 조회, 이체, 승인, 안내 등 업무성 화면이 많아 작은 화면에서도 정보 위계와 터치 흐름이 명확해야 했습니다.",
    "solution": [
      "모바일 웹뷰 환경을 고려해 폼, 리스트, 버튼, 안내 메시지의 기본 구조를 안정적으로 구현했습니다.",
      "기업뱅킹 화면 특성상 데이터가 많은 영역에서도 가독성이 유지되도록 여백, 정렬, 터치 영역을 관리했습니다.",
      "웹표준 마크업과 CSS 구조를 바탕으로 다양한 업무 화면에 적용 가능한 UI 패턴을 구성했습니다."
    ],
    "result": [
      "금융권 하이브리드 앱 구축 경험을 확보했습니다.",
      "모바일 업무 시스템에서 중요한 입력 흐름, 터치 영역, 정보 위계 구현 경험을 설명할 수 있게 정리했습니다.",
      "웹과 앱 사이의 UI 제약을 고려하는 실무 감각을 쌓았습니다."
    ],
    "tags": [
      "Hybrid App",
      "Mobile UI",
      "Banking",
      "HTML",
      "SCSS"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/kebhana_m_app.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/kebhana_m_app.png",
        "alt": "KEB하나은행 기업뱅킹 1Q bank App 구축 대표 이미지",
        "caption": "KEB하나은행 기업뱅킹 1Q bank App 구축의 대표 화면입니다. 실제 프로젝트 상세 이미지는 운영 보안과 공개 가능 범위에 맞춰 추가 보강할 수 있습니다."
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "w_kebhana_company2",
    "legacyId": null,
    "title": "KEB하나은행 기업뱅킹 통합 서비스 운영",
    "company": "KEB하나은행",
    "platform": "web",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2017-08-07",
      "end": "2017-11-09",
      "label": "2017.08.07 ~ 2017.11.09"
    },
    "contribution": 100,
    "role": [
      "UI Development"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "KEB하나은행 기업뱅킹 통합 서비스 운영 프로젝트에서 기업 고객용 웹 화면의 UI 운영과 개선을 담당했습니다. 복잡한 업무 화면을 안정적으로 유지하기 위해 표, 폼, 버튼, 안내 영역의 일관성을 중심으로 작업했습니다.",
    "problem": "기업뱅킹 운영 화면은 업무 유형별로 화면 구조가 다르고 데이터 양도 많아, 운영 수정 과정에서 UI 일관성이 쉽게 흔들릴 수 있었습니다.",
    "solution": [
      "업무 화면의 표, 폼, 조회 조건, 결과 리스트, 버튼 영역을 기준으로 마크업 구조를 정리했습니다.",
      "운영 중 추가되는 안내 문구와 예외 상태가 화면을 깨뜨리지 않도록 CSS 범위와 레이아웃 기준을 관리했습니다.",
      "브라우저 호환성과 웹표준을 우선 기준으로 두고 기존 서비스 흐름을 유지했습니다."
    ],
    "result": [
      "기업뱅킹 운영 화면을 안정적으로 유지하는 경험을 쌓았습니다.",
      "표·폼 중심의 업무 UI를 유지보수 관점에서 설명할 수 있는 프로젝트로 정리했습니다.",
      "금융권 웹 운영에서 요구되는 정확성과 일관성을 체득했습니다."
    ],
    "tags": [
      "Banking",
      "Web UI",
      "운영",
      "HTML",
      "CSS"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/kebhana_w_com2.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/kebhana_w_com2.png",
        "alt": "KEB하나은행 기업뱅킹 통합 서비스 운영 대표 이미지",
        "caption": "KEB하나은행 기업뱅킹 통합 서비스 운영의 대표 화면입니다. 실제 프로젝트 상세 이미지는 운영 보안과 공개 가능 범위에 맞춰 추가 보강할 수 있습니다."
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "w_kebhana_combine",
    "legacyId": null,
    "title": "KEB하나은행 기업뱅킹 CBS 채널 통합개편",
    "company": "KEB하나은행",
    "platform": "web",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2017-02-27",
      "end": "2017-08-06",
      "label": "2017.02.27 ~ 2017.08.06"
    },
    "contribution": 80,
    "role": [
      "UI Development"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "KEB하나은행 기업뱅킹 CBS 채널 통합개편 프로젝트에서 웹 UI 구현을 담당했습니다. 여러 채널의 화면 구조를 통합하는 과정에서 정보 위계, 업무 화면 패턴, 웹표준 마크업을 중심으로 작업했습니다.",
    "problem": "채널 통합개편은 기존 화면의 업무 흐름을 유지하면서도 새로운 구조에 맞춰 화면 패턴을 정리해야 했기 때문에 안정적인 UI 기준이 필요했습니다.",
    "solution": [
      "기존 업무 화면의 핵심 흐름을 해치지 않도록 표, 폼, 탭, 버튼 영역의 구조를 신중하게 구현했습니다.",
      "통합개편 후에도 반복 적용 가능한 UI 패턴이 되도록 HTML 구조와 CSS 네이밍을 정리했습니다.",
      "금융권 웹 환경의 호환성과 접근성을 고려해 기본 마크업 품질을 우선했습니다."
    ],
    "result": [
      "채널 통합개편 환경에서 기존 업무 흐름과 신규 화면 구조를 함께 고려한 UI 구현 경험을 확보했습니다.",
      "대규모 금융 웹 개편 프로젝트에서 일관성 있는 화면 패턴을 구성했습니다.",
      "업무 시스템 UI를 구조적으로 바라보는 기준을 강화했습니다."
    ],
    "tags": [
      "Banking",
      "Web UI",
      "통합개편",
      "웹표준",
      "CSS"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/kebhana_w_combine.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/kebhana_w_combine.png",
        "alt": "KEB하나은행 기업뱅킹 CBS 채널 통합개편 대표 이미지",
        "caption": "KEB하나은행 기업뱅킹 CBS 채널 통합개편의 대표 화면입니다. 실제 프로젝트 상세 이미지는 운영 보안과 공개 가능 범위에 맞춰 추가 보강할 수 있습니다."
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "w_kebhana_company",
    "legacyId": null,
    "title": "KEB하나은행 기업뱅킹 서비스 운영",
    "company": "KEB하나은행",
    "platform": "web",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2017-01-11",
      "end": "2017-02-24",
      "label": "2017.01.11 ~ 2017.02.24"
    },
    "contribution": 100,
    "role": [
      "UI Development"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "KEB하나은행 기업뱅킹 서비스 운영 프로젝트에서 기업 고객용 웹 화면의 UI 운영을 담당했습니다. 업무성 화면의 정확한 정보 전달과 안정적인 레이아웃 유지를 목표로 HTML, CSS 기반 화면 개선을 진행했습니다.",
    "problem": "운영 중인 기업뱅킹 화면은 작은 변경도 실제 업무 흐름에 영향을 줄 수 있어, 기존 구조를 이해한 상태에서 안전하게 수정해야 했습니다.",
    "solution": [
      "기존 마크업 구조와 스타일 영향을 확인한 뒤 필요한 범위 안에서 화면을 수정했습니다.",
      "표, 입력 필드, 버튼, 안내 문구 영역의 정렬과 여백을 일관되게 관리했습니다.",
      "운영 화면의 예외 콘텐츠가 추가되더라도 레이아웃이 크게 흔들리지 않도록 방어적인 CSS를 적용했습니다."
    ],
    "result": [
      "금융권 운영 프로젝트에서 안전한 UI 수정 기준을 익혔습니다.",
      "업무 화면의 구조를 해치지 않으면서 개선하는 경험을 쌓았습니다.",
      "이후 기업뱅킹 고도화와 통합개편 프로젝트로 이어지는 기초 경험을 확보했습니다."
    ],
    "tags": [
      "Banking",
      "운영",
      "Web UI",
      "HTML",
      "CSS"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/kebhana_w_com.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/kebhana_w_com.png",
        "alt": "KEB하나은행 기업뱅킹 서비스 운영 대표 이미지",
        "caption": "KEB하나은행 기업뱅킹 서비스 운영의 대표 화면입니다. 실제 프로젝트 상세 이미지는 운영 보안과 공개 가능 범위에 맞춰 추가 보강할 수 있습니다."
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "w_mirae",
    "legacyId": null,
    "title": "미래에셋대우 채널통합 TFT 시스템 구축",
    "company": "미래에셋대우",
    "platform": "web",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2016-06-27",
      "end": "2017-01-06",
      "label": "2016.06.27 ~ 2017.01.06"
    },
    "contribution": 70,
    "role": [
      "UI Development"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "미래에셋대우 채널통합 TFT 시스템 구축 프로젝트에서 웹 UI 구현을 담당했습니다. 금융 시스템 화면의 정보 구조와 업무 흐름을 고려해 표, 목록, 폼 중심의 화면을 안정적으로 구성한 프로젝트입니다.",
    "problem": "채널통합 시스템은 다양한 업무 정보가 한 화면에 배치되기 때문에 데이터 가독성, 화면 밀도, 액션 위치의 일관성이 중요했습니다.",
    "solution": [
      "표, 리스트, 조회 조건, 버튼 영역을 기준으로 업무 화면의 기본 구조를 구현했습니다.",
      "데이터가 많은 화면에서도 사용자가 필요한 정보를 빠르게 찾을 수 있도록 여백과 정렬 기준을 관리했습니다.",
      "금융권 시스템 환경에 맞춰 브라우저 호환성과 안정적인 CSS 적용 범위를 고려했습니다."
    ],
    "result": [
      "금융 시스템 UI 구축 경험을 확보했습니다.",
      "데이터 중심 업무 화면에서 가독성과 정보 위계를 관리하는 경험을 쌓았습니다.",
      "이후 금융 웹·앱 프로젝트의 UI 구현 기준을 만드는 기반이 되었습니다."
    ],
    "tags": [
      "Finance",
      "System UI",
      "Web UI",
      "HTML",
      "CSS"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/mirae_w.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/mirae_w.png",
        "alt": "미래에셋대우 채널통합 TFT 시스템 구축 대표 이미지",
        "caption": "미래에셋대우 채널통합 TFT 시스템 구축의 대표 화면입니다. 실제 프로젝트 상세 이미지는 운영 보안과 공개 가능 범위에 맞춰 추가 보강할 수 있습니다."
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "w_kebhana",
    "legacyId": null,
    "title": "KEB하나은행 개인뱅킹 웹 통합개편",
    "company": "KEB하나은행",
    "platform": "web",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2016-04-11",
      "end": "2016-06-03",
      "label": "2016.04.11 ~ 2016.06.03"
    },
    "contribution": 30,
    "role": [
      "UI Development"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "KEB하나은행 개인뱅킹 웹 통합개편 프로젝트에서 웹 UI 구현을 담당했습니다. 개인 고객이 사용하는 금융 화면의 신뢰감, 정보 전달력, 웹표준 기반 구조를 고려해 화면을 구성한 프로젝트입니다.",
    "problem": "개인뱅킹 통합개편은 사용자가 자주 접하는 금융 화면을 새 구조로 정리해야 했기 때문에 명확한 정보 위계와 안정적인 화면 품질이 중요했습니다.",
    "solution": [
      "금융 상품, 조회, 안내 영역의 콘텐츠 구조를 기준으로 시맨틱한 HTML과 CSS를 구성했습니다.",
      "PC 웹 화면에서 정보가 자연스럽게 읽히도록 제목, 본문, 표, 버튼의 위계를 정리했습니다.",
      "운영 이후에도 확장 가능한 화면이 되도록 기존 스타일과 신규 스타일의 적용 범위를 구분했습니다."
    ],
    "result": [
      "개인뱅킹 웹 통합개편 경험을 통해 금융 서비스 UI 구현 기준을 익혔습니다.",
      "웹표준과 화면 안정성을 우선하는 작업 방식을 강화했습니다.",
      "이후 기업뱅킹과 핀테크 프로젝트로 이어지는 금융 도메인 경험을 축적했습니다."
    ],
    "tags": [
      "Banking",
      "Web UI",
      "통합개편",
      "웹표준",
      "CSS"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/kebhana_w.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/kebhana_w.png",
        "alt": "KEB하나은행 개인뱅킹 웹 통합개편 대표 이미지",
        "caption": "KEB하나은행 개인뱅킹 웹 통합개편의 대표 화면입니다. 실제 프로젝트 상세 이미지는 운영 보안과 공개 가능 범위에 맞춰 추가 보강할 수 있습니다."
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "w_han",
    "legacyId": null,
    "title": "한국수력원자력 웹 사이트 통합개편",
    "company": "한국수력원자력",
    "platform": "web",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2015-08-31",
      "end": "2015-12-30",
      "label": "2015.08.31 ~ 2015.12.30"
    },
    "contribution": 40,
    "role": [
      "UI Development"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "한국수력원자력 웹 사이트 통합개편 프로젝트에서 공공기관 웹 UI 구현을 담당했습니다. 다양한 정보성 콘텐츠를 사용자가 쉽게 탐색할 수 있도록 웹표준 기반의 구조와 PC 웹 레이아웃을 중심으로 작업했습니다.",
    "problem": "공공기관 웹사이트는 정보량이 많고 이용자 범위가 넓기 때문에, 메뉴 구조와 콘텐츠 가독성, 기본 접근성 품질이 중요했습니다.",
    "solution": [
      "정보성 콘텐츠를 섹션, 목록, 표, 버튼 단위로 정리해 일관된 마크업 구조를 구성했습니다.",
      "PC 웹 환경에서 콘텐츠 탐색이 자연스럽게 이어지도록 여백, 제목 위계, 링크 상태를 관리했습니다.",
      "공공 웹사이트 특성에 맞춰 웹표준과 접근성 기준을 의식하며 화면을 구현했습니다."
    ],
    "result": [
      "공공기관 웹사이트 통합개편 경험을 확보했습니다.",
      "정보성 콘텐츠 중심의 웹 UI를 구조화하는 경험을 쌓았습니다.",
      "웹표준과 접근성을 포트폴리오의 핵심 강점으로 설명할 수 있는 기반 경험으로 정리했습니다."
    ],
    "tags": [
      "Public Web",
      "Web UI",
      "웹표준",
      "접근성",
      "HTML"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/han_w.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/han_w.png",
        "alt": "한국수력원자력 웹 사이트 통합개편 대표 이미지",
        "caption": "한국수력원자력 웹 사이트 통합개편의 대표 화면입니다. 실제 프로젝트 상세 이미지는 운영 보안과 공개 가능 범위에 맞춰 추가 보강할 수 있습니다."
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "m_han",
    "legacyId": null,
    "title": "한국수력원자력 모바일 웹 사이트 통합개편",
    "company": "한국수력원자력",
    "platform": "mobile",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2015-08-31",
      "end": "2015-12-30",
      "label": "2015.08.31 ~ 2015.12.30"
    },
    "contribution": 100,
    "role": [
      "UI Development"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "한국수력원자력 모바일 웹 사이트 통합개편 프로젝트에서 모바일 UI 구현을 담당했습니다. 공공기관 정보성 콘텐츠를 작은 화면에서 읽기 쉽고 탐색하기 쉬운 구조로 정리한 프로젝트입니다.",
    "problem": "모바일 공공 웹은 화면 폭이 제한적이고 사용자 환경이 다양해 메뉴, 목록, 본문, 버튼의 터치 흐름과 가독성이 중요했습니다.",
    "solution": [
      "모바일 화면 기준으로 제목, 본문, 목록, 버튼의 간격과 터치 영역을 정리했습니다.",
      "정보성 콘텐츠가 길어지는 경우에도 읽기 흐름이 끊기지 않도록 섹션 구조와 스크롤 흐름을 고려했습니다.",
      "웹표준 기반 마크업을 유지하면서 모바일 레이아웃에 맞는 CSS를 구현했습니다."
    ],
    "result": [
      "공공기관 모바일 웹 통합개편 경험을 확보했습니다.",
      "모바일 정보성 콘텐츠의 가독성과 탐색 흐름을 관리하는 경험을 쌓았습니다.",
      "PC 웹과 모바일 웹을 함께 구축하는 반응형·멀티디바이스 감각을 강화했습니다."
    ],
    "tags": [
      "Mobile Web",
      "Public Web",
      "웹표준",
      "접근성",
      "CSS"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/han_m.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/han_m.png",
        "alt": "한국수력원자력 모바일 웹 사이트 통합개편 대표 이미지",
        "caption": "한국수력원자력 모바일 웹 사이트 통합개편의 대표 화면입니다. 실제 프로젝트 상세 이미지는 운영 보안과 공개 가능 범위에 맞춰 추가 보강할 수 있습니다."
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "m_tgif",
    "legacyId": null,
    "title": "TGI FRIDAYS 모바일 웹(KOR) 구축",
    "company": "TGI",
    "platform": "mobile",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2015-05-26",
      "end": "2015-08-14",
      "label": "2015.05.26 ~ 2015.08.14"
    },
    "contribution": 100,
    "role": [
      "UI Development"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "TGI FRIDAYS 모바일 웹(KOR) 구축 프로젝트에서 UI Development 역할을 담당했습니다. 기존 포트폴리오 데이터에서 1차 이관한 항목으로, 상세 성과 문장은 다음 단계에서 케이스 스터디 형태로 보강이 필요합니다.",
    "problem": "기존 상세 페이지는 프로젝트별 개별 파일로 분리되어 있어 유지보수 비용이 높았습니다.",
    "solution": [
      "프로젝트 데이터를 정규화해 공통 상세 템플릿에서 렌더링할 수 있도록 구성했습니다.",
      "플랫폼(web/mobile/responsive) 값에 따라 동일 상세 페이지 안에서 표현 방식을 달리할 수 있게 설계했습니다."
    ],
    "result": [
      "37개 상세 페이지를 데이터 기반 구조로 통합할 수 있는 기반을 마련했습니다.",
      "향후 프로젝트 추가 시 데이터만 추가하면 목록과 상세가 함께 갱신됩니다."
    ],
    "tags": [
      "UI",
      "Mobile"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/tgif_m.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/tgif_m.png",
        "alt": "TGI FRIDAYS 모바일 웹(KOR) 구축 대표 이미지"
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "m_tgif_e",
    "legacyId": null,
    "title": "TGI FRIDAYS 모바일 웹(ENG) 구축",
    "company": "TGI",
    "platform": "mobile",
    "category": "work",
    "locale": "en",
    "period": {
      "start": "2015-05-26",
      "end": "2015-08-14",
      "label": "2015.05.26 ~ 2015.08.14"
    },
    "contribution": 100,
    "role": [
      "UI Development"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "TGI FRIDAYS 모바일 웹(ENG) 구축 프로젝트에서 UI Development 역할을 담당했습니다. 기존 포트폴리오 데이터에서 1차 이관한 항목으로, 상세 성과 문장은 다음 단계에서 케이스 스터디 형태로 보강이 필요합니다.",
    "problem": "기존 상세 페이지는 프로젝트별 개별 파일로 분리되어 있어 유지보수 비용이 높았습니다.",
    "solution": [
      "프로젝트 데이터를 정규화해 공통 상세 템플릿에서 렌더링할 수 있도록 구성했습니다.",
      "플랫폼(web/mobile/responsive) 값에 따라 동일 상세 페이지 안에서 표현 방식을 달리할 수 있게 설계했습니다."
    ],
    "result": [
      "37개 상세 페이지를 데이터 기반 구조로 통합할 수 있는 기반을 마련했습니다.",
      "향후 프로젝트 추가 시 데이터만 추가하면 목록과 상세가 함께 갱신됩니다."
    ],
    "tags": [
      "UI",
      "Mobile"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/tgif_m_e.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/tgif_m_e.png",
        "alt": "TGI FRIDAYS 모바일 웹(ENG) 구축 대표 이미지"
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "m_angel",
    "legacyId": null,
    "title": "엔제리너스(KOR) 커피 모바일 웹 구축",
    "company": "엔제리너스(KOR)",
    "platform": "mobile",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2015-05-26",
      "end": "2015-08-14",
      "label": "2015.05.26 ~ 2015.08.14"
    },
    "contribution": 100,
    "role": [
      "UI Development"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "엔제리너스(KOR) 커피 모바일 웹 구축 프로젝트에서 UI Development 역할을 담당했습니다. 기존 포트폴리오 데이터에서 1차 이관한 항목으로, 상세 성과 문장은 다음 단계에서 케이스 스터디 형태로 보강이 필요합니다.",
    "problem": "기존 상세 페이지는 프로젝트별 개별 파일로 분리되어 있어 유지보수 비용이 높았습니다.",
    "solution": [
      "프로젝트 데이터를 정규화해 공통 상세 템플릿에서 렌더링할 수 있도록 구성했습니다.",
      "플랫폼(web/mobile/responsive) 값에 따라 동일 상세 페이지 안에서 표현 방식을 달리할 수 있게 설계했습니다."
    ],
    "result": [
      "37개 상세 페이지를 데이터 기반 구조로 통합할 수 있는 기반을 마련했습니다.",
      "향후 프로젝트 추가 시 데이터만 추가하면 목록과 상세가 함께 갱신됩니다."
    ],
    "tags": [
      "UI",
      "Mobile"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/angel_m.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/angel_m.png",
        "alt": "엔제리너스(KOR) 커피 모바일 웹 구축 대표 이미지"
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "m_angel_e",
    "legacyId": null,
    "title": "엔제리너스(ENG) 커피 모바일 웹 구축",
    "company": "엔제리너스(ENG)",
    "platform": "mobile",
    "category": "work",
    "locale": "en",
    "period": {
      "start": "2015-05-26",
      "end": "2015-08-14",
      "label": "2015.05.26 ~ 2015.08.14"
    },
    "contribution": 100,
    "role": [
      "UI Development"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "엔제리너스(ENG) 커피 모바일 웹 구축 프로젝트에서 UI Development 역할을 담당했습니다. 기존 포트폴리오 데이터에서 1차 이관한 항목으로, 상세 성과 문장은 다음 단계에서 케이스 스터디 형태로 보강이 필요합니다.",
    "problem": "기존 상세 페이지는 프로젝트별 개별 파일로 분리되어 있어 유지보수 비용이 높았습니다.",
    "solution": [
      "프로젝트 데이터를 정규화해 공통 상세 템플릿에서 렌더링할 수 있도록 구성했습니다.",
      "플랫폼(web/mobile/responsive) 값에 따라 동일 상세 페이지 안에서 표현 방식을 달리할 수 있게 설계했습니다."
    ],
    "result": [
      "37개 상세 페이지를 데이터 기반 구조로 통합할 수 있는 기반을 마련했습니다.",
      "향후 프로젝트 추가 시 데이터만 추가하면 목록과 상세가 함께 갱신됩니다."
    ],
    "tags": [
      "UI",
      "Mobile"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/angel_m_e.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/angel_m_e.png",
        "alt": "엔제리너스(ENG) 커피 모바일 웹 구축 대표 이미지"
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "m_lotteria",
    "legacyId": null,
    "title": "롯데리아 모바일 웹(국문) 구축",
    "company": "롯데리아",
    "platform": "mobile",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2015-05-26",
      "end": "2015-08-14",
      "label": "2015.05.26 ~ 2015.08.14"
    },
    "contribution": 30,
    "role": [
      "UI Development"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "롯데리아 모바일 웹(국문) 구축 프로젝트에서 UI Development 역할을 담당했습니다. 기존 포트폴리오 데이터에서 1차 이관한 항목으로, 상세 성과 문장은 다음 단계에서 케이스 스터디 형태로 보강이 필요합니다.",
    "problem": "기존 상세 페이지는 프로젝트별 개별 파일로 분리되어 있어 유지보수 비용이 높았습니다.",
    "solution": [
      "프로젝트 데이터를 정규화해 공통 상세 템플릿에서 렌더링할 수 있도록 구성했습니다.",
      "플랫폼(web/mobile/responsive) 값에 따라 동일 상세 페이지 안에서 표현 방식을 달리할 수 있게 설계했습니다."
    ],
    "result": [
      "37개 상세 페이지를 데이터 기반 구조로 통합할 수 있는 기반을 마련했습니다.",
      "향후 프로젝트 추가 시 데이터만 추가하면 목록과 상세가 함께 갱신됩니다."
    ],
    "tags": [
      "UI",
      "Mobile"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/lotteria_m.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/lotteria_m.png",
        "alt": "롯데리아 모바일 웹(국문) 구축 대표 이미지"
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "m_natuur",
    "legacyId": null,
    "title": "나뚜루 팝 모바일 웹(국문) 구축",
    "company": "나뚜루",
    "platform": "mobile",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2015-05-26",
      "end": "2015-08-14",
      "label": "2015.05.26 ~ 2015.08.14"
    },
    "contribution": 30,
    "role": [
      "UI Development"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "나뚜루 팝 모바일 웹(국문) 구축 프로젝트에서 UI Development 역할을 담당했습니다. 기존 포트폴리오 데이터에서 1차 이관한 항목으로, 상세 성과 문장은 다음 단계에서 케이스 스터디 형태로 보강이 필요합니다.",
    "problem": "기존 상세 페이지는 프로젝트별 개별 파일로 분리되어 있어 유지보수 비용이 높았습니다.",
    "solution": [
      "프로젝트 데이터를 정규화해 공통 상세 템플릿에서 렌더링할 수 있도록 구성했습니다.",
      "플랫폼(web/mobile/responsive) 값에 따라 동일 상세 페이지 안에서 표현 방식을 달리할 수 있게 설계했습니다."
    ],
    "result": [
      "37개 상세 페이지를 데이터 기반 구조로 통합할 수 있는 기반을 마련했습니다.",
      "향후 프로젝트 추가 시 데이터만 추가하면 목록과 상세가 함께 갱신됩니다."
    ],
    "tags": [
      "UI",
      "Mobile"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/natuur_m.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/natuur_m.png",
        "alt": "나뚜루 팝 모바일 웹(국문) 구축 대표 이미지"
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "m_krispy",
    "legacyId": null,
    "title": "크리스피 크림 도넛 모바일 웹(국문) 구축",
    "company": "크리스피",
    "platform": "mobile",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2015-05-26",
      "end": "2015-08-14",
      "label": "2015.05.26 ~ 2015.08.14"
    },
    "contribution": 30,
    "role": [
      "UI Development"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "크리스피 크림 도넛 모바일 웹(국문) 구축 프로젝트에서 UI Development 역할을 담당했습니다. 기존 포트폴리오 데이터에서 1차 이관한 항목으로, 상세 성과 문장은 다음 단계에서 케이스 스터디 형태로 보강이 필요합니다.",
    "problem": "기존 상세 페이지는 프로젝트별 개별 파일로 분리되어 있어 유지보수 비용이 높았습니다.",
    "solution": [
      "프로젝트 데이터를 정규화해 공통 상세 템플릿에서 렌더링할 수 있도록 구성했습니다.",
      "플랫폼(web/mobile/responsive) 값에 따라 동일 상세 페이지 안에서 표현 방식을 달리할 수 있게 설계했습니다."
    ],
    "result": [
      "37개 상세 페이지를 데이터 기반 구조로 통합할 수 있는 기반을 마련했습니다.",
      "향후 프로젝트 추가 시 데이터만 추가하면 목록과 상세가 함께 갱신됩니다."
    ],
    "tags": [
      "UI",
      "Mobile"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/krispy_m.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/krispy_m.png",
        "alt": "크리스피 크림 도넛 모바일 웹(국문) 구축 대표 이미지"
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "w_benecol",
    "legacyId": null,
    "title": "롯데푸드 파스퇴르 베네콜 웹",
    "company": "롯데푸드",
    "platform": "web",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2015-02-16",
      "end": "2015-04-22",
      "label": "2015.02.16 ~ 2015.04.22"
    },
    "contribution": 100,
    "role": [
      "UI Development"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "롯데푸드 파스퇴르 베네콜 웹 프로젝트에서 UI Development 역할을 담당했습니다. 기존 포트폴리오 데이터에서 1차 이관한 항목으로, 상세 성과 문장은 다음 단계에서 케이스 스터디 형태로 보강이 필요합니다.",
    "problem": "기존 상세 페이지는 프로젝트별 개별 파일로 분리되어 있어 유지보수 비용이 높았습니다.",
    "solution": [
      "프로젝트 데이터를 정규화해 공통 상세 템플릿에서 렌더링할 수 있도록 구성했습니다.",
      "플랫폼(web/mobile/responsive) 값에 따라 동일 상세 페이지 안에서 표현 방식을 달리할 수 있게 설계했습니다."
    ],
    "result": [
      "37개 상세 페이지를 데이터 기반 구조로 통합할 수 있는 기반을 마련했습니다.",
      "향후 프로젝트 추가 시 데이터만 추가하면 목록과 상세가 함께 갱신됩니다."
    ],
    "tags": [
      "UI",
      "Web"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/benecol_w.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/benecol_w.png",
        "alt": "롯데푸드 파스퇴르 베네콜 웹 대표 이미지"
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "m_adcap",
    "legacyId": null,
    "title": "애드캡슐소프트 모바일 웹 개편",
    "company": "애드캡슐소프트",
    "platform": "mobile",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2015-01-05",
      "end": "2015-02-06",
      "label": "2015.01.05 ~ 2015.02.06"
    },
    "contribution": 100,
    "role": [
      "UI Development"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "애드캡슐소프트 모바일 웹 개편 프로젝트에서 UI Development 역할을 담당했습니다. 기존 포트폴리오 데이터에서 1차 이관한 항목으로, 상세 성과 문장은 다음 단계에서 케이스 스터디 형태로 보강이 필요합니다.",
    "problem": "기존 상세 페이지는 프로젝트별 개별 파일로 분리되어 있어 유지보수 비용이 높았습니다.",
    "solution": [
      "프로젝트 데이터를 정규화해 공통 상세 템플릿에서 렌더링할 수 있도록 구성했습니다.",
      "플랫폼(web/mobile/responsive) 값에 따라 동일 상세 페이지 안에서 표현 방식을 달리할 수 있게 설계했습니다."
    ],
    "result": [
      "37개 상세 페이지를 데이터 기반 구조로 통합할 수 있는 기반을 마련했습니다.",
      "향후 프로젝트 추가 시 데이터만 추가하면 목록과 상세가 함께 갱신됩니다."
    ],
    "tags": [
      "UI",
      "Mobile"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/adcapsule_m.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/adcapsule_m.png",
        "alt": "애드캡슐소프트 모바일 웹 개편 대표 이미지"
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "w_samsung",
    "legacyId": null,
    "title": "삼성증권 홈페이지 개편",
    "company": "삼성증권",
    "platform": "responsive",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2014-08-11",
      "end": "2014-12-26",
      "label": "2014.08.11 ~ 2014.12.26"
    },
    "contribution": 60,
    "role": [
      "UI Development"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "삼성증권 홈페이지 개편 프로젝트에서 UI Development 역할을 담당했습니다. 기존 포트폴리오 데이터에서 1차 이관한 항목으로, 상세 성과 문장은 다음 단계에서 케이스 스터디 형태로 보강이 필요합니다.",
    "problem": "기존 상세 페이지는 프로젝트별 개별 파일로 분리되어 있어 유지보수 비용이 높았습니다.",
    "solution": [
      "프로젝트 데이터를 정규화해 공통 상세 템플릿에서 렌더링할 수 있도록 구성했습니다.",
      "플랫폼(web/mobile/responsive) 값에 따라 동일 상세 페이지 안에서 표현 방식을 달리할 수 있게 설계했습니다."
    ],
    "result": [
      "37개 상세 페이지를 데이터 기반 구조로 통합할 수 있는 기반을 마련했습니다.",
      "향후 프로젝트 추가 시 데이터만 추가하면 목록과 상세가 함께 갱신됩니다."
    ],
    "tags": [
      "UI",
      "Responsive"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/samsung_stock_r.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/samsung_stock_r.png",
        "alt": "삼성증권 홈페이지 개편 대표 이미지"
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "m_kloudbeer",
    "legacyId": null,
    "title": "클라우드 맥주 브랜드 사이트 구축",
    "company": "클라우드",
    "platform": "mobile",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2014-05-12",
      "end": "2014-05-30",
      "label": "2014.05.12 ~ 2014.05.30"
    },
    "contribution": 100,
    "role": [
      "UI Development"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "클라우드 맥주 브랜드 사이트 구축 프로젝트에서 UI Development 역할을 담당했습니다. 기존 포트폴리오 데이터에서 1차 이관한 항목으로, 상세 성과 문장은 다음 단계에서 케이스 스터디 형태로 보강이 필요합니다.",
    "problem": "기존 상세 페이지는 프로젝트별 개별 파일로 분리되어 있어 유지보수 비용이 높았습니다.",
    "solution": [
      "프로젝트 데이터를 정규화해 공통 상세 템플릿에서 렌더링할 수 있도록 구성했습니다.",
      "플랫폼(web/mobile/responsive) 값에 따라 동일 상세 페이지 안에서 표현 방식을 달리할 수 있게 설계했습니다."
    ],
    "result": [
      "37개 상세 페이지를 데이터 기반 구조로 통합할 수 있는 기반을 마련했습니다.",
      "향후 프로젝트 추가 시 데이터만 추가하면 목록과 상세가 함께 갱신됩니다."
    ],
    "tags": [
      "UI",
      "Mobile"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/kloud_m.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/kloud_m.png",
        "alt": "클라우드 맥주 브랜드 사이트 구축 대표 이미지"
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "w_namdong_k",
    "legacyId": null,
    "title": "한국남동발전(KOR) 인터넷 웹 리뉴얼",
    "company": "한국남동발전(KOR)",
    "platform": "web",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2014-03-03",
      "end": "2014-05-02",
      "label": "2014.03.03 ~ 2014.05.02"
    },
    "contribution": 30,
    "role": [
      "UI Development"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "한국남동발전(KOR) 인터넷 웹 리뉴얼 프로젝트에서 UI Development 역할을 담당했습니다. 기존 포트폴리오 데이터에서 1차 이관한 항목으로, 상세 성과 문장은 다음 단계에서 케이스 스터디 형태로 보강이 필요합니다.",
    "problem": "기존 상세 페이지는 프로젝트별 개별 파일로 분리되어 있어 유지보수 비용이 높았습니다.",
    "solution": [
      "프로젝트 데이터를 정규화해 공통 상세 템플릿에서 렌더링할 수 있도록 구성했습니다.",
      "플랫폼(web/mobile/responsive) 값에 따라 동일 상세 페이지 안에서 표현 방식을 달리할 수 있게 설계했습니다."
    ],
    "result": [
      "37개 상세 페이지를 데이터 기반 구조로 통합할 수 있는 기반을 마련했습니다.",
      "향후 프로젝트 추가 시 데이터만 추가하면 목록과 상세가 함께 갱신됩니다."
    ],
    "tags": [
      "UI",
      "Web"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/kosep_w_kr.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/kosep_w_kr.png",
        "alt": "한국남동발전(KOR) 인터넷 웹 리뉴얼 대표 이미지"
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "w_namdong_e",
    "legacyId": null,
    "title": "한국남동발전(ENG) 인터넷 웹 리뉴얼",
    "company": "한국남동발전(ENG)",
    "platform": "web",
    "category": "work",
    "locale": "en",
    "period": {
      "start": "2014-03-03",
      "end": "2014-05-02",
      "label": "2014.03.03 ~ 2014.05.02"
    },
    "contribution": 30,
    "role": [
      "UI Development"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "한국남동발전(ENG) 인터넷 웹 리뉴얼 프로젝트에서 UI Development 역할을 담당했습니다. 기존 포트폴리오 데이터에서 1차 이관한 항목으로, 상세 성과 문장은 다음 단계에서 케이스 스터디 형태로 보강이 필요합니다.",
    "problem": "기존 상세 페이지는 프로젝트별 개별 파일로 분리되어 있어 유지보수 비용이 높았습니다.",
    "solution": [
      "프로젝트 데이터를 정규화해 공통 상세 템플릿에서 렌더링할 수 있도록 구성했습니다.",
      "플랫폼(web/mobile/responsive) 값에 따라 동일 상세 페이지 안에서 표현 방식을 달리할 수 있게 설계했습니다."
    ],
    "result": [
      "37개 상세 페이지를 데이터 기반 구조로 통합할 수 있는 기반을 마련했습니다.",
      "향후 프로젝트 추가 시 데이터만 추가하면 목록과 상세가 함께 갱신됩니다."
    ],
    "tags": [
      "UI",
      "Web"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/kosep_w_en.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/kosep_w_en.png",
        "alt": "한국남동발전(ENG) 인터넷 웹 리뉴얼 대표 이미지"
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "w_lotte",
    "legacyId": null,
    "title": "롯데맴버스 차세대 멤버스 홈페이지",
    "company": "롯데맴버스",
    "platform": "web",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2013-04-24",
      "end": "2013-07-31",
      "label": "2013.04.24 ~ 2013.07.31"
    },
    "contribution": 30,
    "role": [
      "Backend"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "롯데맴버스 차세대 멤버스 홈페이지 프로젝트에서 Backend 역할을 담당했습니다. 기존 포트폴리오 데이터에서 1차 이관한 항목으로, 상세 성과 문장은 다음 단계에서 케이스 스터디 형태로 보강이 필요합니다.",
    "problem": "기존 상세 페이지는 프로젝트별 개별 파일로 분리되어 있어 유지보수 비용이 높았습니다.",
    "solution": [
      "프로젝트 데이터를 정규화해 공통 상세 템플릿에서 렌더링할 수 있도록 구성했습니다.",
      "플랫폼(web/mobile/responsive) 값에 따라 동일 상세 페이지 안에서 표현 방식을 달리할 수 있게 설계했습니다."
    ],
    "result": [
      "37개 상세 페이지를 데이터 기반 구조로 통합할 수 있는 기반을 마련했습니다.",
      "향후 프로젝트 추가 시 데이터만 추가하면 목록과 상세가 함께 갱신됩니다."
    ],
    "tags": [
      "Backend",
      "Web"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/lotte_w.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/lotte_w.png",
        "alt": "롯데맴버스 차세대 멤버스 홈페이지 대표 이미지"
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "m_lotte",
    "legacyId": null,
    "title": "롯데맴버스 차세대 모바일 App",
    "company": "롯데맴버스",
    "platform": "mobile",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2013-04-24",
      "end": "2013-07-31",
      "label": "2013.04.24 ~ 2013.07.31"
    },
    "contribution": 30,
    "role": [
      "Backend"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript",
      "Hybrid App"
    ],
    "summary": "롯데맴버스 차세대 모바일 App 프로젝트에서 Backend 역할을 담당했습니다. 기존 포트폴리오 데이터에서 1차 이관한 항목으로, 상세 성과 문장은 다음 단계에서 케이스 스터디 형태로 보강이 필요합니다.",
    "problem": "기존 상세 페이지는 프로젝트별 개별 파일로 분리되어 있어 유지보수 비용이 높았습니다.",
    "solution": [
      "프로젝트 데이터를 정규화해 공통 상세 템플릿에서 렌더링할 수 있도록 구성했습니다.",
      "플랫폼(web/mobile/responsive) 값에 따라 동일 상세 페이지 안에서 표현 방식을 달리할 수 있게 설계했습니다."
    ],
    "result": [
      "37개 상세 페이지를 데이터 기반 구조로 통합할 수 있는 기반을 마련했습니다.",
      "향후 프로젝트 추가 시 데이터만 추가하면 목록과 상세가 함께 갱신됩니다."
    ],
    "tags": [
      "Backend",
      "Mobile"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/lotte_m.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/lotte_m.png",
        "alt": "롯데맴버스 차세대 모바일 App 대표 이미지"
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "w_dovol",
    "legacyId": null,
    "title": "청소년 자원봉사 활동정보서비스 시스템 구축",
    "company": "청소년",
    "platform": "web",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2013-03-01",
      "end": "2013-03-28",
      "label": "2013.03.01 ~ 2013.03.28"
    },
    "contribution": 20,
    "role": [
      "Backend"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "청소년 자원봉사 활동정보서비스 시스템 구축 프로젝트에서 Backend 역할을 담당했습니다. 기존 포트폴리오 데이터에서 1차 이관한 항목으로, 상세 성과 문장은 다음 단계에서 케이스 스터디 형태로 보강이 필요합니다.",
    "problem": "기존 상세 페이지는 프로젝트별 개별 파일로 분리되어 있어 유지보수 비용이 높았습니다.",
    "solution": [
      "프로젝트 데이터를 정규화해 공통 상세 템플릿에서 렌더링할 수 있도록 구성했습니다.",
      "플랫폼(web/mobile/responsive) 값에 따라 동일 상세 페이지 안에서 표현 방식을 달리할 수 있게 설계했습니다."
    ],
    "result": [
      "37개 상세 페이지를 데이터 기반 구조로 통합할 수 있는 기반을 마련했습니다.",
      "향후 프로젝트 추가 시 데이터만 추가하면 목록과 상세가 함께 갱신됩니다."
    ],
    "tags": [
      "Backend",
      "Web"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/doval_w.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/doval_w.png",
        "alt": "청소년 자원봉사 활동정보서비스 시스템 구축 대표 이미지"
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "w_mofat",
    "legacyId": null,
    "title": "외교통상부 통합문서 관리 시스템 구축",
    "company": "외교통상부",
    "platform": "web",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2012-10-01",
      "end": "2013-02-28",
      "label": "2012.10.01 ~ 2013.02.28"
    },
    "contribution": 30,
    "role": [
      "Backend"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "외교통상부 통합문서 관리 시스템 구축 프로젝트에서 Backend 역할을 담당했습니다. 기존 포트폴리오 데이터에서 1차 이관한 항목으로, 상세 성과 문장은 다음 단계에서 케이스 스터디 형태로 보강이 필요합니다.",
    "problem": "기존 상세 페이지는 프로젝트별 개별 파일로 분리되어 있어 유지보수 비용이 높았습니다.",
    "solution": [
      "프로젝트 데이터를 정규화해 공통 상세 템플릿에서 렌더링할 수 있도록 구성했습니다.",
      "플랫폼(web/mobile/responsive) 값에 따라 동일 상세 페이지 안에서 표현 방식을 달리할 수 있게 설계했습니다."
    ],
    "result": [
      "37개 상세 페이지를 데이터 기반 구조로 통합할 수 있는 기반을 마련했습니다.",
      "향후 프로젝트 추가 시 데이터만 추가하면 목록과 상세가 함께 갱신됩니다."
    ],
    "tags": [
      "Backend",
      "Web"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/mofat_w.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/mofat_w.png",
        "alt": "외교통상부 통합문서 관리 시스템 구축 대표 이미지"
      }
    ],
    "featured": false,
    "isNew": false
  },
  {
    "id": "w_ramada",
    "legacyId": null,
    "title": "Ramada HOTEL Casino 웹 사이트 운영",
    "company": "Ramada",
    "platform": "web",
    "category": "work",
    "locale": "ko",
    "period": {
      "start": "2010-04-12",
      "end": "2012-02-01",
      "label": "2010.04.12 ~ 2012.02.01"
    },
    "contribution": 70,
    "role": [
      "Backend"
    ],
    "stack": [
      "HTML",
      "SCSS",
      "JavaScript"
    ],
    "summary": "Ramada HOTEL Casino 웹 사이트 운영 프로젝트에서 Backend 역할을 담당했습니다. 기존 포트폴리오 데이터에서 1차 이관한 항목으로, 상세 성과 문장은 다음 단계에서 케이스 스터디 형태로 보강이 필요합니다.",
    "problem": "기존 상세 페이지는 프로젝트별 개별 파일로 분리되어 있어 유지보수 비용이 높았습니다.",
    "solution": [
      "프로젝트 데이터를 정규화해 공통 상세 템플릿에서 렌더링할 수 있도록 구성했습니다.",
      "플랫폼(web/mobile/responsive) 값에 따라 동일 상세 페이지 안에서 표현 방식을 달리할 수 있게 설계했습니다."
    ],
    "result": [
      "37개 상세 페이지를 데이터 기반 구조로 통합할 수 있는 기반을 마련했습니다.",
      "향후 프로젝트 추가 시 데이터만 추가하면 목록과 상세가 함께 갱신됩니다."
    ],
    "tags": [
      "Backend",
      "Web"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/ramada_w.png",
    "media": [
      {
        "src": "/assets/portfolio/thumb_img_project/ramada_w.png",
        "alt": "Ramada HOTEL Casino 웹 사이트 운영 대표 이미지"
      }
    ],
    "featured": false,
    "isNew": false
  }
] satisfies Project[]
