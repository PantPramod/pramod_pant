import projects from '../data/projects'

const Projects = () => {
    return (
        <div className="px-10">
            <h2 className='text-center text-2xl md:text-3xl font-bold mb-4 text-gray-700 py-10'>Projects</h2>

            <div className="flex sm:gap-x-[10%] md:gap-x-[5%] lg:gap-x-[2.5%] flex-wrap   gap-y-20 items-stretch">

                {projects.map((project) => <div
                    key={Math.random()}
                    className="mx-auto sm:mx-[unset] w-full sm:w-[45%] md:w-[30%] lg:w-[23%] shadow-2xl rounded-xl overflow-hidden border border-gray-400 pb-2 bg-gray-200 self-stretch">

                    <img
                        src={project.imgSrc}
                        alt="E Commerce App"
                        className="border-b border-b-gray-400 h-[200px] object-contain mx-auto"
                        width={300}
                        height={300}

                    />
                    <p className="font-bold uppercase text-center mt-2">{project.title}</p>
                    <p className="text-gray-600 text-xs px-2 flex gap-x-2 font-bold mt-2 min-h-[32px]">
                        <span>Technology:</span>
                        <span>   {project.technologies}</span>
                    </p>
                    <div className="flex items-center justify-between px-2 pt-2 mt-2 mb-2">
                        <a href={project.sourceCode} target="_blank" className="text-white border-2 w-[104px] flex items-center justify-center bg-blue-600 border-blue-600 hover:scale-105 transition-all ease-in-out duration-300 p-2  rounded-full  font-semibold text-center text-xs">Source code</a>
                        <a href={project.demoLink} className="border-2 border-purple-600 w-[104px] flex items-center justify-center p-2 hover:scale-105 transition-all ease-in-out duration-300  rounded-full  text-white bg-purple-600 font-semibold text-right text-xs">Demo Link</a>
                    </div>
                </div>)}

            </div>
        </div>
    )
}

export default Projects
