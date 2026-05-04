import { Route, Routes, BrowserRouter } from "react-router-dom"
import Profile from "./pages/Profile"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App