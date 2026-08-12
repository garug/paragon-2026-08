/** GoatCounter site code — create at https://www.goatcounter.com with this exact code. */
export const GOATCOUNTER_CODE = 'garug-paragon'

export function initTelemetry() {
  if (!GOATCOUNTER_CODE) return
  if (document.querySelector('script[data-goatcounter]')) return

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://gc.zgo.at/count.js'
  script.dataset.goatcounter = `https://${GOATCOUNTER_CODE}.goatcounter.com/count`
  document.head.appendChild(script)
}

/** Custom event (e.g. tile open). Ignored until the GoatCounter script is ready. */
export function trackEvent(path, title = path) {
  const count = window.goatcounter?.count
  if (typeof count !== 'function') return
  count({ path: `/${path}`, title, event: true })
}
