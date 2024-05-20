import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Animals from "./pages/animals/Animals"
import Farms from "./pages/farms/Farms"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/farms" element={<Farms/>} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
