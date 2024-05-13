import ContactForm from "./components/ContactForm"
import "./App.css"
import Projects from "./components/Projects"
//@ts-ignore
import HeroSection from "./components/HeroSection.jsx"
import NavBar from "./components/NavBar.js"



const App = () => {
  return (
    <div className="font-raleway scroll-smooth relative max-w-[1500px] mx-auto">
      <NavBar/>
      <HeroSection />
      <Projects />
      <ContactForm />
    </div>
  )
}

export default App
