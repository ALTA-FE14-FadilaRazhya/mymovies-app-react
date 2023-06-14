import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import NowPlaying from './NowPlaying.tsx'
import ListFavourite from './ListFavourite.tsx'
import DetailMovie from './DetailMovie.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


