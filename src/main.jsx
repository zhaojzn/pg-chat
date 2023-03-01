import React from 'react';
import ReactDOM from 'react-dom/client';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import App from './App';
import './styles/index.css';
import { AuthContextProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
  </AuthContextProvider>

)
  