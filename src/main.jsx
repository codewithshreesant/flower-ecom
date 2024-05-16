import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AppProvider } from './Context/FlowersContext.jsx'
// import './index.css'
// import { CardProvider } from './Context/Card_Context.jsx'
import { CardProvider } from './Context/Card_Context.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-uhtp2b62taf7mzy4.us.auth0.com"
    clientId="CAkjKIeXSKu4BypQdbiHaJJoTq6R7bJT"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
      <CardProvider>  
        <App />
      </CardProvider>
    </AppProvider>
    </Auth0Provider>,
   </React.StrictMode>, 
)