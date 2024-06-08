import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Context from './pages/Context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
<>
  {/* const [userPoints,setUserPoint]=useState(20); */}
  {/* <Context.Provider value={{userPoints}}> */}
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  {/* </Context.Provider> */}
</>
)
