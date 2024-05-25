
import { ImLink } from "react-icons/im";
import { Link } from "react-router-dom";
let types = [
  "string",
  "array",
  "object",
  "number",
  "function",
  "class",
  "output"
  ,


]
const CodingProblems = () => {

  return (
    <div className="w-[90%] mx-auto">
      <p className="text-center text-2xl md:text-3xl font-bold mb-4 text-gray-700 py-5">Coding Questions</p>
      
      <div className="">
        {
          types.map((item, index:number) => <Link to={`${item}`} key={item} className="block capitalize text-[18px]  py-3">
            
            <span className="cursor-pointer hover:text-blue-600">{index+1}. {" "}{item} 
            <ImLink 
            size={16} 
            className="inline-block ml-2 "
            />
            </span>
            </Link>)
        }
      </div>


     
    </div>
  )
}

export default CodingProblems
