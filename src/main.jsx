import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import App, { rootReducer } from './App.jsx'
import './index.css'

// Configure the Redux store with the rootReducer
const store = configureStore({
  reducer: rootReducer
})

// Create a root and render the App component wrapped with StrictMode and Provider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Provider makes the Redux store available to the rest of the app */}
    <Provider store={store}>
      {/* Render the main App component */}
      <App />
    </Provider>
  </StrictMode>,
)
