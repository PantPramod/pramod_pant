
import allProjects from '../data/projects'
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (<div className='py-10 pb-20 px-10'>
     <h2 className='text-center text-2xl md:text-3xl font-bold mb-4 text-gray-700 py-5'>Projects</h2>


    {allProjects.map((project) => <div
      key={Math.random()}
      className="mt-10">

      <p className="font-bold text-2xl underline uppercase">{project.title}</p>

      <div className='flex gap-x-10 flex-col-reverse sm:flex-row gap-y-10'>
        <div className='text-justify'>


          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sapiente quasi dignissimos corporis veritatis tenetur adipisci sequi animi odit quisquam, quae, at saepe aperiam recusandae libero doloribus eligendi consequuntur laudantium. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquam omnis ex illo molestiae. Sequi perferendis aperiam a consequatur facere, repellendus autem corporis expedita quibusdam ducimus laboriosam cum commodi nisi?
          </p>
          <p className="mt-2">
            <strong>Technology:</strong>
            <span className='font-bold text-gray-700  '>   {project.technologies}</span>
          </p>
          <div className="mt-8">
            <a href={project.sourceCode} target="_blank" className="bg-black text-white px-10 py-2 font-bold rounded-md  inline-block ">
              <span>
                Source code
              </span>
              <FaGithub className=' ml-2 hidden sm:inline' />

            </a>
            <a href={project.demoLink} target="_blank" className="mt-10 w-[192px] inline-block text-center font-bold   border  sm:ml-4  py-2 border-black rounded-md">Demo Link</a>
          </div>
        </div>

        <img
          src={project.imgSrc}
          alt="E Commerce App"
          className="w-full sm:w-5/12 mt-10 sm:mt-[unset] object-contain"
          width={400}
          height={400}

        />
      </div>



    </div>)}
  </div>
  )
}

export default Projects
