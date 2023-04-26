import React from 'react';
import ReactDOM from 'react-dom/client';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import App from './App';
import './styles/index.css';
import { AuthContextProvider } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
        <App/>
      </React.StrictMode>,
    </ChatContextProvider>
  </AuthContextProvider>

)
    