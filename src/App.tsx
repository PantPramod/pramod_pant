import ContactForm from "./components/ContactForm"
import chatapp from './assets/chatapp.png'
import recipe from './assets/recipe.png'
import memorygame from './assets/memorygame.png'
import ecommerce from "./assets/ecommerce.png"
//@ts-ignore
import HeroSection from "./components/HeroSection.jsx"
import "./App.css"
// import Footer from "./components/Footer.js"

const App = () => {
  return (
    <div className="font-raleway scroll-smooth relative">
      <HeroSection />

      <div className="px-10">
        <h2 className='text-center text-2xl md:text-3xl font-bold mb-4 text-gray-700 py-10'>Projects</h2>

        <div className="flex gap-15  flex-wrap mt-10 justify-between gap-y-20 items-stretch">

          <div className="mx-auto sm:mx-[unset] max-w-[300px] w-full sm:w-[45%] md:w-[30%] shadow-2xl rounded-xl overflow-hidden border border-gray-400 pb-2 bg-gray-200 self-stretch">

            <img
              src={ecommerce}
              alt="E Commerce App"
              className="border-b border-b-gray-400 min-h-[190px] object-contain"
              width={300}
              height={300}

            />
            <p className="font-bold uppercase text-center mt-2">Artisan Crafts</p>
            <p className="text-gray-600 text-xs px-2 flex gap-x-2 font-bold mt-2">
              <span>Technology:</span>
              <span>   React JS, Next JS, Node JS, Express JS, Mongoose, TypeScript</span>
            </p>
            <div className="flex items-center justify-between px-2 pt-2 mt-2 mb-2">
              <a href="https://github.com/PantPramod/artisan-crafts" target="_blank" className="text-white border-2 w-[104px] flex items-center justify-center bg-blue-600 border-blue-600 hover:scale-105 transition-all ease-in-out duration-300 p-2  rounded-full  font-semibold text-center text-xs">Source code</a>
              <a href="#" className="border-2 border-purple-600 w-[104px] flex items-center justify-center p-2 hover:scale-105 transition-all ease-in-out duration-300  rounded-full  text-white bg-purple-600 font-semibold text-right text-xs">Demo Link</a>
            </div>
          </div>





          <div className="mx-auto sm:mx-[unset] max-w-[300px] w-full sm:w-[45%] md:w-[30%] shadow-2xl rounded-xl overflow-hidden border border-gray-400 pb-2 bg-gray-200 self-stretch">

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

          <div className="mx-auto sm:mx-[unset] max-w-[300px] w-full sm:w-[45%] md:w-[30%] shadow-2xl rounded-xl overflow-hidden border border-gray-400 pb-2 bg-gray-200 self-stretch">

            <img
              src={memorygame}
              alt="chat app"
              className="border-b border-b-gray-400 min-h-[190px] object-contain"
              width={300}
              height={300}

            />
            <p className="font-bold uppercase text-center mt-2">Realtime Memory Game</p>
            <p className="text-gray-600 text-xs px-2 flex gap-x-2 font-bold mt-2">
              <span>Technology:</span>
              <span>   React JS, Node JS, Express JS, TypeScript, Socket.Io</span>
            </p>
            <div className="flex items-center justify-between px-2 pt-2 mt-2 mb-2">
              <a href="https://github.com/PantPramod/real-time-memory-game" target="_blank" className=" text-white border-2 w-[104px] flex items-center justify-center bg-blue-600 border-blue-600 hover:scale-105 transition-all ease-in-out duration-300 p-2  rounded-full  font-semibold text-center text-xs">Source code</a>
              <a href="https://memorygame124.netlify.app/" target="_blank" className="border-2 border-purple-600 w-[104px] flex items-center justify-center p-2 hover:scale-105 transition-all ease-in-out duration-300  rounded-full  text-white bg-purple-600 font-semibold text-right text-xs">Demo Link</a>
            </div>
          </div>
          <div className="mx-auto sm:mx-[unset] max-w-[300px] w-full sm:w-[45%] md:w-[30%] shadow-2xl rounded-xl overflow-hidden border border-gray-400 pb-2 bg-gray-200">

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






        </div>
      </div>
      <ContactForm />
      {/* <Footer/> */}
    </div>
  )
}

export default App
