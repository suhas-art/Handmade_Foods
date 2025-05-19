import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbra/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import Add from "./pages/Add/Add"
import List from "./pages/List/List"
import Order from "./pages/Orders/Order"


import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'



function App() {

  const url = "http://localhost:5000";

  return (
    <>
    <ToastContainer/>
      <Navbar/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/order" element={<Order url={url} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
