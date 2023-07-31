import { projects } from "../data"

import as from '../assets/projects/web/01_web.png'

const Projects = () => {
  console.log(`${projects[0].image}`);
  return (
    <section id="projects" className="projects">
      <div className="project-cards rounded-lg h-60 w-[38vw] max-w-xl p-4 flex flex-col bg-white/5">
        <figure className="card-image w-1/3 h-full flex justify-center m-0">
          <img className="object-cover w-full h-auto" src='images/projects/web/01_web.png' alt="project image" />
        </figure>
        <div className="flex flex-col h-full w-full">
          <p>as</p>
          <p>as</p>
          <p>as</p>
        </div>
      </div>

      {/* <div className="project-cards rounded-lg h-60 w-[38vw] max-w-xl p-4 flex flex-col bg-white/10 relative">
        <div className="flex flex-col absolute top-4 left-4 bg-black/50 w-[calc(100%-2rem)] h-[calc(100%-2rem)] p-4">
          <p>as</p>
          <p>as</p>
          <p>as</p>
        </div>
        <figure className="card-image w-full h-full flex justify-center m-0">
          <img className="object-cover w-full h-auto" src='images/projects/web/01_web.png' alt="project image" />
        </figure>
      </div> */}
    </section>
  )
}

export default Projects
