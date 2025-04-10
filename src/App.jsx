import ParticlesBackground from "./components/ParticlesBackground"
import { Route, Routes } from "react-router-dom"
import SobrePage from "./components/pages/SobrePage"
import HomePage from "./components/pages/HomePage"
import SocialLinks from "./components/SocialLinks"
import GeneralFooter from "./components/GeneralFooter"
import AllProjetosPage from "./components/pages/AllProjetosPage"
import AllTechsPage from "./components/pages/AllTechsPage"

function App() {

  return (
    <>
      <ParticlesBackground />
      <SocialLinks />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/about-me" element={<SobrePage />}/>

        <Route path="/projects" element={<AllProjetosPage />}/>

        <Route path="/Tecnologias" element={<AllTechsPage />}/>

      </Routes>

      <GeneralFooter />
        
      
    </>
  )
}

export default App
