import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './spotify-widget.css'
import './poncho-design.css'
import './hero-contrast-fix.css'
import './desktop-compact.css'
import './poncho-presence.css'
import './instagram-embeds.css'
import App from './App.jsx'

function SpotifyWidget() {
  useEffect(() => {
    const releases = document.querySelector('.releases')
    if (!releases || document.querySelector('.spotify-widget')) return
    const section = document.createElement('section')
    section.className = 'spotify-widget'
    section.innerHTML = `<div><p>Escuchá en Spotify</p><h2>La música<br><i>siempre cerca.</i></h2><span>Seguime para no perderte las nuevas canciones.</span></div><iframe title="Emiliano Villagra en Spotify" src="https://open.spotify.com/embed/artist/3vSNxw6bYmiYDkVOfJ99YA?utm_source=generator" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    releases.after(section)
    return () => section.remove()
  }, [])
  return null
}

function InstagramLink() {
  useEffect(() => {
    const social = document.querySelector('.social')
    if (!social || document.querySelector('.instagram-link')) return
    const link = document.createElement('a')
    link.className = 'instagram-link'
    link.href = 'https://www.instagram.com/emiliano.musica/'
    link.target = '_blank'
    link.rel = 'noreferrer'
    link.textContent = 'Instagram'
    social.prepend(link)
    return () => link.remove()
  }, [])
  return null
}

function InstagramEmbeds() {
  useEffect(() => {
    const facebook = document.querySelector('.facebook')
    if (!facebook || document.querySelector('.instagram-embeds')) return
    const section = document.createElement('section')
    section.className = 'instagram-embeds'
    section.innerHTML = `<div class="instagram-title"><p>Instagram</p><h2>Desde el<br><i>escenario.</i></h2><span>Momentos, canciones y camino compartido.</span></div><div class="instagram-grid"><blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/emiliano.musica/reel/DY7zwhrBvMT/" data-instgrm-version="14"></blockquote><blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/emiliano.musica/reel/DO98OcODmD5/" data-instgrm-version="14"></blockquote><blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/emiliano.musica/reel/DPsQseqDj8r/" data-instgrm-version="14"></blockquote></div>`
    facebook.after(section)
    const existing = document.querySelector('script[data-instagram-embed]')
    if (existing && window.instgrm) window.instgrm.Embeds.process()
    else {
      const script = document.createElement('script')
      script.async = true
      script.src = 'https://www.instagram.com/embed.js'
      script.dataset.instagramEmbed = 'true'
      script.onload = () => window.instgrm?.Embeds.process()
      document.body.appendChild(script)
    }
    return () => section.remove()
  }, [])
  return null
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <SpotifyWidget />
    <InstagramLink />
    <InstagramEmbeds />
  </StrictMode>,
)
