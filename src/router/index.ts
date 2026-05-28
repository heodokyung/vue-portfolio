import { createRouter, createWebHistory, type RouteLocationNormalizedLoaded } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ProjectDetailView from '@/views/ProjectDetailView.vue'
import AboutView from '@/views/AboutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'

const siteTitle = 'Heo Do Kyung Portfolio'
const routeScrollPrefix = 'portfolio:route-scroll:'

if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

const setMetaContent = (selector: string, content: string) => {
  const element = document.head.querySelector<HTMLMetaElement>(selector)
  if (element) element.content = content
}

const getProjectId = (route: RouteLocationNormalizedLoaded) => {
  const projectId = route.params.projectId
  return Array.isArray(projectId) ? projectId[0] : projectId
}

const getRouteScrollKey = (route: RouteLocationNormalizedLoaded) =>
  `${routeScrollPrefix}${String(route.name ?? 'unknown')}:${route.fullPath.split('#')[0]}`

const saveRouteScroll = (route: RouteLocationNormalizedLoaded) => {
  if (!route.name || typeof window === 'undefined') return
  sessionStorage.setItem(getRouteScrollKey(route), String(window.scrollY))
}

const getRouteScroll = (route: RouteLocationNormalizedLoaded) => {
  if (typeof window === 'undefined') return 0
  const stored = Number(sessionStorage.getItem(getRouteScrollKey(route)) ?? 0)
  return Number.isFinite(stored) ? stored : 0
}

const restoreAfterRender = (top: number) =>
  new Promise<{ top: number; behavior: ScrollBehavior }>((resolve) => {
    window.requestAnimationFrame(() => {
      window.setTimeout(() => resolve({ top, behavior: 'auto' }), 60)
    })
  })

const getRouteMeta = (route: RouteLocationNormalizedLoaded) => {
  if (route.name === 'home') {
    return {
      title: `${profile.nameKo} | UI Developer Portfolio`,
      description: profile.headline,
    }
  }

  if (route.name === 'projects') {
    return {
      title: `Projects | ${siteTitle}`,
      description: '웹표준, 접근성, 반응형 UI, Vue3/React 화면 구현 프로젝트를 정리한 아카이브입니다.',
    }
  }

  if (route.name === 'about') {
    return {
      title: `About | ${siteTitle}`,
      description: 'UI Developer 허도경의 경력, 기술 스택, 마크업 컨벤션과 작업 기준을 정리한 페이지입니다.',
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
  scrollBehavior(to, from, savedPosition) {
    if (from.name === 'project-detail' && (to.name === 'home' || to.name === 'projects')) {
      return restoreAfterRender(getRouteScroll(to))
    }

    if (savedPosition) return restoreAfterRender(savedPosition.top)

    if (to.hash) {
      return {
        el: to.hash,
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      }
    }

    if (to.name === 'project-detail') return { top: 0, behavior: 'auto' }

    return { top: 0, behavior: 'auto' }
  },
})

router.beforeEach((to, from) => {
  saveRouteScroll(from)

  if (to.name !== 'project-detail' && from.name !== 'project-detail' && !to.hash) {
    sessionStorage.removeItem(getRouteScrollKey(to))
  }
})

router.afterEach((to) => {
  syncDocumentMeta(to)
})

export default router
