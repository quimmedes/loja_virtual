import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './css/forms.css'
import { AppProvider } from './Context';
import { Auth0Provider } from "@auth0/auth0-react";

/*
import axios from 'axios';

var options = {
  method: 'PATCH',
  url: 'http://localhost:3000/api/v2/tenants/settings',
  headers: {'content-type': 'application/json', authorization: 'Bearer API2_ACCESS_TOKEN'},
  data: {enabled_locales: ['pt-BR', 'pt-PT']}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

*/


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}>

         
     <AppProvider>
    <App />
    </AppProvider>
     </Auth0Provider>
  
);

