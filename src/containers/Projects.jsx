import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import CardCategorie from "../components/CardCategorie";
import SectionsTitle from "../components/SectionsTitle";
import { projectsWeb, technologies } from "../data"
import { sortJSONByCategorieAndString } from "../utils";
import { useState } from "react";

// import as from '../assets/projects/web/01_web.png'
const Projects = () => {

  const [idleTransition, setIdleTransition] = useState(true)
  const childIconTransition = '-translate-y-1 scale-110'


  const handleOnLinkClick = () => {
    setIdleTransition(prev => !prev)
  }

  let project = projectsWeb[2]
  console.log(project.important);
  const projectSkills = technologies.filter(technologie => project.technologies.includes(technologie.name))
  const projectSkillsSorted = sortJSONByCategorieAndString(projectSkills, 'priority', 'name')

  return (
    <section id="projects" className="projects w-full h-fit mb-24">
      <SectionsTitle number={'3'} text={'Projects'} />

      <div className="projects-content flex justify-between w-full">

        <div className="project-cards rounded-lg h-full w-[50vw] max-w-3xl p-4 flex gap-4 hover:bg-slate-400/5 hover:border-t-[1px] hover:border-r-[1px] border-slate-300/20
        transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.01]"
          onMouseEnter={handleOnLinkClick}
          onMouseLeave={handleOnLinkClick}
          onClick={() => window.open(`${project.link}`)}
        >

          <figure className="card-image w-1/3 h-fit flex justify-center m-0 rounded-md border-2 border-white/20 ">
            <img className="imgs-ratio object-cover rounded-md " src={`${project.image}`} alt="project image" />
          </figure>

          <div className="flex flex-col h-full w-full">

            <h2 className={`card-title text-xl ${idleTransition ? '' : 'gl-txt-highlight'}`}>

              {project.name[0].toUpperCase() + project.name.substring(1)} <span>
                <ArrowTopRightOnSquareIcon className={`ml-1 h-3 w-auto inline transition duration-300 ease-in-out transform ${idleTransition ? '' : childIconTransition}`} />
              </span>
            </h2>

            <p className="card-detils text-base text-slate-500 leading-5 mb-2">{project.details[0].toUpperCase() + project.details.substring(1)}</p>

            {project.important.length > 1 && (
              <div className="card-important text-base text-slate-500 leading-5 h-fit">
                <p className="mb-1 gl-tex text-slate-400"> ⚠️ Important: ⚠️ </p>
                <ul className="list-disc pl-4 mb-2">
                  {
                    project.important.map((importantLiItem, id) => (
                      <li key={id}>
                        {importantLiItem[0].toUpperCase() + importantLiItem.substring(1)}
                      </li>
                    ))
                  }
                </ul>
              </div>

            )}


            <div className="card-technologies flex  w-full flex-wrap gap-x-2 gap-y-3 max-w-[840px] mb-0 gl-txt-main-font">
              {
                projectSkillsSorted.map((skill, id) => (
                  <CardCategorie
                    key={id}
                    skill={skill}
                    isFullList={false}
                  />
                ))
              }

            </div>
          </div>
        </div>


      </div>


    </section >
  )
}

export default Projects
