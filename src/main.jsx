/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import { UserIDProvider } from './components/Context.jsx'


const SharedContext = createContext();

export const SharedProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken") || "");

  return (
    <SharedContext.Provider value={{ authToken, setAuthToken }}>
      {children}
    </SharedContext.Provider>
  );
};
export const useAuthContext = () => useContext(SharedContext);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SharedProvider>
      <UserIDProvider>
    <App/>
    </UserIDProvider>
    </SharedProvider>
  </React.StrictMode>
)
