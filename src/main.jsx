import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'; {/* Добавляем импорт роутера  */}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Роутер управляет маршрутизацией */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)

