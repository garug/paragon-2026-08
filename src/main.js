import { tiles } from './tiles.js'

const root = document.getElementById('hotspots')
const overlay = document.getElementById('overlay')
const overlayTitle = document.getElementById('overlay-title')
const overlayText = document.getElementById('overlay-text')
const overlayImage = document.getElementById('overlay-image')
const overlayClose = document.getElementById('overlay-close')
const overlayDialog = overlay.querySelector('.overlay__dialog')

let lastFocus = null

function openOverlay(tile) {
  lastFocus = document.activeElement
  overlayTitle.textContent = tile.title
  overlayText.replaceChildren()

  if (tile.image) {
    overlayImage.hidden = false
    overlayImage.src = tile.image
    overlayImage.alt = tile.title || ''
  } else {
    overlayImage.hidden = true
    overlayImage.removeAttribute('src')
    overlayImage.alt = ''
  }

  if (tile.locked) {
    overlayText.textContent = 'Bloqueado'
  } else if (tile.link) {
    const anchor = document.createElement('a')
    anchor.href = tile.link
    anchor.className = 'overlay__link'
    anchor.textContent = tile.link
    overlayText.appendChild(anchor)
  } else if (tile.text) {
    overlayText.textContent = tile.text
  }

  overlay.hidden = false
  overlay.setAttribute('aria-hidden', 'false')
  document.body.classList.add('overlay-open')
  overlayClose.focus()
}

function closeOverlay() {
  if (overlay.hidden) return
  overlay.hidden = true
  overlay.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('overlay-open')
  overlayImage.hidden = true
  overlayImage.removeAttribute('src')
  if (lastFocus && typeof lastFocus.focus === 'function') {
    lastFocus.focus()
  }
}

for (const tile of tiles) {
  const btn = document.createElement('button')
  btn.type = 'button'
  btn.className = tile.locked ? 'hotspot hotspot--locked' : 'hotspot'
  btn.title = tile.locked ? `${tile.label} (bloqueado)` : tile.label
  btn.setAttribute('aria-label', tile.locked ? `${tile.label}, bloqueado` : tile.label)
  btn.dataset.id = tile.id
  btn.style.left = `${tile.left}%`
  btn.style.top = `${tile.top}%`
  btn.style.width = `${tile.width}%`
  btn.style.height = `${tile.height}%`
  btn.addEventListener('click', () => openOverlay(tile))
  root.appendChild(btn)
}

overlayClose.addEventListener('click', closeOverlay)

overlay.addEventListener('click', (event) => {
  if (event.target === overlay) closeOverlay()
})

overlayDialog.addEventListener('click', (event) => {
  event.stopPropagation()
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeOverlay()
})
