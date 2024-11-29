// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { BookmarksProvider } from './context/BookmarksProvider.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter >
    <BookmarksProvider>
      <App />
    </BookmarksProvider>
  </BrowserRouter>
  // </StrictMode>
)
