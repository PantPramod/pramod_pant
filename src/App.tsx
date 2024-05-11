import ContactForm from "./components/ContactForm"
import "./App.css"
import Projects from "./components/Projects"
//@ts-ignore
import HeroSection from "./components/HeroSection.jsx"



const App = () => {
  return (
    <div className="font-raleway scroll-smooth relative max-w-[1500px] mx-auto">
      <HeroSection />
      <Projects />
      <ContactForm />
    </div>
  )
}

export default App
