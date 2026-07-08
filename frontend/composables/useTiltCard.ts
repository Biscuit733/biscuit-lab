export function useTiltCard(maxTilt = 10) {
  const tiltStyle = reactive({
    '--tilt-x': '0deg',
    '--tilt-y': '0deg',
    '--glare-x': '50%',
    '--glare-y': '50%'
  })

  function onTiltMove(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement
    const rect = target.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height
    const rotateY = (x - 0.5) * maxTilt
    const rotateX = (0.5 - y) * maxTilt

    tiltStyle['--tilt-x'] = `${rotateX.toFixed(2)}deg`
    tiltStyle['--tilt-y'] = `${rotateY.toFixed(2)}deg`
    tiltStyle['--glare-x'] = `${(x * 100).toFixed(1)}%`
    tiltStyle['--glare-y'] = `${(y * 100).toFixed(1)}%`
  }

  function resetTilt() {
    tiltStyle['--tilt-x'] = '0deg'
    tiltStyle['--tilt-y'] = '0deg'
    tiltStyle['--glare-x'] = '50%'
    tiltStyle['--glare-y'] = '50%'
  }

  return {
    tiltStyle,
    onTiltMove,
    resetTilt
  }
}
