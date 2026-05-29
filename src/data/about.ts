import type { AboutItem } from '@/types/portfolio'

export const aboutItems = [
  {
    "id": "about-1",
    "type": "certificate",
    "title": "정보처리기사",
    "period": "2015.05.08",
    "organization": "한국산업인력공단",
    "summary": null,
    "url": null
  },
  {
    "id": "about-2",
    "type": "activity",
    "title": "정보접근성 지킴이 활동",
    "period": "2016.04.04. - 2016.12.31.",
    "organization": "미래창조과학부",
    "summary": "미래창조과학부 주관 웹 정보접근성 지킴이 활동에 참여해 표본 사이트의 접근성 준수 여부를 점검하고, 보고서 작성 및 개선 권고 활동을 진행했습니다.",
    "url": null
  },
  {
    "id": "about-3",
    "type": "education",
    "title": "React JS 마스터클래스",
    "period": null,
    "organization": "(온라인) 노마드 코더",
    "summary": "React 기반 암호화폐 시세 트래커 프로젝트를 구현하며 컴포넌트 구조, API 연동, 상태 처리 흐름을 학습했습니다.",
    "url": null,
    "links": [
      { "label": "Repo", "href": "https://github.com/heodokyung/react-coin-list" },
      { "label": "Demo", "href": "https://heodokyung.github.io/react-coin-list/" }
    ]
  },
  {
    "id": "about-4",
    "type": "education",
    "title": "ReactJS로 영화 웹 서비스 만들기",
    "period": null,
    "organization": "(온라인) 노마드 코더",
    "summary": "React 기반 영화 웹 서비스 프로젝트를 구현하며 라우팅, 데이터 호출, 상세 화면 구성의 기본기를 학습했습니다.",
    "url": null,
    "links": [
      { "label": "Repo", "href": "https://github.com/heodokyung/react-netflix" },
      { "label": "Demo", "href": "https://heodokyung.github.io/react-netflix/" }
    ]
  },
  {
    "id": "about-5",
    "type": "education",
    "title": "하이브리드 인터페이스 기술구현 고도화",
    "period": "2015.10.17. - 2015.11.01.",
    "organization": "대한상공회의소",
    "summary": "AngularJS를 활용한 하이브리드 앱 구현 과정을 학습했습니다.",
    "url": null
  },
  {
    "id": "about-6",
    "type": "education",
    "title": "웹표준 전문가 양성과정",
    "period": "2013.10.16. - 2013.12.10.",
    "organization": "한국직업전문학교",
    "summary": "HTML, CSS, jQuery, JavaScript, 웹 접근성, 크로스 브라우징 기초를 학습했습니다.",
    "url": null
  },
  {
    "id": "about-7",
    "type": "education",
    "title": "멀티플랫폼 스마트 웹 & 앱 개발자 과정",
    "period": "2012.03.15. - 2012.08.06.",
    "organization": "중앙정보처리학원",
    "summary": "Java, Servlet, JSP, Oracle, SQL, Struts, Spring 기반 웹 구조와 데이터베이스 기능 구현을 학습했습니다.",
    "url": null
  }
] satisfies AboutItem[]
