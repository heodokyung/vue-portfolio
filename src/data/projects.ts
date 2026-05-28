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
        "src": "/assets/portfolio/detail/m_themarket/cj_m_themarket_1.webp",
        "alt": "CJ THE MARKET App Summary1",
        "caption": "CJ The Market Vue3 주요 화면 변경 개편 1차 상세 화면 1. CJ THE MARKET App Summary1",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_themarket/cj_m_themarket_2.webp",
        "alt": "CJ THE MARKET App Summary2",
        "caption": "CJ The Market Vue3 주요 화면 변경 개편 1차 상세 화면 2. CJ THE MARKET App Summary2",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_themarket/cj_m_themarket_3.webp",
        "alt": "CJ THE MARKET App Summary3",
        "caption": "CJ The Market Vue3 주요 화면 변경 개편 1차 상세 화면 3. CJ THE MARKET App Summary3",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_themarket/cj_m_themarket_4.webp",
        "alt": "CJ THE MARKET App Summary4",
        "caption": "CJ The Market Vue3 주요 화면 변경 개편 1차 상세 화면 4. CJ THE MARKET App Summary4",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_themarket/cj_m_themarket_5.webp",
        "alt": "CJ THE MARKET App Summary5",
        "caption": "CJ The Market Vue3 주요 화면 변경 개편 1차 상세 화면 5. CJ THE MARKET App Summary5",
        "variant": "mobile"
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
        "src": "/assets/portfolio/detail/w_themarket/cj_w_themarket_1.jpg",
        "alt": "CJ 더마켓 메인",
        "caption": "CJ The Market 웹 사이트 UI개선 및 운영 상세 화면 1. CJ 더마켓 메인",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_themarket/cj_w_themarket_2.jpg",
        "alt": "CJ 더마켓 전문관",
        "caption": "CJ The Market 웹 사이트 UI개선 및 운영 상세 화면 2. CJ 더마켓 전문관",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_themarket/cj_w_themarket_3.jpg",
        "alt": "CJ 더마켓 검색",
        "caption": "CJ The Market 웹 사이트 UI개선 및 운영 상세 화면 3. CJ 더마켓 검색",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_themarket/cj_w_themarket_4.jpg",
        "alt": "CJ 더마켓 리뷰",
        "caption": "CJ The Market 웹 사이트 UI개선 및 운영 상세 화면 4. CJ 더마켓 리뷰",
        "variant": "web"
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
        "src": "/assets/portfolio/detail/m_themarket/cj_m_themarket_1.webp",
        "alt": "CJ THE MARKET App Summary1",
        "caption": "CJ The Market 모바일 웹 UI개선 및 운영 상세 화면 1. CJ THE MARKET App Summary1",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_themarket/cj_m_themarket_2.webp",
        "alt": "CJ THE MARKET App Summary2",
        "caption": "CJ The Market 모바일 웹 UI개선 및 운영 상세 화면 2. CJ THE MARKET App Summary2",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_themarket/cj_m_themarket_3.webp",
        "alt": "CJ THE MARKET App Summary3",
        "caption": "CJ The Market 모바일 웹 UI개선 및 운영 상세 화면 3. CJ THE MARKET App Summary3",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_themarket/cj_m_themarket_4.webp",
        "alt": "CJ THE MARKET App Summary4",
        "caption": "CJ The Market 모바일 웹 UI개선 및 운영 상세 화면 4. CJ THE MARKET App Summary4",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_themarket/cj_m_themarket_5.webp",
        "alt": "CJ THE MARKET App Summary5",
        "caption": "CJ The Market 모바일 웹 UI개선 및 운영 상세 화면 5. CJ THE MARKET App Summary5",
        "variant": "mobile"
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
        "src": "/assets/portfolio/detail/w_finnq_v3/finnq_w_react_1.jpg",
        "alt": "Finnq Web: 메인(intersection observer 적용) ",
        "caption": "Finnq 웹 사이트 React 전면 개편 및 운영 상세 화면 1. Finnq Web: 메인(intersection observer 적용) ",
        "variant": "responsive"
      },
      {
        "src": "/assets/portfolio/detail/w_finnq_v3/finnq_w_react_2.jpg",
        "alt": "Finnq Web: 마이데이터 제휴(React Hook Form 적용)",
        "caption": "Finnq 웹 사이트 React 전면 개편 및 운영 상세 화면 2. Finnq Web: 마이데이터 제휴(React Hook Form 적용)",
        "variant": "responsive"
      },
      {
        "src": "/assets/portfolio/detail/w_finnq_v3/finnq_w_react_3.jpg",
        "alt": "Finnq Web: 대출비교 메인",
        "caption": "Finnq 웹 사이트 React 전면 개편 및 운영 상세 화면 3. Finnq Web: 대출비교 메인",
        "variant": "responsive"
      },
      {
        "src": "/assets/portfolio/detail/w_finnq_v3/finnq_w_react_4.jpg",
        "alt": "Finnq Web: 공동인증서",
        "caption": "Finnq 웹 사이트 React 전면 개편 및 운영 상세 화면 4. Finnq Web: 공동인증서",
        "variant": "responsive"
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
        "src": "/assets/portfolio/detail/m_finnq_app_v2/img_m_finnq_app1.webp",
        "alt": "Finnq App Summary1",
        "caption": "Finnq App 3.0 전면 개편 및 서비스 운영 상세 화면 1. Finnq App Summary1",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_finnq_app_v2/img_m_finnq_app2.webp",
        "alt": "Finnq App Summary2",
        "caption": "Finnq App 3.0 전면 개편 및 서비스 운영 상세 화면 2. Finnq App Summary2",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_finnq_app_v2/img_m_finnq_app3.webp",
        "alt": "Finnq App Summary3",
        "caption": "Finnq App 3.0 전면 개편 및 서비스 운영 상세 화면 3. Finnq App Summary3",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_finnq_app_v2/img_m_finnq_app4.webp",
        "alt": "Finnq App Summary4",
        "caption": "Finnq App 3.0 전면 개편 및 서비스 운영 상세 화면 4. Finnq App Summary4",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_finnq_app_v2/img_m_finnq_app5.webp",
        "alt": "Finnq App Summary5",
        "caption": "Finnq App 3.0 전면 개편 및 서비스 운영 상세 화면 5. Finnq App Summary5",
        "variant": "mobile"
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
        "src": "/assets/portfolio/detail/w_toy_netflix/img_toy_netflix1.png",
        "alt": "Netflix 메인",
        "caption": "개인프로젝트 - [React] Netflix Clone 상세 화면 1. Netflix 메인",
        "variant": "responsive"
      },
      {
        "src": "/assets/portfolio/detail/w_toy_netflix/img_toy_netflix2.png",
        "alt": "Netflix 영화 목록",
        "caption": "개인프로젝트 - [React] Netflix Clone 상세 화면 2. Netflix 영화 목록",
        "variant": "responsive"
      },
      {
        "src": "/assets/portfolio/detail/w_toy_netflix/img_toy_netflix3.png",
        "alt": "Netflix 검색 화면",
        "caption": "개인프로젝트 - [React] Netflix Clone 상세 화면 3. Netflix 검색 화면",
        "variant": "responsive"
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
    "summary": "React 기반 Todo App을 직접 구현하며 상태 변경, 목록 렌더링, 입력 폼, 완료 처리 같은 기본 인터랙션을 학습한 개인 프로젝트입니다. 작은 기능이라도 데이터 흐름과 UI 상태를 분리해 관리하는 연습을 중심으로 정리했습니다.",
    "problem": "단순한 할 일 목록이라도 입력, 수정, 완료, 삭제 상태가 동시에 바뀌기 때문에 컴포넌트 상태와 화면 렌더링 흐름을 명확히 이해할 필요가 있었습니다.",
    "solution": [
      "React 컴포넌트 단위로 입력 영역, 목록 영역, 상태 표시 영역을 분리해 화면 구조를 구성했습니다.",
      "할 일 데이터의 추가·완료·삭제 흐름을 기준으로 상태 변경 로직과 렌더링 조건을 정리했습니다.",
      "반응형 화면에서도 입력 필드와 액션 버튼이 깨지지 않도록 기본 레이아웃과 터치 영역을 확인했습니다."
    ],
    "result": [
      "React의 상태 기반 UI 렌더링 흐름을 실습 프로젝트로 정리했습니다.",
      "작은 기능을 데이터와 화면 구조로 분리해 구현하는 기본기를 확인했습니다.",
      "개인 학습 프로젝트는 대표 사례가 아닌 React 학습 아카이브로 분리했습니다."
    ],
    "tags": [
      "React",
      "State UI",
      "Form",
      "Responsive",
      "Side Project"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/toy_todo_list.png",
    "media": [
      {
        "src": "/assets/portfolio/detail/w_toy_todo_list/img_toy_todos1.gif",
        "alt": "Todo List App: 할일 입력 화면",
        "caption": "개인프로젝트 - [React] Todo App 상세 화면 1. Todo List App: 할일 입력 화면",
        "variant": "responsive"
      },
      {
        "src": "/assets/portfolio/detail/w_toy_todo_list/img_toy_todos2.gif",
        "alt": "Todo List App: 할일 입력 후 진행중, 완료 상태 변경",
        "caption": "개인프로젝트 - [React] Todo App 상세 화면 2. Todo List App: 할일 입력 후 진행중, 완료 상태 변경",
        "variant": "responsive"
      },
      {
        "src": "/assets/portfolio/detail/w_toy_todo_list/img_toy_todos3.gif",
        "alt": "Todo List App: 반응형 웹 구현 적용 화면",
        "caption": "개인프로젝트 - [React] Todo App 상세 화면 3. Todo List App: 반응형 웹 구현 적용 화면",
        "variant": "responsive"
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
        "src": "/assets/portfolio/detail/w_finnq_transmission/img_mydata_finnq1.png",
        "alt": "Finnq 마이데이터: 전송요구 통지서 웹",
        "caption": "마이데이터 전송요구동의 인증 개발 상세 화면 1. Finnq 마이데이터: 전송요구 통지서 웹",
        "variant": "responsive"
      },
      {
        "src": "/assets/portfolio/detail/w_finnq_transmission/img_mydata_finnq2.png",
        "alt": "Finnq 마이데이터: 전송요구 통지서 웹(오류)",
        "caption": "마이데이터 전송요구동의 인증 개발 상세 화면 2. Finnq 마이데이터: 전송요구 통지서 웹(오류)",
        "variant": "responsive"
      },
      {
        "src": "/assets/portfolio/detail/w_finnq_transmission/img_mydata_finnq3.png",
        "alt": "Finnq 마이데이터: 전송요구 통지서 웹(전송내역 통지서)",
        "caption": "마이데이터 전송요구동의 인증 개발 상세 화면 3. Finnq 마이데이터: 전송요구 통지서 웹(전송내역 통지서)",
        "variant": "responsive"
      },
      {
        "src": "/assets/portfolio/detail/w_finnq_transmission/img_mydata_finnq4.png",
        "alt": "Finnq 마이데이터: 전송요구 통지서 모바일",
        "caption": "마이데이터 전송요구동의 인증 개발 상세 화면 4. Finnq 마이데이터: 전송요구 통지서 모바일",
        "variant": "responsive"
      },
      {
        "src": "/assets/portfolio/detail/w_finnq_transmission/img_mydata_finnq5.png",
        "alt": "Finnq 마이데이터: 전송요구 통지서 모바일(오류)",
        "caption": "마이데이터 전송요구동의 인증 개발 상세 화면 5. Finnq 마이데이터: 전송요구 통지서 모바일(오류)",
        "variant": "responsive"
      },
      {
        "src": "/assets/portfolio/detail/w_finnq_transmission/img_mydata_finnq6.png",
        "alt": "Finnq 마이데이터: 전송요구 통지서 모바일(전송내역 통지서)",
        "caption": "마이데이터 전송요구동의 인증 개발 상세 화면 6. Finnq 마이데이터: 전송요구 통지서 모바일(전송내역 통지서)",
        "variant": "responsive"
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
    "summary": "React 기반 암호화폐 랭킹 화면을 구현하며 외부 데이터 목록을 카드·테이블형 UI로 구성한 개인 프로젝트입니다. API 데이터의 표시 순서, 숫자 정보의 가독성, 반응형 목록 UI를 학습하는 데 초점을 맞췄습니다.",
    "problem": "시세·순위형 데이터는 항목 수가 많고 숫자 정보가 중심이기 때문에 모바일과 데스크톱에서 모두 읽기 쉬운 정보 구조가 필요했습니다.",
    "solution": [
      "API 응답 데이터를 화면에 필요한 필드 중심으로 정리하고 목록 UI로 렌더링했습니다.",
      "순위, 이름, 가격 정보처럼 우선순위가 높은 정보를 먼저 읽을 수 있도록 카드 구조와 텍스트 위계를 조정했습니다.",
      "반응형 환경에서 데이터가 좁은 화면에 밀집되지 않도록 간격과 줄바꿈 기준을 확인했습니다."
    ],
    "result": [
      "외부 데이터를 받아 목록형 UI로 구성하는 기본 프론트엔드 흐름을 연습했습니다.",
      "숫자 중심 데이터의 가독성과 반응형 표현 방식을 학습했습니다.",
      "React 학습 프로젝트로 분류해 실무 대표 프로젝트와 역할을 명확히 구분했습니다."
    ],
    "tags": [
      "React",
      "API",
      "Data UI",
      "Responsive",
      "Side Project"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/toy_coin_list.png",
    "media": [
      {
        "src": "/assets/portfolio/detail/w_toy_coin_list/img_toy_coin1.png",
        "alt": "암호화폐 코인 리스트 화면(테마:Light Mode)",
        "caption": "개인프로젝트 - [React] 암호화폐 랭킹 사이트 상세 화면 1. 암호화폐 코인 리스트 화면(테마:Light Mode)",
        "variant": "responsive"
      },
      {
        "src": "/assets/portfolio/detail/w_toy_coin_list/img_toy_coin2.png",
        "alt": "암호화폐 코인 리스트 화면(테마:Dark Mode)",
        "caption": "개인프로젝트 - [React] 암호화폐 랭킹 사이트 상세 화면 2. 암호화폐 코인 리스트 화면(테마:Dark Mode)",
        "variant": "responsive"
      },
      {
        "src": "/assets/portfolio/detail/w_toy_coin_list/img_toy_coin3.png",
        "alt": "암호화폐 코인 상세 화면(차트 리스트)",
        "caption": "개인프로젝트 - [React] 암호화폐 랭킹 사이트 상세 화면 3. 암호화폐 코인 상세 화면(차트 리스트)",
        "variant": "responsive"
      },
      {
        "src": "/assets/portfolio/detail/w_toy_coin_list/img_toy_coin4.png",
        "alt": "암호화폐 코인 상세 화면(가격 정보 갱신)",
        "caption": "개인프로젝트 - [React] 암호화폐 랭킹 사이트 상세 화면 4. 암호화폐 코인 상세 화면(가격 정보 갱신)",
        "variant": "responsive"
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
        "src": "/assets/portfolio/detail/w_finnq_v2/img_finnq_w_1.jpg",
        "alt": "Finnq Web: WEB 메인 화면",
        "caption": "Finnq 웹 서비스 2.0 운영 상세 화면 1. Finnq Web: WEB 메인 화면",
        "variant": "responsive"
      },
      {
        "src": "/assets/portfolio/detail/w_finnq_v2/img_finnq_w_2.jpg",
        "alt": "Finnq Web: MOBILE 메인 화면(반응형 웹)",
        "caption": "Finnq 웹 서비스 2.0 운영 상세 화면 2. Finnq Web: MOBILE 메인 화면(반응형 웹)",
        "variant": "responsive"
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
        "src": "/assets/portfolio/detail/w_kebhana_open/img_kebhana_open_1.jpg",
        "alt": "KEB 하나은행 기업뱅킹 통합개편: 메인",
        "caption": "KEB하나은행 기업뱅킹 고도화 구현 상세 화면 1. KEB 하나은행 기업뱅킹 통합개편: 메인",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_kebhana_open/img_kebhana_open_2.jpg",
        "alt": "KEB 하나은행 기업뱅킹 통합개편: 로그인",
        "caption": "KEB하나은행 기업뱅킹 고도화 구현 상세 화면 2. KEB 하나은행 기업뱅킹 통합개편: 로그인",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_kebhana_open/img_kebhana_open_3.jpg",
        "alt": "KEB 하나은행 기업뱅킹 통합개편: 인증센터",
        "caption": "KEB하나은행 기업뱅킹 고도화 구현 상세 화면 3. KEB 하나은행 기업뱅킹 통합개편: 인증센터",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_kebhana_open/img_kebhana_open_4.jpg",
        "alt": "KEB 하나은행 기업뱅킹 통합개편: 발급수ㅈ수료 환불신청",
        "caption": "KEB하나은행 기업뱅킹 고도화 구현 상세 화면 4. KEB 하나은행 기업뱅킹 통합개편: 발급수ㅈ수료 환불신청",
        "variant": "web"
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
        "src": "/assets/portfolio/detail/m_hana_app/img_m_hana_app1.jpg",
        "alt": "KEB 하나은행 App 페이지 스크린샷1",
        "caption": "KEB하나은행 기업뱅킹 1Q bank App 구축 상세 화면 1. KEB 하나은행 App 페이지 스크린샷1",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_hana_app/img_m_hana_app2.jpg",
        "alt": "KEB 하나은행 App 페이지 스크린샷2",
        "caption": "KEB하나은행 기업뱅킹 1Q bank App 구축 상세 화면 2. KEB 하나은행 App 페이지 스크린샷2",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_hana_app/img_m_hana_app3.jpg",
        "alt": "KEB 하나은행 App 페이지 스크린샷3",
        "caption": "KEB하나은행 기업뱅킹 1Q bank App 구축 상세 화면 3. KEB 하나은행 App 페이지 스크린샷3",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_hana_app/img_m_hana_app4.jpg",
        "alt": "KEB 하나은행 App 페이지 스크린샷4",
        "caption": "KEB하나은행 기업뱅킹 1Q bank App 구축 상세 화면 4. KEB 하나은행 App 페이지 스크린샷4",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_hana_app/img_m_hana_app5.jpg",
        "alt": "KEB 하나은행 App 페이지 스크린샷5",
        "caption": "KEB하나은행 기업뱅킹 1Q bank App 구축 상세 화면 5. KEB 하나은행 App 페이지 스크린샷5",
        "variant": "mobile"
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
        "src": "/assets/portfolio/detail/w_kebhana_company2/img_kebhana_combine_1.jpg",
        "alt": "하나은행 기업뱅킹 웹 사이트 통합 개편(운영 업무): 메인",
        "caption": "KEB하나은행 기업뱅킹 통합 서비스 운영 상세 화면 1. 하나은행 기업뱅킹 웹 사이트 통합 개편(운영 업무): 메인",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_kebhana_company2/img_kebhana_combine_2.jpg",
        "alt": "하나은행 기업뱅킹 웹 사이트 통합 개편(운영 업무): GNB 메뉴",
        "caption": "KEB하나은행 기업뱅킹 통합 서비스 운영 상세 화면 2. 하나은행 기업뱅킹 웹 사이트 통합 개편(운영 업무): GNB 메뉴",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_kebhana_company2/img_kebhana_combine_3.jpg",
        "alt": "하나은행 기업뱅킹 웹 사이트 통합 개편(운영 업무): 고객센터",
        "caption": "KEB하나은행 기업뱅킹 통합 서비스 운영 상세 화면 3. 하나은행 기업뱅킹 웹 사이트 통합 개편(운영 업무): 고객센터",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_kebhana_company2/img_kebhana_combine_4.jpg",
        "alt": "하나은행 기업뱅킹 웹 사이트 통합 개편(운영 업무): 전체메뉴",
        "caption": "KEB하나은행 기업뱅킹 통합 서비스 운영 상세 화면 4. 하나은행 기업뱅킹 웹 사이트 통합 개편(운영 업무): 전체메뉴",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_kebhana_company2/img_kebhana_combine_5.jpg",
        "alt": "하나은행 기업뱅킹 웹 사이트 통합 개편(운영 업무): 로그인",
        "caption": "KEB하나은행 기업뱅킹 통합 서비스 운영 상세 화면 5. 하나은행 기업뱅킹 웹 사이트 통합 개편(운영 업무): 로그인",
        "variant": "web"
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
        "src": "/assets/portfolio/detail/w_kebhana_combine/img_kebhana_combine_1.jpg",
        "alt": "하나은행 기업뱅킹 웹 채널 통합개편: 메인",
        "caption": "KEB하나은행 기업뱅킹 CBS 채널 통합개편 상세 화면 1. 하나은행 기업뱅킹 웹 채널 통합개편: 메인",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_kebhana_combine/img_kebhana_combine_2.jpg",
        "alt": "하나은행 기업뱅킹 웹 채널 통합개편: GNB",
        "caption": "KEB하나은행 기업뱅킹 CBS 채널 통합개편 상세 화면 2. 하나은행 기업뱅킹 웹 채널 통합개편: GNB",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_kebhana_combine/img_kebhana_combine_3.jpg",
        "alt": "하나은행 기업뱅킹 웹 채널 통합개편: 고객센터",
        "caption": "KEB하나은행 기업뱅킹 CBS 채널 통합개편 상세 화면 3. 하나은행 기업뱅킹 웹 채널 통합개편: 고객센터",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_kebhana_combine/img_kebhana_combine_4.jpg",
        "alt": "하나은행 기업뱅킹 웹 채널 통합개편: 전체메뉴",
        "caption": "KEB하나은행 기업뱅킹 CBS 채널 통합개편 상세 화면 4. 하나은행 기업뱅킹 웹 채널 통합개편: 전체메뉴",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_kebhana_combine/img_kebhana_combine_5.jpg",
        "alt": "하나은행 기업뱅킹 웹 채널 통합개편: 로그인",
        "caption": "KEB하나은행 기업뱅킹 CBS 채널 통합개편 상세 화면 5. 하나은행 기업뱅킹 웹 채널 통합개편: 로그인",
        "variant": "web"
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
        "src": "/assets/portfolio/detail/w_kebhana_company/img_kebhana_company_1.jpg",
        "alt": "KEB 하나은행 기업뱅킹 웹 페이지: 메인(Light 분리 Ver)",
        "caption": "KEB하나은행 기업뱅킹 서비스 운영 상세 화면 1. KEB 하나은행 기업뱅킹 웹 페이지: 메인(Light 분리 Ver)",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_kebhana_company/img_kebhana_company_2.jpg",
        "alt": "KEB 하나은행 기업뱅킹 웹 페이지: 로그인",
        "caption": "KEB하나은행 기업뱅킹 서비스 운영 상세 화면 2. KEB 하나은행 기업뱅킹 웹 페이지: 로그인",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_kebhana_company/img_kebhana_company_3.jpg",
        "alt": "KEB 하나은행 기업뱅킹 웹 페이지: 상세페이지",
        "caption": "KEB하나은행 기업뱅킹 서비스 운영 상세 화면 3. KEB 하나은행 기업뱅킹 웹 페이지: 상세페이지",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_kebhana_company/img_kebhana_company_4.jpg",
        "alt": "KEB 하나은행 기업뱅킹 웹 페이지: FAQ",
        "caption": "KEB하나은행 기업뱅킹 서비스 운영 상세 화면 4. KEB 하나은행 기업뱅킹 웹 페이지: FAQ",
        "variant": "web"
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
        "src": "/assets/portfolio/detail/w_mirae/img_mirae0.jpg",
        "alt": "미래에셋대우 통합 웹: 메인",
        "caption": "미래에셋대우 채널통합 TFT 시스템 구축 상세 화면 1. 미래에셋대우 통합 웹: 메인",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_mirae/img_mirae1.jpg",
        "alt": "미래에셋대우 통합 웹: 금융상품 메인",
        "caption": "미래에셋대우 채널통합 TFT 시스템 구축 상세 화면 2. 미래에셋대우 통합 웹: 금융상품 메인",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_mirae/img_mirae2.jpg",
        "alt": "미래에셋대우 통합 웹: 연금자산 메인",
        "caption": "미래에셋대우 채널통합 TFT 시스템 구축 상세 화면 3. 미래에셋대우 통합 웹: 연금자산 메인",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_mirae/img_mirae3.jpg",
        "alt": "미래에셋대우 통합 웹: 이용안내/문의",
        "caption": "미래에셋대우 채널통합 TFT 시스템 구축 상세 화면 4. 미래에셋대우 통합 웹: 이용안내/문의",
        "variant": "web"
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
        "src": "/assets/portfolio/detail/w_kebhana/img_kebhana_1.jpg",
        "alt": "KEB 하나은행 웹 개인뱅킹(DAY2): 메인",
        "caption": "KEB하나은행 개인뱅킹 웹 통합개편 상세 화면 1. KEB 하나은행 웹 개인뱅킹(DAY2): 메인",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_kebhana/img_kebhana_2.jpg",
        "alt": "KEB 하나은행 웹 개인뱅킹(DAY2): 상품 메인",
        "caption": "KEB하나은행 개인뱅킹 웹 통합개편 상세 화면 2. KEB 하나은행 웹 개인뱅킹(DAY2): 상품 메인",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_kebhana/img_kebhana_3.jpg",
        "alt": "KEB 하나은행 웹 개인뱅킹(DAY2): 골드클럽 메인",
        "caption": "KEB하나은행 개인뱅킹 웹 통합개편 상세 화면 3. KEB 하나은행 웹 개인뱅킹(DAY2): 골드클럽 메인",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_kebhana/img_kebhana_4.jpg",
        "alt": "KEB 하나은행 웹 개인뱅킹(DAY2): 해외 공관 사이트",
        "caption": "KEB하나은행 개인뱅킹 웹 통합개편 상세 화면 4. KEB 하나은행 웹 개인뱅킹(DAY2): 해외 공관 사이트",
        "variant": "web"
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
        "src": "/assets/portfolio/detail/w_han/img_w_han1.jpg",
        "alt": "한국수력원자력 개편: 메인",
        "caption": "한국수력원자력 웹 사이트 통합개편 상세 화면 1. 한국수력원자력 개편: 메인",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_han/img_w_han2.jpg",
        "alt": "한국수력원자력 개편: 경영공시 서브 메인",
        "caption": "한국수력원자력 웹 사이트 통합개편 상세 화면 2. 한국수력원자력 개편: 경영공시 서브 메인",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_han/img_w_han3.jpg",
        "alt": "한국수력원자력 개편: 홍보동영상",
        "caption": "한국수력원자력 웹 사이트 통합개편 상세 화면 3. 한국수력원자력 개편: 홍보동영상",
        "variant": "web"
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
        "src": "/assets/portfolio/detail/m_han/img_m_hansuone1.jpg",
        "alt": "한국수력원자력 모바일 웹 페이지 스크린샷 Summary1",
        "caption": "한국수력원자력 모바일 웹 사이트 통합개편 상세 화면 1. 한국수력원자력 모바일 웹 페이지 스크린샷 Summary1",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_han/img_m_hansuone2.jpg",
        "alt": "한국수력원자력 모바일 웹 페이지 스크린샷 Summary2",
        "caption": "한국수력원자력 모바일 웹 사이트 통합개편 상세 화면 2. 한국수력원자력 모바일 웹 페이지 스크린샷 Summary2",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_han/img_m_hansuone3.jpg",
        "alt": "한국수력원자력 모바일 웹 페이지 스크린샷 Summary3",
        "caption": "한국수력원자력 모바일 웹 사이트 통합개편 상세 화면 3. 한국수력원자력 모바일 웹 페이지 스크린샷 Summary3",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_han/img_m_hansuone4.jpg",
        "alt": "한국수력원자력 모바일 웹 페이지 스크린샷 Summary4",
        "caption": "한국수력원자력 모바일 웹 사이트 통합개편 상세 화면 4. 한국수력원자력 모바일 웹 페이지 스크린샷 Summary4",
        "variant": "mobile"
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
    "summary": "TGI FRIDAYS 국문 모바일 웹 구축에서 브랜드 콘텐츠와 매장·메뉴 정보를 모바일 화면에 맞게 구성한 UI 개발 프로젝트입니다. 작은 화면에서도 브랜드 이미지와 정보 탐색 흐름이 자연스럽게 이어지도록 마크업과 스타일을 구현했습니다.",
    "problem": "브랜드 모바일 웹은 메뉴, 매장, 프로모션 정보를 빠르게 탐색해야 하며, 이미지 중심 콘텐츠가 많아 화면 비율과 로딩 상태에 따라 레이아웃이 흔들릴 수 있었습니다.",
    "solution": [
      "모바일 화면 기준으로 주요 콘텐츠 섹션, 이미지 영역, 버튼 영역의 정보 위계를 정리했습니다.",
      "메뉴와 프로모션 콘텐츠가 길어져도 화면 흐름이 깨지지 않도록 반응형 마크업과 CSS를 적용했습니다.",
      "국문 콘텐츠의 텍스트 길이와 줄바꿈을 고려해 가독성과 터치 영역을 함께 확인했습니다."
    ],
    "result": [
      "브랜드 모바일 웹 구축 경험을 통해 이미지 중심 모바일 UI 구현 기준을 확보했습니다.",
      "국문 콘텐츠 특성을 고려한 모바일 레이아웃과 CTA 배치 경험을 정리했습니다.",
      "동일 브랜드의 영문 사이트와 함께 다국어 모바일 구축 경험으로 확장했습니다."
    ],
    "tags": [
      "Mobile Web",
      "Brand Site",
      "HTML",
      "CSS",
      "UI"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/tgif_m.png",
    "media": [
      {
        "src": "/assets/portfolio/detail/m_tgif/img_m_tgi1.jpg",
        "alt": "TGIF 모바일 웹 페이지 스크린샷1",
        "caption": "TGI FRIDAYS 모바일 웹(KOR) 구축 상세 화면 1. TGIF 모바일 웹 페이지 스크린샷1",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_tgif/img_m_tgi2.jpg",
        "alt": "TGIF 모바일 웹 페이지 스크린샷2",
        "caption": "TGI FRIDAYS 모바일 웹(KOR) 구축 상세 화면 2. TGIF 모바일 웹 페이지 스크린샷2",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_tgif/img_m_tgi3.jpg",
        "alt": "TGIF 모바일 웹 페이지 스크린샷3",
        "caption": "TGI FRIDAYS 모바일 웹(KOR) 구축 상세 화면 3. TGIF 모바일 웹 페이지 스크린샷3",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_tgif/img_m_tgi4.jpg",
        "alt": "TGIF 모바일 웹 페이지 스크린샷4",
        "caption": "TGI FRIDAYS 모바일 웹(KOR) 구축 상세 화면 4. TGIF 모바일 웹 페이지 스크린샷4",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_tgif/img_m_tgi5.jpg",
        "alt": "TGIF 모바일 웹 페이지 스크린샷5",
        "caption": "TGI FRIDAYS 모바일 웹(KOR) 구축 상세 화면 5. TGIF 모바일 웹 페이지 스크린샷5",
        "variant": "mobile"
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
    "summary": "TGI FRIDAYS 영문 모바일 웹 구축에서 국문 사이트와 동일한 브랜드 경험을 유지하면서 영문 콘텐츠에 맞는 모바일 UI를 구현했습니다. 언어별 텍스트 길이와 정보 구조 차이를 고려해 모바일 화면을 정리한 프로젝트입니다.",
    "problem": "같은 브랜드라도 영문 콘텐츠는 텍스트 길이와 줄바꿈 방식이 달라 국문 사이트의 화면 구조를 그대로 적용하면 일부 UI 균형이 깨질 수 있었습니다.",
    "solution": [
      "국문 사이트에서 정의한 모바일 UI 패턴을 유지하되 영문 콘텐츠 길이에 맞춰 여백과 텍스트 영역을 점검했습니다.",
      "메뉴, 매장, 프로모션 같은 주요 콘텐츠가 동일한 흐름으로 탐색되도록 섹션 구조를 정리했습니다.",
      "이미지 중심 브랜드 화면에서 텍스트와 CTA가 겹치지 않도록 화면 폭별 레이아웃을 확인했습니다."
    ],
    "result": [
      "동일 브랜드의 다국어 모바일 웹 구축 경험을 확보했습니다.",
      "국문·영문 콘텐츠 차이를 고려한 모바일 UI 검수 기준을 정리했습니다.",
      "브랜드 톤을 유지하면서 언어별 콘텐츠를 안정적으로 표현하는 경험을 쌓았습니다."
    ],
    "tags": [
      "Mobile Web",
      "Brand Site",
      "Global",
      "HTML",
      "CSS"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/tgif_m_e.png",
    "media": [
      {
        "src": "/assets/portfolio/detail/m_tgif_e/img_m_tgi1.jpg",
        "alt": "TGIF 모바일 웹 페이지 스크린샷1",
        "caption": "TGI FRIDAYS 모바일 웹(ENG) 구축 상세 화면 1. TGIF 모바일 웹 페이지 스크린샷1",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_tgif_e/img_m_tgi2.jpg",
        "alt": "TGIF 모바일 웹 페이지 스크린샷2",
        "caption": "TGI FRIDAYS 모바일 웹(ENG) 구축 상세 화면 2. TGIF 모바일 웹 페이지 스크린샷2",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_tgif_e/img_m_tgi3.jpg",
        "alt": "TGIF 모바일 웹 페이지 스크린샷3",
        "caption": "TGI FRIDAYS 모바일 웹(ENG) 구축 상세 화면 3. TGIF 모바일 웹 페이지 스크린샷3",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_tgif_e/img_m_tgi4.jpg",
        "alt": "TGIF 모바일 웹 페이지 스크린샷4",
        "caption": "TGI FRIDAYS 모바일 웹(ENG) 구축 상세 화면 4. TGIF 모바일 웹 페이지 스크린샷4",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_tgif_e/img_m_tgi5.jpg",
        "alt": "TGIF 모바일 웹 페이지 스크린샷5",
        "caption": "TGI FRIDAYS 모바일 웹(ENG) 구축 상세 화면 5. TGIF 모바일 웹 페이지 스크린샷5",
        "variant": "mobile"
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
    "summary": "엔제리너스 국문 모바일 웹 구축에서 브랜드 소개, 메뉴, 매장 정보 등 사용자가 자주 찾는 콘텐츠를 모바일 환경에 맞춰 구현했습니다. 프랜차이즈 브랜드의 콘텐츠 구조와 모바일 탐색 흐름을 고려한 UI 개발 프로젝트입니다.",
    "problem": "프랜차이즈 브랜드 모바일 웹은 메뉴 정보와 매장 탐색 동선이 중요해 이미지, 텍스트, 버튼의 우선순위를 작은 화면 안에서 명확히 구분해야 했습니다.",
    "solution": [
      "메뉴·이벤트·매장 정보의 우선순위를 기준으로 모바일 섹션 구조를 구성했습니다.",
      "브랜드 이미지가 강조되는 화면에서도 텍스트 가독성과 터치 가능한 버튼 영역을 유지했습니다.",
      "콘텐츠 양이 늘어나는 경우에도 레이아웃이 무너지지 않도록 리스트와 카드 구조를 점검했습니다."
    ],
    "result": [
      "프랜차이즈 브랜드 모바일 웹의 기본 탐색 구조를 구현한 경험을 정리했습니다.",
      "이미지와 정보성 콘텐츠가 함께 있는 모바일 화면의 균형을 관리했습니다.",
      "다국어 모바일 웹 구축 경험으로 이어지는 기반을 마련했습니다."
    ],
    "tags": [
      "Mobile Web",
      "Brand Site",
      "Franchise",
      "HTML",
      "CSS"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/angel_m.png",
    "media": [
      {
        "src": "/assets/portfolio/detail/m_angel/img_m_angelcoffee1.jpg",
        "alt": "엔제리너스 모바일 웹 페이지 스크린샷1",
        "caption": "엔제리너스(KOR) 커피 모바일 웹 구축 상세 화면 1. 엔제리너스 모바일 웹 페이지 스크린샷1",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_angel/img_m_angelcoffee2.jpg",
        "alt": "엔제리너스 모바일 웹 페이지 스크린샷2",
        "caption": "엔제리너스(KOR) 커피 모바일 웹 구축 상세 화면 2. 엔제리너스 모바일 웹 페이지 스크린샷2",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_angel/img_m_angelcoffee3.jpg",
        "alt": "엔제리너스 모바일 웹 페이지 스크린샷3",
        "caption": "엔제리너스(KOR) 커피 모바일 웹 구축 상세 화면 3. 엔제리너스 모바일 웹 페이지 스크린샷3",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_angel/img_m_angelcoffee4.jpg",
        "alt": "엔제리너스 모바일 웹 페이지 스크린샷4",
        "caption": "엔제리너스(KOR) 커피 모바일 웹 구축 상세 화면 4. 엔제리너스 모바일 웹 페이지 스크린샷4",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_angel/img_m_angelcoffee5.jpg",
        "alt": "엔제리너스 모바일 웹 페이지 스크린샷5",
        "caption": "엔제리너스(KOR) 커피 모바일 웹 구축 상세 화면 5. 엔제리너스 모바일 웹 페이지 스크린샷5",
        "variant": "mobile"
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
    "summary": "엔제리너스 영문 모바일 웹 구축에서 국문 사이트의 브랜드 구조를 유지하면서 영문 사용자에게 맞는 콘텐츠 흐름을 구현했습니다. 다국어 브랜드 사이트의 모바일 화면 대응 경험을 정리한 프로젝트입니다.",
    "problem": "영문 모바일 페이지는 국문과 다른 텍스트 길이, 줄바꿈, 메뉴 표기 방식이 있어 동일한 디자인 안에서도 세부 UI 검수가 필요했습니다.",
    "solution": [
      "국문 모바일 웹의 정보 구조를 기준으로 영문 콘텐츠가 자연스럽게 들어갈 수 있도록 섹션과 텍스트 영역을 점검했습니다.",
      "브랜드 이미지, 메뉴 정보, CTA의 배치가 화면 폭에 따라 어색해지지 않도록 반응형 스타일을 적용했습니다.",
      "동일 브랜드 내 다국어 페이지 간 UI 일관성이 유지되도록 공통 패턴을 맞췄습니다."
    ],
    "result": [
      "영문 콘텐츠 기반 모바일 브랜드 사이트 구축 경험을 확보했습니다.",
      "국문·영문 화면 간 일관성과 콘텐츠 차이를 함께 관리하는 기준을 경험했습니다.",
      "다국어 프로젝트를 아카이브에서 명확히 구분해 보여줄 수 있게 정리했습니다."
    ],
    "tags": [
      "Mobile Web",
      "Brand Site",
      "Global",
      "HTML",
      "CSS"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/angel_m_e.png",
    "media": [
      {
        "src": "/assets/portfolio/detail/m_angel_e/img_m_angelcoffee1.jpg",
        "alt": "엔제리너스 모바일 웹 페이지 스크린샷1",
        "caption": "엔제리너스(ENG) 커피 모바일 웹 구축 상세 화면 1. 엔제리너스 모바일 웹 페이지 스크린샷1",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_angel_e/img_m_angelcoffee2.jpg",
        "alt": "엔제리너스 모바일 웹 페이지 스크린샷2",
        "caption": "엔제리너스(ENG) 커피 모바일 웹 구축 상세 화면 2. 엔제리너스 모바일 웹 페이지 스크린샷2",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_angel_e/img_m_angelcoffee3.jpg",
        "alt": "엔제리너스 모바일 웹 페이지 스크린샷3",
        "caption": "엔제리너스(ENG) 커피 모바일 웹 구축 상세 화면 3. 엔제리너스 모바일 웹 페이지 스크린샷3",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_angel_e/img_m_angelcoffee4.jpg",
        "alt": "엔제리너스 모바일 웹 페이지 스크린샷4",
        "caption": "엔제리너스(ENG) 커피 모바일 웹 구축 상세 화면 4. 엔제리너스 모바일 웹 페이지 스크린샷4",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_angel_e/img_m_angelcoffee5.jpg",
        "alt": "엔제리너스 모바일 웹 페이지 스크린샷5",
        "caption": "엔제리너스(ENG) 커피 모바일 웹 구축 상세 화면 5. 엔제리너스 모바일 웹 페이지 스크린샷5",
        "variant": "mobile"
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
    "summary": "롯데리아 국문 모바일 웹 구축에서 메뉴, 프로모션, 매장 탐색 중심의 모바일 UI를 구현했습니다. 프랜차이즈 서비스 특성에 맞춰 빠른 정보 확인과 터치 기반 탐색 흐름을 고려한 프로젝트입니다.",
    "problem": "패스트푸드 브랜드 모바일 웹은 사용자가 메뉴와 프로모션 정보를 빠르게 확인해야 하므로 이미지 중심 콘텐츠와 정보성 텍스트의 우선순위를 명확히 잡아야 했습니다.",
    "solution": [
      "메뉴와 이벤트 콘텐츠를 모바일에서 빠르게 훑어볼 수 있도록 카드·리스트형 UI 구조를 구성했습니다.",
      "CTA와 링크 영역은 손가락 터치를 고려해 충분한 높이와 간격을 확보했습니다.",
      "상품 이미지와 텍스트 정보가 함께 노출되는 영역의 비율과 줄바꿈을 확인했습니다."
    ],
    "result": [
      "브랜드 모바일 웹에서 정보 탐색성과 시각적 표현을 함께 고려한 UI 구현 경험을 확보했습니다.",
      "프랜차이즈 브랜드 특유의 반복 콘텐츠를 모바일 화면에 안정적으로 배치했습니다.",
      "초기 모바일 웹 구축 경험을 현재 반응형·운영 UI 역량의 기반 사례로 정리했습니다."
    ],
    "tags": [
      "Mobile Web",
      "Brand Site",
      "Franchise",
      "UI",
      "CSS"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/lotteria_m.png",
    "media": [
      {
        "src": "/assets/portfolio/detail/m_lotteria/img_m_lotteria1.jpg",
        "alt": "롯데리아 모바일 웹 페이지 스크린샷1",
        "caption": "롯데리아 모바일 웹(국문) 구축 상세 화면 1. 롯데리아 모바일 웹 페이지 스크린샷1",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_lotteria/img_m_lotteria2.jpg",
        "alt": "롯데리아 모바일 웹 페이지 스크린샷2",
        "caption": "롯데리아 모바일 웹(국문) 구축 상세 화면 2. 롯데리아 모바일 웹 페이지 스크린샷2",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_lotteria/img_m_lotteria3.jpg",
        "alt": "롯데리아 모바일 웹 페이지 스크린샷3",
        "caption": "롯데리아 모바일 웹(국문) 구축 상세 화면 3. 롯데리아 모바일 웹 페이지 스크린샷3",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_lotteria/img_m_lotteria4.jpg",
        "alt": "롯데리아 모바일 웹 페이지 스크린샷4",
        "caption": "롯데리아 모바일 웹(국문) 구축 상세 화면 4. 롯데리아 모바일 웹 페이지 스크린샷4",
        "variant": "mobile"
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
    "summary": "나뚜루 팝 모바일 웹 구축에서 제품 이미지와 브랜드 콘텐츠를 중심으로 한 모바일 UI를 구현했습니다. 제품군과 프로모션 콘텐츠가 작은 화면에서도 명확히 구분되도록 화면 구조를 정리한 프로젝트입니다.",
    "problem": "디저트 브랜드 모바일 웹은 이미지 의존도가 높아 제품 사진과 설명 텍스트, 이벤트 정보가 한 화면에서 과밀해질 수 있었습니다.",
    "solution": [
      "제품 이미지와 설명 영역을 분리해 사용자가 콘텐츠를 빠르게 훑어볼 수 있도록 구성했습니다.",
      "프로모션과 브랜드 소개 영역의 여백, 배경, 텍스트 계층을 모바일 기준으로 조정했습니다.",
      "이미지 비율 차이에 따른 레이아웃 흔들림을 줄이기 위해 영역별 표시 기준을 점검했습니다."
    ],
    "result": [
      "제품 중심 브랜드 사이트의 모바일 UI 구성 경험을 확보했습니다.",
      "이미지 중심 화면에서도 정보 전달력을 유지하는 레이아웃 기준을 경험했습니다.",
      "브랜드 모바일 구축 프로젝트를 아카이브형 사례로 정리했습니다."
    ],
    "tags": [
      "Mobile Web",
      "Brand Site",
      "Product UI",
      "HTML",
      "CSS"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/natuur_m.png",
    "media": [
      {
        "src": "/assets/portfolio/detail/m_natuur/img_m_natuur1.jpg",
        "alt": "나뚜루 팝 모바일 웹 페이지 스크린샷1",
        "caption": "나뚜루 팝 모바일 웹(국문) 구축 상세 화면 1. 나뚜루 팝 모바일 웹 페이지 스크린샷1",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_natuur/img_m_natuur2.jpg",
        "alt": "나뚜루 팝 모바일 웹 페이지 스크린샷2",
        "caption": "나뚜루 팝 모바일 웹(국문) 구축 상세 화면 2. 나뚜루 팝 모바일 웹 페이지 스크린샷2",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_natuur/img_m_natuur3.jpg",
        "alt": "나뚜루 팝 모바일 웹 페이지 스크린샷3",
        "caption": "나뚜루 팝 모바일 웹(국문) 구축 상세 화면 3. 나뚜루 팝 모바일 웹 페이지 스크린샷3",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_natuur/img_m_natuur4.jpg",
        "alt": "나뚜루 팝 모바일 웹 페이지 스크린샷4",
        "caption": "나뚜루 팝 모바일 웹(국문) 구축 상세 화면 4. 나뚜루 팝 모바일 웹 페이지 스크린샷4",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_natuur/img_m_natuur5.jpg",
        "alt": "나뚜루 팝 모바일 웹 페이지 스크린샷5",
        "caption": "나뚜루 팝 모바일 웹(국문) 구축 상세 화면 5. 나뚜루 팝 모바일 웹 페이지 스크린샷5",
        "variant": "mobile"
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
    "summary": "크리스피 크림 도넛 국문 모바일 웹 구축에서 제품, 매장, 이벤트 정보를 모바일 환경에 맞게 구현했습니다. 브랜드 이미지와 상품 정보를 균형 있게 보여주는 모바일 UI 개발 프로젝트입니다.",
    "problem": "제품과 이벤트 이미지가 많은 브랜드 사이트는 화면 폭이 좁아질수록 정보가 산만해질 수 있어 명확한 섹션 구분과 이미지 처리 기준이 필요했습니다.",
    "solution": [
      "제품·이벤트·매장 정보 섹션을 모바일 사용 흐름에 맞춰 구성했습니다.",
      "이미지와 텍스트가 함께 노출되는 영역은 비율과 여백을 점검해 가독성을 유지했습니다.",
      "버튼과 링크 요소는 모바일 터치 환경을 고려해 충분한 클릭 영역을 확보했습니다."
    ],
    "result": [
      "제품 중심 모바일 브랜드 웹의 섹션 설계와 UI 구현 경험을 정리했습니다.",
      "이미지 비율, 텍스트 길이, 터치 영역을 함께 고려한 모바일 QA 기준을 경험했습니다.",
      "브랜드 프로젝트 아카이브에서 모바일 구축 경험을 보완하는 사례로 정리했습니다."
    ],
    "tags": [
      "Mobile Web",
      "Brand Site",
      "Product UI",
      "UI",
      "CSS"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/krispy_m.png",
    "media": [
      {
        "src": "/assets/portfolio/detail/m_krispy/img_m_krispy1.jpg",
        "alt": "크리스피 크림 도넛 모바일 웹 스크린샷1",
        "caption": "크리스피 크림 도넛 모바일 웹(국문) 구축 상세 화면 1. 크리스피 크림 도넛 모바일 웹 스크린샷1",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_krispy/img_m_krispy2.jpg",
        "alt": "크리스피 크림 도넛 모바일 웹 스크린샷2",
        "caption": "크리스피 크림 도넛 모바일 웹(국문) 구축 상세 화면 2. 크리스피 크림 도넛 모바일 웹 스크린샷2",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_krispy/img_m_krispy3.jpg",
        "alt": "크리스피 크림 도넛 모바일 웹 스크린샷3",
        "caption": "크리스피 크림 도넛 모바일 웹(국문) 구축 상세 화면 3. 크리스피 크림 도넛 모바일 웹 스크린샷3",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_krispy/img_m_krispy4.jpg",
        "alt": "크리스피 크림 도넛 모바일 웹 스크린샷4",
        "caption": "크리스피 크림 도넛 모바일 웹(국문) 구축 상세 화면 4. 크리스피 크림 도넛 모바일 웹 스크린샷4",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_krispy/img_m_krispy5.jpg",
        "alt": "크리스피 크림 도넛 모바일 웹 스크린샷5",
        "caption": "크리스피 크림 도넛 모바일 웹(국문) 구축 상세 화면 5. 크리스피 크림 도넛 모바일 웹 스크린샷5",
        "variant": "mobile"
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
    "summary": "롯데푸드 파스퇴르 베네콜 웹 프로젝트에서 제품 브랜드 정보를 웹 화면에 맞춰 구현했습니다. 건강식품 브랜드의 설명형 콘텐츠를 사용자가 읽기 쉽도록 섹션과 정보 위계를 정리한 프로젝트입니다.",
    "problem": "제품 브랜드 웹은 이미지, 설명 텍스트, 홍보 메시지가 함께 들어가기 때문에 정보가 길어져도 사용자가 핵심 내용을 쉽게 파악할 수 있어야 했습니다.",
    "solution": [
      "제품 설명, 브랜드 메시지, 시각 자료 영역을 구분해 읽기 흐름을 정리했습니다.",
      "웹 화면에서 긴 텍스트가 부담스럽지 않도록 섹션 간 여백과 제목 계층을 적용했습니다.",
      "프로모션성 콘텐츠와 정보성 콘텐츠가 섞이지 않도록 화면 단위를 나눠 구현했습니다."
    ],
    "result": [
      "제품 브랜드 웹의 정보 전달형 UI 구현 경험을 확보했습니다.",
      "긴 설명 콘텐츠를 섹션 구조와 타이포그래피 위계로 정리하는 기준을 경험했습니다.",
      "브랜드 웹 구축 프로젝트를 아카이브형 사례로 보강했습니다."
    ],
    "tags": [
      "Web UI",
      "Brand Site",
      "Product",
      "HTML",
      "CSS"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/benecol_w.png",
    "media": [
      {
        "src": "/assets/portfolio/detail/w_benecol/img_w_benecol1.jpg",
        "alt": "롯데푸드 파스퇴르 베네콜 웹: 메인",
        "caption": "롯데푸드 파스퇴르 베네콜 웹 상세 화면 1. 롯데푸드 파스퇴르 베네콜 웹: 메인",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_benecol/img_w_benecol2.jpg",
        "alt": "롯데푸드 파스퇴르 베네콜 웹: 메인 Layer Popup ",
        "caption": "롯데푸드 파스퇴르 베네콜 웹 상세 화면 2. 롯데푸드 파스퇴르 베네콜 웹: 메인 Layer Popup ",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_benecol/img_w_benecol3.jpg",
        "alt": "롯데푸드 파스퇴르 베네콜 웹: 브랜드 스토리",
        "caption": "롯데푸드 파스퇴르 베네콜 웹 상세 화면 3. 롯데푸드 파스퇴르 베네콜 웹: 브랜드 스토리",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_benecol/img_w_benecol4.jpg",
        "alt": "롯데푸드 파스퇴르 베네콜 웹: FAQ",
        "caption": "롯데푸드 파스퇴르 베네콜 웹 상세 화면 4. 롯데푸드 파스퇴르 베네콜 웹: FAQ",
        "variant": "web"
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
    "summary": "애드캡슐소프트 모바일 웹 개편에서 회사 소개와 서비스 정보를 모바일 화면에 맞춰 재구성했습니다. 기업 정보성 콘텐츠를 작은 화면에서도 명확하게 읽을 수 있도록 구현한 모바일 개편 프로젝트입니다.",
    "problem": "기업 소개형 모바일 웹은 텍스트 정보가 많고 화면 전환 없이 내용을 읽어야 하는 경우가 많아 정보 계층과 스크롤 흐름이 중요했습니다.",
    "solution": [
      "회사 소개, 서비스, 연락 정보처럼 목적이 다른 콘텐츠를 섹션 단위로 나눠 구성했습니다.",
      "모바일에서 긴 텍스트를 읽기 쉽도록 제목, 설명, 리스트의 타이포그래피 계층을 조정했습니다.",
      "기존 웹에서 모바일로 전환될 때 필요한 이미지 크기와 여백 기준을 점검했습니다."
    ],
    "result": [
      "기업 소개형 모바일 웹 개편 경험을 확보했습니다.",
      "정보성 콘텐츠를 모바일 환경에 맞게 재배치하는 기준을 경험했습니다.",
      "초기 모바일 개편 프로젝트를 현재 UI 구조화 역량의 기반 사례로 정리했습니다."
    ],
    "tags": [
      "Mobile Web",
      "Corporate",
      "Renewal",
      "HTML",
      "CSS"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/adcapsule_m.png",
    "media": [
      {
        "src": "/assets/portfolio/detail/m_adcap/img_m_adcapsule1.jpg",
        "alt": "애드캡슐소프트 모바일 웹 스크린 이미지1",
        "caption": "애드캡슐소프트 모바일 웹 개편 상세 화면 1. 애드캡슐소프트 모바일 웹 스크린 이미지1",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_adcap/img_m_adcapsule2.jpg",
        "alt": "애드캡슐소프트 모바일 웹 스크린 이미지2",
        "caption": "애드캡슐소프트 모바일 웹 개편 상세 화면 2. 애드캡슐소프트 모바일 웹 스크린 이미지2",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_adcap/img_m_adcapsule3.jpg",
        "alt": "애드캡슐소프트 모바일 웹 스크린 이미지3",
        "caption": "애드캡슐소프트 모바일 웹 개편 상세 화면 3. 애드캡슐소프트 모바일 웹 스크린 이미지3",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_adcap/img_m_adcapsule4.jpg",
        "alt": "애드캡슐소프트 모바일 웹 스크린 이미지4",
        "caption": "애드캡슐소프트 모바일 웹 개편 상세 화면 4. 애드캡슐소프트 모바일 웹 스크린 이미지4",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_adcap/img_m_adcapsule5.jpg",
        "alt": "애드캡슐소프트 모바일 웹 스크린 이미지5",
        "caption": "애드캡슐소프트 모바일 웹 개편 상세 화면 5. 애드캡슐소프트 모바일 웹 스크린 이미지5",
        "variant": "mobile"
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
    "summary": "삼성증권 홈페이지 개편에서 금융 서비스 웹 화면의 정보 구조와 신뢰감 있는 UI 구현을 담당했습니다. 금융 도메인 특성상 명확한 콘텐츠 위계와 안정적인 웹 화면 구성을 중요하게 다룬 프로젝트입니다.",
    "problem": "금융 웹사이트는 정보량이 많고 사용자가 정확한 내용을 빠르게 찾아야 하므로, 화면 구조가 복잡해져도 콘텐츠 위계와 가독성이 유지되어야 했습니다.",
    "solution": [
      "금융 상품·서비스 콘텐츠를 제목, 설명, 링크, 안내 영역으로 구분해 정보 위계를 정리했습니다.",
      "웹 화면에서 신뢰감을 주는 여백, 정렬, 버튼 상태를 유지하도록 마크업과 CSS를 구현했습니다.",
      "여러 화면 유형이 섞여도 일관된 UI 톤이 유지되도록 공통 스타일 기준을 맞췄습니다."
    ],
    "result": [
      "금융 도메인의 웹 개편 프로젝트 경험을 확보했습니다.",
      "정보량이 많은 웹사이트에서 가독성과 신뢰감을 함께 고려한 UI 구현 기준을 경험했습니다.",
      "현재 금융 프로젝트 경험을 설명하는 초기 사례로 아카이브를 보강했습니다."
    ],
    "tags": [
      "Finance",
      "Web UI",
      "Renewal",
      "HTML",
      "CSS"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/samsung_stock_r.png",
    "media": [
      {
        "src": "/assets/portfolio/detail/w_samsung/img_w_stock1.jpg",
        "alt": "삼성증권, 삼성뱅킹 웹 페이지 개편: 메인",
        "caption": "삼성증권 홈페이지 개편 상세 화면 1. 삼성증권, 삼성뱅킹 웹 페이지 개편: 메인",
        "variant": "responsive"
      },
      {
        "src": "/assets/portfolio/detail/w_samsung/img_w_stock2.jpg",
        "alt": "삼성증권, 삼성뱅킹 웹 페이지 개편: 추천상품",
        "caption": "삼성증권 홈페이지 개편 상세 화면 2. 삼성증권, 삼성뱅킹 웹 페이지 개편: 추천상품",
        "variant": "responsive"
      },
      {
        "src": "/assets/portfolio/detail/w_samsung/img_w_stock3.jpg",
        "alt": "삼성증권, 삼성뱅킹 웹 페이지 개편: 스마트 검색",
        "caption": "삼성증권 홈페이지 개편 상세 화면 3. 삼성증권, 삼성뱅킹 웹 페이지 개편: 스마트 검색",
        "variant": "responsive"
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
    "summary": "클라우드 맥주 브랜드 사이트 구축에서 캠페인성 콘텐츠와 브랜드 이미지를 모바일 화면에 맞게 구현했습니다. 시각적 인상이 중요한 브랜드 사이트에서 이미지와 메시지의 균형을 다룬 프로젝트입니다.",
    "problem": "브랜드 캠페인 사이트는 시각 요소가 많아 모바일 화면에서 이미지가 과도하게 커지거나 핵심 메시지가 묻힐 수 있었습니다.",
    "solution": [
      "브랜드 이미지와 메시지 영역을 구분해 첫 화면에서 핵심 인상이 전달되도록 구성했습니다.",
      "모바일 화면 폭에 맞춰 이미지 비율, 텍스트 위치, 버튼 영역을 점검했습니다.",
      "캠페인성 콘텐츠가 스크롤 흐름 안에서 자연스럽게 이어지도록 섹션 간 간격을 조정했습니다."
    ],
    "result": [
      "브랜드 캠페인형 모바일 사이트 구축 경험을 확보했습니다.",
      "비주얼 중심 화면에서 메시지와 CTA가 묻히지 않도록 구성하는 기준을 경험했습니다.",
      "브랜드·프로모션 프로젝트 아카이브를 보완했습니다."
    ],
    "tags": [
      "Mobile Web",
      "Brand Campaign",
      "Visual UI",
      "HTML",
      "CSS"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/kloud_m.png",
    "media": [
      {
        "src": "/assets/portfolio/detail/m_kloudbeer/img_m_kloud1.jpg",
        "alt": "클라우드 모바일 웹 스크린화면1",
        "caption": "클라우드 맥주 브랜드 사이트 구축 상세 화면 1. 클라우드 모바일 웹 스크린화면1",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_kloudbeer/img_m_kloud2.jpg",
        "alt": "클라우드 모바일 웹 스크린화면2",
        "caption": "클라우드 맥주 브랜드 사이트 구축 상세 화면 2. 클라우드 모바일 웹 스크린화면2",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_kloudbeer/img_m_kloud3.jpg",
        "alt": "클라우드 모바일 웹 스크린화면3",
        "caption": "클라우드 맥주 브랜드 사이트 구축 상세 화면 3. 클라우드 모바일 웹 스크린화면3",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_kloudbeer/img_m_kloud4.jpg",
        "alt": "클라우드 모바일 웹 스크린화면4",
        "caption": "클라우드 맥주 브랜드 사이트 구축 상세 화면 4. 클라우드 모바일 웹 스크린화면4",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_kloudbeer/img_m_kloud5.jpg",
        "alt": "클라우드 모바일 웹 스크린화면5",
        "caption": "클라우드 맥주 브랜드 사이트 구축 상세 화면 5. 클라우드 모바일 웹 스크린화면5",
        "variant": "mobile"
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
    "summary": "한국남동발전 국문 인터넷 웹 리뉴얼에서 공공기관 웹사이트의 정보성 콘텐츠를 안정적으로 구현했습니다. 다양한 사용자가 접근하는 공공 웹 특성을 고려해 명확한 정보 구조와 웹표준 기반 화면 구성을 중점으로 다룬 프로젝트입니다.",
    "problem": "공공기관 웹사이트는 공지, 기관 소개, 사업 정보 등 정보량이 많고 사용자층이 넓어 일관된 탐색 구조와 안정적인 마크업이 중요했습니다.",
    "solution": [
      "정보성 콘텐츠를 섹션과 목록 단위로 정리해 사용자가 주요 내용을 빠르게 찾을 수 있도록 구성했습니다.",
      "웹표준 기반 마크업과 CSS 구조를 적용해 다양한 브라우저 환경에서 화면 안정성을 확보했습니다.",
      "국문 콘텐츠 특성에 맞게 제목, 본문, 링크 영역의 가독성을 확인했습니다."
    ],
    "result": [
      "공공기관 웹 리뉴얼 프로젝트의 UI 구현 경험을 확보했습니다.",
      "정보량이 많은 웹사이트에서 탐색성과 가독성을 유지하는 기준을 경험했습니다.",
      "웹표준과 공공 웹 구축 경험을 보여주는 아카이브 사례로 정리했습니다."
    ],
    "tags": [
      "Public Web",
      "Web Standard",
      "Renewal",
      "HTML",
      "CSS"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/kosep_w_kr.png",
    "media": [
      {
        "src": "/assets/portfolio/detail/w_namdong_k/namdong_kr1.jpg",
        "alt": "남동발전 국문 사이트 개편: 메인",
        "caption": "한국남동발전(KOR) 인터넷 웹 리뉴얼 상세 화면 1. 남동발전 국문 사이트 개편: 메인",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_namdong_k/namdong_kr2.jpg",
        "alt": "남동발전 국문 사이트 개편: 페이지 상세",
        "caption": "한국남동발전(KOR) 인터넷 웹 리뉴얼 상세 화면 2. 남동발전 국문 사이트 개편: 페이지 상세",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_namdong_k/namdong_kr3.jpg",
        "alt": "남동발전 국문 사이트 개편: 정보공개 상세",
        "caption": "한국남동발전(KOR) 인터넷 웹 리뉴얼 상세 화면 3. 남동발전 국문 사이트 개편: 정보공개 상세",
        "variant": "web"
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
    "summary": "한국남동발전 영문 인터넷 웹 리뉴얼에서 공공기관의 영문 정보성 콘텐츠를 웹 화면에 맞게 구현했습니다. 국문 사이트와의 일관성을 유지하면서 영문 콘텐츠 특성에 맞춰 UI를 정리한 프로젝트입니다.",
    "problem": "영문 공공 웹사이트는 국문과 다른 텍스트 길이와 콘텐츠 구성을 가지므로, 동일한 화면 체계 안에서도 언어별 가독성 검수가 필요했습니다.",
    "solution": [
      "국문 웹 리뉴얼의 정보 구조를 유지하면서 영문 콘텐츠가 자연스럽게 들어갈 수 있도록 레이아웃을 점검했습니다.",
      "영문 제목과 본문 길이에 맞춰 줄바꿈, 여백, 링크 영역의 안정성을 확인했습니다.",
      "공공 웹사이트에 필요한 명확한 정보 구조와 웹표준 기반 마크업을 유지했습니다."
    ],
    "result": [
      "공공기관 영문 웹 리뉴얼 프로젝트 경험을 확보했습니다.",
      "다국어 웹사이트에서 일관성과 언어별 가독성을 함께 관리하는 기준을 경험했습니다.",
      "국문·영문 공공 웹 구축 경험을 함께 보여줄 수 있도록 아카이브를 보강했습니다."
    ],
    "tags": [
      "Public Web",
      "Global",
      "Web Standard",
      "HTML",
      "CSS"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/kosep_w_en.png",
    "media": [
      {
        "src": "/assets/portfolio/detail/w_namdong_e/namdong_en1.jpg",
        "alt": "남동발전 영문 사이트 개편: 메인",
        "caption": "한국남동발전(ENG) 인터넷 웹 리뉴얼 상세 화면 1. 남동발전 영문 사이트 개편: 메인",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_namdong_e/namdong_en2.jpg",
        "alt": "남동발전 영문 사이트 개편: 페이지 상세",
        "caption": "한국남동발전(ENG) 인터넷 웹 리뉴얼 상세 화면 2. 남동발전 영문 사이트 개편: 페이지 상세",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_namdong_e/namdong_en3.jpg",
        "alt": "남동발전 영문 사이트 개편: SOCIAL VOLUNTEERS",
        "caption": "한국남동발전(ENG) 인터넷 웹 리뉴얼 상세 화면 3. 남동발전 영문 사이트 개편: SOCIAL VOLUNTEERS",
        "variant": "web"
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
    "summary": "롯데멤버스 차세대 멤버스 홈페이지 프로젝트에서 기존 데이터 기준 Backend 역할을 담당한 초기 경력 프로젝트입니다. 신규 포트폴리오에서는 UI 중심 대표 사례와 구분해 서비스 구축·협업 경험을 보여주는 아카이브로 정리했습니다.",
    "problem": "차세대 멤버십 서비스는 웹 화면과 서비스 로직이 함께 맞물려 동작하므로, 초기 경력 단계에서 화면과 데이터 흐름을 함께 이해해야 했습니다.",
    "solution": [
      "기존 데이터 기준 Backend 역할 범위 안에서 서비스 화면과 연결되는 기능 구현 흐름을 경험했습니다.",
      "멤버십 서비스의 웹 화면, 데이터 처리, 협업 산출물이 맞물리는 구조를 파악했습니다.",
      "현재 포트폴리오에서는 UI 대표 사례와 혼동되지 않도록 초기 구축 경험 아카이브로 분리했습니다."
    ],
    "result": [
      "멤버십 서비스 구축 프로젝트에서 백엔드 역할과 협업 흐름을 경험했습니다.",
      "프론트엔드 전환 이전의 서비스 구조 이해 경험을 포트폴리오 맥락에 맞게 정리했습니다.",
      "초기 경력 프로젝트를 과장하지 않고 아카이브성 사례로 보강했습니다."
    ],
    "tags": [
      "Backend",
      "Membership",
      "Web",
      "Service Build",
      "Archive"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/lotte_w.png",
    "media": [
      {
        "src": "/assets/portfolio/detail/w_lotte/img_w_lotte1.jpg",
        "alt": "롯데멤버스 메인 페이지 통합 개편: 메인",
        "caption": "롯데맴버스 차세대 멤버스 홈페이지 상세 화면 1. 롯데멤버스 메인 페이지 통합 개편: 메인",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_lotte/img_w_lotte2.jpg",
        "alt": "롯데멤버스 메인 페이지 통합 개편: 제휴서 찾기",
        "caption": "롯데맴버스 차세대 멤버스 홈페이지 상세 화면 2. 롯데멤버스 메인 페이지 통합 개편: 제휴서 찾기",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_lotte/img_w_lotte3.jpg",
        "alt": "롯데멤버스 메인 페이지 통합 개편: 통합 비밀번호",
        "caption": "롯데맴버스 차세대 멤버스 홈페이지 상세 화면 3. 롯데멤버스 메인 페이지 통합 개편: 통합 비밀번호",
        "variant": "web"
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
    "summary": "롯데멤버스 차세대 모바일 App 프로젝트에서 기존 데이터 기준 Backend 역할을 담당한 초기 경력 프로젝트입니다. 모바일 서비스 구축 흐름과 하이브리드 앱 환경을 이해한 경험으로 아카이브에 정리했습니다.",
    "problem": "모바일 앱 프로젝트는 화면, 데이터, 서비스 연동이 함께 움직이기 때문에 담당 역할 외에도 전체 서비스 흐름을 이해하는 것이 중요했습니다.",
    "solution": [
      "기존 데이터 기준 Backend 역할 범위에서 모바일 App 서비스 구축 과정에 참여했습니다.",
      "Hybrid App 환경에서 화면과 기능이 연결되는 전체 흐름을 경험했습니다.",
      "현재 포트폴리오에서는 UI 개발 대표 사례와 구분해 초기 모바일 서비스 경험으로 정리했습니다."
    ],
    "result": [
      "모바일 앱 구축 프로젝트에서 백엔드 역할과 협업 구조를 경험했습니다.",
      "하이브리드 앱 환경에 대한 초기 이해를 쌓았습니다.",
      "현재 모바일 UI 작업의 배경이 되는 서비스 구조 이해 경험으로 아카이브를 보강했습니다."
    ],
    "tags": [
      "Backend",
      "Mobile App",
      "Hybrid App",
      "Membership",
      "Archive"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/lotte_m.png",
    "media": [
      {
        "src": "/assets/portfolio/detail/m_lotte/img_m_lottemembers1.png",
        "alt": "롯데맴버스 화면 스크린 샷1",
        "caption": "롯데맴버스 차세대 모바일 App 상세 화면 1. 롯데맴버스 화면 스크린 샷1",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_lotte/img_m_lottemembers2.png",
        "alt": "롯데맴버스 화면 스크린 샷2",
        "caption": "롯데맴버스 차세대 모바일 App 상세 화면 2. 롯데맴버스 화면 스크린 샷2",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_lotte/img_m_lottemembers3.png",
        "alt": "롯데맴버스 화면 스크린 샷3",
        "caption": "롯데맴버스 차세대 모바일 App 상세 화면 3. 롯데맴버스 화면 스크린 샷3",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_lotte/img_m_lottemembers4.png",
        "alt": "롯데맴버스 화면 스크린 샷4",
        "caption": "롯데맴버스 차세대 모바일 App 상세 화면 4. 롯데맴버스 화면 스크린 샷4",
        "variant": "mobile"
      },
      {
        "src": "/assets/portfolio/detail/m_lotte/img_m_lottemembers5.png",
        "alt": "롯데맴버스 화면 스크린 샷5",
        "caption": "롯데맴버스 차세대 모바일 App 상세 화면 5. 롯데맴버스 화면 스크린 샷5",
        "variant": "mobile"
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
    "summary": "청소년 자원봉사 활동정보서비스 시스템 구축에서 기존 데이터 기준 Backend 역할을 담당한 공공 서비스 프로젝트입니다. 사용자 활동 정보를 다루는 서비스 구축 경험을 초기 경력 아카이브로 정리했습니다.",
    "problem": "공공 서비스형 시스템은 사용자 정보와 활동 데이터가 연결되므로 화면 뒤의 서비스 흐름과 데이터 처리 구조를 안정적으로 이해해야 했습니다.",
    "solution": [
      "기존 데이터 기준 Backend 역할 범위에서 서비스 구축 과정에 참여했습니다.",
      "사용자 활동 정보가 화면과 기능으로 연결되는 흐름을 프로젝트 단위로 경험했습니다.",
      "신규 포트폴리오에서는 UI 대표 사례와 구분해 공공 서비스 구축 경험으로 분리했습니다."
    ],
    "result": [
      "공공 서비스 구축 프로젝트의 협업 흐름과 기능 구현 과정을 경험했습니다.",
      "사용자 활동 데이터 기반 시스템의 구조를 이해하는 데 도움이 된 초기 경력 사례입니다.",
      "현재 프론트엔드 작업에서 서비스 구조를 함께 고려하는 배경 경험으로 정리했습니다."
    ],
    "tags": [
      "Backend",
      "Public Service",
      "Web",
      "Service Build",
      "Archive"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/doval_w.png",
    "media": [
      {
        "src": "/assets/portfolio/detail/w_dovol/img_dovol1.jpg",
        "alt": "청소년 자원봉사 DOVOL 개편: 메인",
        "caption": "청소년 자원봉사 활동정보서비스 시스템 구축 상세 화면 1. 청소년 자원봉사 DOVOL 개편: 메인",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_dovol/img_dovol2.jpg",
        "alt": "청소년 자원봉사 DOVOL 개편: 통합회원/전환",
        "caption": "청소년 자원봉사 활동정보서비스 시스템 구축 상세 화면 2. 청소년 자원봉사 DOVOL 개편: 통합회원/전환",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_dovol/img_dovol3.jpg",
        "alt": "청소년 자원봉사 DOVOL 개편: 봉사활동 검색/신청",
        "caption": "청소년 자원봉사 활동정보서비스 시스템 구축 상세 화면 3. 청소년 자원봉사 DOVOL 개편: 봉사활동 검색/신청",
        "variant": "web"
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
    "summary": "외교통상부 통합문서 관리 시스템 구축에서 기존 데이터 기준 Backend 역할을 담당한 공공기관 프로젝트입니다. 문서 관리형 시스템의 구축 흐름과 협업 경험을 초기 경력 아카이브로 정리했습니다.",
    "problem": "문서 관리 시스템은 정보 등록, 조회, 권한, 관리 흐름이 중요해 화면 뒤에서 동작하는 서비스 구조를 안정적으로 이해해야 했습니다.",
    "solution": [
      "기존 데이터 기준 Backend 역할 범위 안에서 통합문서 관리 시스템 구축 과정에 참여했습니다.",
      "문서 정보가 등록·조회·관리되는 서비스 흐름을 프로젝트 단위로 경험했습니다.",
      "현재 포트폴리오에서는 UI 대표 프로젝트와 분리해 시스템 구축 경험으로 정리했습니다."
    ],
    "result": [
      "공공기관 시스템 구축 프로젝트의 협업 및 기능 구현 흐름을 경험했습니다.",
      "문서 관리형 서비스 구조에 대한 초기 실무 이해를 쌓았습니다.",
      "프론트엔드 전환 이전의 서비스 구조 이해 경험으로 아카이브를 보강했습니다."
    ],
    "tags": [
      "Backend",
      "Public System",
      "Document System",
      "Web",
      "Archive"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/mofat_w.png",
    "media": [
      {
        "src": "/assets/portfolio/detail/w_mofat/img_mofat.jpg",
        "alt": "외교통상부 대표 이미지(내부 시스템이라 상세보기 화면이 없습니다.)",
        "caption": "외교통상부 통합문서 관리 시스템 구축 상세 화면 1. 외교통상부 대표 이미지(내부 시스템이라 상세보기 화면이 없습니다.)",
        "variant": "web"
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
    "summary": "Ramada HOTEL Casino 웹 사이트 운영에서 기존 데이터 기준 Backend 역할을 담당한 초기 운영 프로젝트입니다. 운영 중인 웹사이트의 유지보수 흐름과 서비스 대응 경험을 아카이브로 정리했습니다.",
    "problem": "운영 중인 웹사이트는 신규 구축과 달리 기존 화면과 기능을 유지하면서 필요한 변경을 안정적으로 반영해야 했습니다.",
    "solution": [
      "기존 데이터 기준 Backend 역할 범위에서 웹사이트 운영과 유지보수 흐름을 경험했습니다.",
      "운영 환경에서 기존 기능을 고려하며 변경사항을 반영하는 기준을 익혔습니다.",
      "현재 포트폴리오에서는 최신 UI 프로젝트와 구분해 초기 운영 경험으로 정리했습니다."
    ],
    "result": [
      "운영 서비스의 유지보수와 변경 대응 경험을 초기 경력에서 확보했습니다.",
      "기존 기능을 유지하면서 필요한 수정을 반영하는 운영 관점을 경험했습니다.",
      "현재 운영형 UI 프로젝트를 설명하는 배경 경험으로 아카이브를 보강했습니다."
    ],
    "tags": [
      "Backend",
      "Operation",
      "Web",
      "Maintenance",
      "Archive"
    ],
    "thumbnail": "/assets/portfolio/thumb_img_project/ramada_w.png",
    "media": [
      {
        "src": "/assets/portfolio/detail/w_ramada/img_w_ramada1.jpg",
        "alt": "Ramada 웹 페이지: 메인",
        "caption": "Ramada HOTEL Casino 웹 사이트 운영 상세 화면 1. Ramada 웹 페이지: 메인",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_ramada/img_w_ramada2.jpg",
        "alt": "Ramada 웹 페이지: 카지노 소개",
        "caption": "Ramada HOTEL Casino 웹 사이트 운영 상세 화면 2. Ramada 웹 페이지: 카지노 소개",
        "variant": "web"
      },
      {
        "src": "/assets/portfolio/detail/w_ramada/img_w_ramada3.jpg",
        "alt": "Ramada 웹 페이지: 이용안내",
        "caption": "Ramada HOTEL Casino 웹 사이트 운영 상세 화면 3. Ramada 웹 페이지: 이용안내",
        "variant": "web"
      }
    ],
    "featured": false,
    "isNew": false
  }
] satisfies Project[]
