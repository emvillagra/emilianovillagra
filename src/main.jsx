import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './spotify-widget.css'
import './poncho-design.css'
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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <SpotifyWidget />
  </StrictMode>,
)
