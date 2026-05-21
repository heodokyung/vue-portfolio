import { createRouter, createWebHistory, type RouteLocationNormalizedLoaded } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ProjectDetailView from '@/views/ProjectDetailView.vue'
import AboutView from '@/views/AboutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'

const siteTitle = 'Heo Do Kyung Portfolio'

const setMetaContent = (selector: string, content: string) => {
  const element = document.head.querySelector<HTMLMetaElement>(selector)
  if (element) element.content = content
}

const getProjectId = (route: RouteLocationNormalizedLoaded) => {
  const projectId = route.params.projectId
  return Array.isArray(projectId) ? projectId[0] : projectId
}

const getRouteMeta = (route: RouteLocationNormalizedLoaded) => {
  if (route.name === 'home') {
    return {
      title: `${profile.nameKo} | UI/Frontend Developer Portfolio`,
      description: profile.headline,
    }
  }

  if (route.name === 'projects') {
    return {
      title: `Projects | ${siteTitle}`,
      description: '웹표준, 접근성, 반응형 UI, Vue3/React 기반 UI 개발 프로젝트를 정리한 아카이브입니다.',
    }
  }

  if (route.name === 'about') {
    return {
      title: `About | ${siteTitle}`,
      description: 'UI/Frontend Developer 허도경의 경력, 기술 스택, 작업 기준을 정리한 페이지입니다.',
    }
  }

  if (route.name === 'project-detail') {
    const project = projects.find((item) => item.id === getProjectId(route))
    if (project) {
      return {
        title: `${project.title} | ${siteTitle}`,
        description: project.summary,
      }
    }
  }

  return {
    title: `404 | ${siteTitle}`,
    description: '요청한 페이지를 찾을 수 없습니다. 포트폴리오의 주요 페이지로 이동해 주세요.',
  }
}

const syncDocumentMeta = (route: RouteLocationNormalizedLoaded) => {
  const { title, description } = getRouteMeta(route)
  const currentUrl = `${window.location.origin}${route.fullPath}`

  document.title = title
  setMetaContent('meta[name="description"]', description)
  setMetaContent('meta[property="og:title"]', title)
  setMetaContent('meta[property="og:description"]', description)
  setMetaContent('meta[property="og:url"]', currentUrl)
  setMetaContent('meta[name="twitter:title"]', title)
  setMetaContent('meta[name="twitter:description"]', description)
}

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/projects', name: 'projects', component: ProjectsView },
    { path: '/projects/:projectId', name: 'project-detail', component: ProjectDetailView, props: true },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: prefersReducedMotion() ? 'auto' : 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  syncDocumentMeta(to)
})

export default router
