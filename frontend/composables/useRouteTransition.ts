export function useRouteTransition() {
  const isRouteTransitioning = useState('is-route-transitioning', () => false)
  let timer: number | undefined

  function triggerRouteTransition(duration = 520) {
    if (import.meta.server) return
    window.clearTimeout(timer)
    isRouteTransitioning.value = true
    timer = window.setTimeout(() => {
      isRouteTransitioning.value = false
    }, duration)
  }

  onBeforeUnmount(() => {
    if (import.meta.client) {
      window.clearTimeout(timer)
    }
  })

  return {
    isRouteTransitioning,
    triggerRouteTransition
  }
}
