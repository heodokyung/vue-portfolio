import type { Skill } from '@/types/portfolio'

export const skills = [
  {
    "id": "html",
    "name": "HTML5&CSS3",
    "summary": "웹표준, 웹 접근성을 준수하고 HTML5, CSS3를 활용하여 시멘틱한 마크업을 사용합니다.",
    "url": "https://www.w3schools.com/",
    "image": "/assets/portfolio/thumb_img_skill/ico_skill_html.png",
    "group": "frontend"
  },
  {
    "id": "sass",
    "name": "Sass/Scss",
    "summary": "Sass/Scss를 활용하여 CSS를 컴파일 합니다. 간결하고 재사용, 확장성이 가능한 CSS 코드를 사용하려 합니다.",
    "url": "https://sass-lang.com/",
    "image": "/assets/portfolio/thumb_img_skill/ico_skill_sass.png",
    "group": "frontend"
  },
  {
    "id": "script",
    "name": "JavaScript",
    "summary": "JavaScript의 ES5, ES6 문법을 활용하여 웹/앱 환경에 최적화 된 모션과 기능을 구현하도록 노력합니다.",
    "url": "https://www.w3schools.com/js/",
    "image": "/assets/portfolio/thumb_img_skill/ico_skill_script.png",
    "group": "frontend"
  },
  {
    "id": "vue",
    "name": "Vue",
    "summary": "Vue3로 Front-End 화면을 구현합니다. 더마켓을 Vue3환경에서 초기 환경 셋팅부터 공통 부분 요소의 컴포넌트 및 구조를 만드는 작업을 하였습니다.",
    "url": "https://ko.vuejs.org/",
    "image": "/assets/portfolio/thumb_img_skill/ico_skill_vue.png",
    "group": "frontend"
  },
  {
    "id": "react",
    "name": "React",
    "summary": "React로 Front-End 화면을 구현합니다. Finnq 웹사이트 개편을 React로 구현하였습니다. React의 상태관리를 위해 Recoil을 사용합니다.",
    "url": "https://ko.legacy.reactjs.org/",
    "image": "/assets/portfolio/thumb_img_skill/ico_skill_react.png",
    "group": "frontend"
  },
  {
    "id": "next",
    "name": "Next/Nuxt",
    "summary": "React/Vue 가상 돔 환경의 SSR(Server Side Rendering)을 구현할 수 있도록 사용하였습니다.",
    "url": "https://nextjs.org/",
    "image": "/assets/portfolio/thumb_img_skill/ico_skill_next.png",
    "group": "frontend"
  },
  {
    "id": "github",
    "name": "Github",
    "summary": "작업물의 히스토리르 관리하고 효율적으로 작업을 진행하기 위해 깃헙을 통한 버전관리를 사용하였습니다.",
    "url": "https://github.com/",
    "image": "/assets/portfolio/thumb_img_skill/ico_skill_github.png",
    "group": "workflow"
  },
  {
    "id": "gitLab",
    "name": "GitLab",
    "summary": "개발에 작업물을 전달하고 CI/CD를 통한 배포 관리를 위해 깃랩을 통해서 작업물을 전달하고 관리합니다.",
    "url": "https://about.gitlab.com/",
    "image": "/assets/portfolio/thumb_img_skill/ico_skill_gitlab.png",
    "group": "workflow"
  },
  {
    "id": "zeplin",
    "name": "Zeplin",
    "summary": "디자이너와 협업을 위해 제플린을 통해 디자인을 전달받고 작업하였고 코멘트로 수정사항과 피드백을 전달하였습니다.",
    "url": "https://zeplin.io/",
    "image": "/assets/portfolio/thumb_img_skill/ico_skill_zeplin.png",
    "group": "collaboration"
  },
  {
    "id": "jira",
    "name": "Jira",
    "summary": "Jira를 통하여 신규서비스 및 수정사항, 히스토리를 관리하며 소스코드를 배포,수정합니다.",
    "url": "https://ko.atlassian.com/software/jira",
    "image": "/assets/portfolio/thumb_img_skill/ico_skill_jira.png",
    "group": "workflow"
  },
  {
    "id": "wiki",
    "name": "Wiki Confluence",
    "summary": "Wiki Confluence를 통해 이슈사항을 히스토리를 남겨서 모두가 확인하고 반복된 실수를 하지 않도록 공유하였습니다.",
    "url": "https://ko.atlassian.com/software/confluence",
    "image": "/assets/portfolio/thumb_img_skill/ico_skill_wiki.png",
    "group": "workflow"
  },
  {
    "id": "slack",
    "name": "Slack",
    "summary": "Slack을 통해 이슈사항을 공유하고 프로젝트별로 채널을 만들어 업무의 상황과 이슈를 공유하여 효율을 높입니다.",
    "url": "https://slack.com/",
    "image": "/assets/portfolio/thumb_img_skill/ico_skill_slack.png",
    "group": "collaboration"
  }
] satisfies Skill[]
