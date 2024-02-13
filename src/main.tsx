import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './router.tsx'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import { Toaster } from 'sonner'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
      <Toaster richColors position='bottom-right' />
    </Provider>
  </React.StrictMode>,
)
