import { Route, Routes, BrowserRouter } from "react-router-dom"
import Profile from "./pages/Profile"
import CreateProfile from "./pages/CreateProfilePage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
          <Navbar />
          <Home />
          <Footer/>

          </>
          
      
      } />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />        
      </Routes>
    </BrowserRouter>
  )
}

export default App