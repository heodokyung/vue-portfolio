declare module 'lottie-web' {
  interface AnimationItem {
    destroy: () => void
  }

  interface LoadAnimationOptions {
    container: Element
    renderer: 'svg' | 'canvas' | 'html'
    loop: boolean
    autoplay: boolean
    path: string
    rendererSettings?: {
      preserveAspectRatio?: string
    }
  }

  const lottie: {
    loadAnimation: (options: LoadAnimationOptions) => AnimationItem
  }

  export default lottie
}
