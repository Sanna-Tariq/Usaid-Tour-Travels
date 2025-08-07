import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

  import 'bootstrap/dist/css/bootstrap.min.css';

   import '@/assets/font-awesome-lib/icon/font-awesome.min.css'
   import '@/assets/css/style.css'
   import '@/assets/css/responsive.css'
   import '@/assets/css/slick.min.css'
   import '@/assets/css/aos.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
