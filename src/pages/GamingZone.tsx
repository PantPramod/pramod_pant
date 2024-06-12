import spinningwheel from '../assets/spinning wheel.png'
import bubbleshooter from '../assets/bubble-shooter.png'
import memorygame from '../assets/memorygame.png'
const GamingZone = () => {
  return (
    <div className={`bg-black min-h-screen game text-white`}>
      <p className="text-center py-10 text-xl">Gaming zone</p>

      <div className="flex w-[90%] mx-auto gap-x-10 flex-wrap justify-center gap-y-10 pb-10">
        <a href="https://www.pramodpant.tech/gaming-zone/spinnerwheel" className="w-[200px]  border border-blue-600 rounded-lg overflow-hidden">
          <img src={spinningwheel} alt="spinning wheel" className='object-cover w-full h-[170px]'/>
          <p className='text-center text-sm p-2'>Spinning Wheel</p>
        </a>

        <a href="https://memorygame124.netlify.app/" className="w-[200px]  border border-blue-600 rounded-lg overflow-hidden">
          <img src={memorygame} alt="memory game" className='object-cover w-full h-[170px]'/>
          <p className='text-center text-sm p-2'>Memory Game</p>
        </a>

        <a href="https://www.pramodpant.tech/bubble-shooter/" className="w-[200px]  border border-blue-600 rounded-lg overflow-hidden">
          <img src={bubbleshooter} alt="bubble shooter" className='object-cover w-full h-[170px]'/>
          <p className='text-center text-sm p-2'>Bubble Shooter</p>
        </a>
      </div>
    </div>
  )
}

export default GamingZone
