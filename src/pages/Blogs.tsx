
// import Markdown from 'react-markdown'
// @ts-ignore
// import md from '../assets/md/test.md'
// import { useEffect, useState } from 'react'

import { Link } from "react-router-dom";
import blogData from "../data/blogData";

import useViewPort from "../hooks/useViewPort"


const Blogs = () => {
  // const [result, setResult] = useState('')

  // useEffect(()=>{
  //   fetch(md).then((response) => response.text()).then((text:string) => {
  //     console.log(text)
  //     setResult(text)
  //     setTimeout(()=>Prism.highlightAll(), 1000)
  //   })
  // },[])
  const size = useViewPort()
  let words =50;
  if(size==='xs'){
    words=20
  }else if(size==="sm"){
    words=30
  }
 
  return (
    <div className='w-[90%] mx-auto'>
      <h2 className="text-center font-bold text-xl sm:text-3xl py-10">My Blogs</h2>

{
  blogData.map(({desc, id,img,title}, index:number)=>  <Link 
  to={id}
  className="flex border border-gray-400 p-4 rounded-xl my-4">
  <div className="">
    <h1 className="font-bold text-xl"><span className="text-red-800">#{index+1}.</span>{
      " "
    }  {title}</h1>
    <img
      width={200}
      src={img}
      className=" sm:hidden py-2 w-full rounded-xl" />
    <p className="text-gray-600 text-justify p-2 ">

      {size &&
        truncateNWords(desc, words)
      }
    </p>
  </div>
  <img
    width={200}
    src={img}
    className="hidden sm:block rounded-xl" />
</Link>)
}



    
      {/* <Markdown>{result}</Markdown> */}

    </div>
  )
}

export default Blogs



function truncateNWords(str: string, n=50) {
  return str.split(' ').slice(0, n).join(' ') + "..."
}