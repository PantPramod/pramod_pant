import ContactForm from "./components/ContactForm"
import chatapp from './assets/chatapp.png'
import recipe from './assets/recipe.png'

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
      <div className="px-10">
        <h2 className='text-center text-2xl md:text-3xl font-bold mb-4 text-gray-700'>Projects</h2>

        <div className="flex gap-10 items-center flex-wrap mt-10">
          <div className="w-[300px] shadow-2xl rounded-xl overflow-hidden border border-gray-400 pb-2 bg-gray-200">

            <img
              src={chatapp}
              alt="chat app"
              className="border-b border-b-gray-400 "
              width={300}
              height={300}

            />
            <p className="font-bold uppercase text-center mt-2">Chat App</p>
            <p className="text-gray-600 text-xs px-2 flex gap-x-2 font-bold mt-2">
              <span>Technology:</span>
              <span>  React JS , Node JS, Express JS, Socket.IO, MongoDB</span>
            </p>
            <div className="flex items-center justify-between px-2 pt-2 mt-2 mb-2">
              <a href="https://github.com/PantPramod/chat-app" target="_blank" className=" text-white border-2 w-[104px] flex items-center justify-center bg-blue-600 border-blue-600 hover:scale-105 transition-all ease-in-out duration-300 p-2  rounded-full  font-semibold text-center text-xs">Source code</a>
              <a href="https://chatappbypramod.netlify.app/" target="_blank" className="border-2 border-purple-600 w-[104px] flex items-center justify-center p-2 hover:scale-105 transition-all ease-in-out duration-300  rounded-full  text-white bg-purple-600 font-semibold text-right text-xs">Demo Link</a>
            </div>
          </div>

          <div className="w-[300px] shadow-2xl rounded-xl overflow-hidden border border-gray-400 pb-2 bg-gray-200 self-stretch">

            <img
              src={recipe}
              alt="chat app"
              className="border-b border-b-gray-400 min-h-[190px] object-contain"
              width={300}
              height={300}

            />
            <p className="font-bold uppercase text-center mt-2">Recipe App</p>
            <p className="text-gray-600 text-xs px-2 flex gap-x-2 font-bold mt-2">
              <span>Technology:</span>
              <span>   Next JS, Node JS, Express JS, TypeScript, MongoDB</span>
            </p>
            <div className="flex items-center justify-between px-2 pt-2 mt-2 mb-2">
              <a href="https://github.com/PantPramod/recepies-app" target="_blank" className=" text-white border-2 w-[104px] flex items-center justify-center bg-blue-600 border-blue-600 hover:scale-105 transition-all ease-in-out duration-300 p-2  rounded-full  font-semibold text-center text-xs">Source code</a>
              <a href="https://recepies-app-theta.vercel.app/" target="_blank" className="border-2 border-purple-600 w-[104px] flex items-center justify-center p-2 hover:scale-105 transition-all ease-in-out duration-300  rounded-full  text-white bg-purple-600 font-semibold text-right text-xs">Demo Link</a>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  )
}

export default App
