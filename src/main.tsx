import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import DateProvider from './contexts/DateContext.tsx'
import RegionProvider from './contexts/RegionContext.tsx'
import BetProvider from './contexts/BetContext.tsx'
import AgencyProvider from './contexts/AgencyContext.tsx'
import GlobalProvider from './contexts/GlobalContext.tsx'
import SettingProvider from './contexts/SettingContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <GlobalProvider>
      <DateProvider>
        <SettingProvider>
          <RegionProvider>
            <BetProvider>
              <AgencyProvider>
                <App />
              </AgencyProvider>
            </BetProvider>
          </RegionProvider>
        </SettingProvider>
      </DateProvider>
    </GlobalProvider>
  </BrowserRouter>
)
