import HeroSection from '../components/HeroSection'
import Projects from "../components/Projects"
import ContactForm from "../components/ContactForm"

const Home = () => {
  return (
    <div className="font-raleway scroll-smooth relative max-w-[1500px] mx-auto">
   
      <HeroSection/>
      <Projects/>
      <ContactForm/>
    </div>
  )
}

export default Home
