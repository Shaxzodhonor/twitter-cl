import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as AuthProvider} from './context/AuthContext/AuthContext'
import { Provider as LoginContext } from "./context/LoginContext/LoginContext";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <LoginContext>
            <App />
          </LoginContext>  
      </AuthProvider> 
     </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);
