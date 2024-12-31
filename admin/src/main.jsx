import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import reactDOM from 'react-dom/client'

reactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
