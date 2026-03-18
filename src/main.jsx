import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SakshiPortfolio from './SakshiPortfolio'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SakshiPortfolio />
  </StrictMode>,
)
