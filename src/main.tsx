import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import AppWithRouter from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <AppWithRouter />
    </I18nextProvider>
  </StrictMode>,
)
