import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import CardCategorie from "../components/CardCategorie";
import SectionsTitle from "../components/SectionsTitle";
import { projectsWeb, technologies } from "../data"
import { sortJSON, sortJSONByCategorieAndString } from "../utils";

// import as from '../assets/projects/web/01_web.png'
const Projects = () => {

  let project = projectsWeb[2]
  const projectSkills = technologies.filter(technologie => project.technologies.includes(technologie.name))
  const projectSkillsSorted = sortJSONByCategorieAndString(projectSkills, 'priority', 'name')

  return (
    <section id="projects" className="projects">
      <SectionsTitle number={'3'} text={'Projects'} />

      <div className="projects-content flex justify-between w-full">


        <div className="project-cards rounded-lg h-60 w-[38vw] max-w-xl p-4 flex flex-col bg-white/5">
          <figure className="card-image w-1/3 h-fit flex justify-center m-0 rounded-md border-2 border-white/10 ">
            <img className="imgs-ratio object-cover rounded-md " src={`${project.image}`} alt="project image" />
          </figure>
          <div className="flex flex-col h-full w-full">
            <h2 className="card-title">{project.name[0].toUpperCase() + project.name.substring(1)} <span>
              {/* <ArrowTopRightOnSquareIcon className={`ml-1 h-3 w-auto inline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110  ${idleTransition ? '' : childIconTransition}`} /> */}
              <ArrowTopRightOnSquareIcon className={`ml-1 h-3 w-auto inline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110`} />
            </span>
            </h2>
            <p className="card-detils">{project.details[0].toUpperCase() + project.details.substring(1)}</p>
            <p className="card-important">
              {project.important.length > 0 && (`⚠️ ${project.important[0].toUpperCase() + project.important.substring(1)} ⚠️`)}

            </p>
            <div className="card-technologies flex justify-around w-full flex-wrap gap-x-2 gap-y-3 max-w-[840px] mb-0 gl-txt-main-font">
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


    </section>
  )
}

export default Projects
