import ContactForm from "./components/ContactForm"

const App = () => {
  return (
    <div className="font-raleway scroll-smooth">
      <div className="flex flex-col min-h-screen w-full items-center justify-center px-4">

        <h1 className="text-2xl sm:text-3xl md:text-5xl text-center font-semibold  text-gray-700 ">Redefining Web Excellence</h1>
        <p className="text-center mt-1 text-xs sm:text-sm md:text-xl font-semibold text-gray-500">Where Innovation Meets User Experience</p>
        <a href="#contactme" className="mt-3">
          <button className="font-semibold bg-gray-800 text-white rounded-[4px] sm:rounded-md px-4 sm:px-6  py-2 hover:bg-black">Get in Touch!</button>
        </a>
      </div>
      <ContactForm />
    </div>
  )
}

export default App
