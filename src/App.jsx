import './App.css'
import AboutMe from './componentes/About'
import ContactForm from './componentes/ContactForm'
import Header from './componentes/Header'
import Hero from './componentes/Hero/Hero'
import Tecnologias from './componentes/Tecnologias'
import Proyectos from './componentes/Proyectos'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <AboutMe/>
      <Tecnologias/>
      <Proyectos/>
      <ContactForm/>
    </>
  )
}

export default App
