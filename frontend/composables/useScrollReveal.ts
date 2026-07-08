const revealSelector = [
  '.section-heading',
  '.sub-hero',
  '.page-intro',
  '.resume-section',
  '.work-section',
  '.capabilities-section',
  '.gallery-section',
  '.contact-section',
  '.content-layout',
  '.notes-filter-bar',
  '.notes-masonry',
  '.article-list',
  '.resource-tabs',
  '.stats-grid',
  '.work-grid',
  '.work-grid-page',
  '.resource-grid',
  '.lab-grid',
  '.hero-scene-reel',
  '.hero-thumbnail-rail',
  '.profile-character-card',
  '.glass-card',
  '.note-card',
  '.work-card',
  '.gallery-card',
  '.capability-card',
  '.stat-card',
  '.resource-card',
  '.work-showcase-card',
  '.lab-experiment-card',
  '.article-card'
].join(', ')

export function useScrollReveal() {
  let observer: IntersectionObserver | undefined

  function disconnect() {
    observer?.disconnect()
    observer = undefined
  }

  async function refreshScrollReveal() {
    if (import.meta.server) return

    await nextTick()
    disconnect()

    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector))
      .filter((element) => !element.closest('.feature-modal, .gallery-modal, .loading-screen, .home-header'))

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      })
    }, {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.12
    })

    elements.forEach((element, index) => {
      element.classList.add('reveal-on-scroll')
      element.style.setProperty('--reveal-index', String(index % 8))
      observer?.observe(element)
    })
  }

  onBeforeUnmount(disconnect)

  return {
    refreshScrollReveal
  }
}
