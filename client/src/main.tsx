import React from 'react'
import ReactDOM from 'react-dom/client'

/*Redux*/
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

/*React-Router*/
import { BrowserRouter } from 'react-router-dom'

/*Components*/
import App from './App.tsx'

/*Styles*/
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
