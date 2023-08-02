import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import SectionsTitle from "../components/SectionsTitle";
import { projectsWeb } from "../data"
import { Link } from "react-router-dom";

import { FolderPlusIcon } from "@heroicons/react/24/solid";
import { FolderOpenIcon } from "@heroicons/react/24/solid";


// import as from '../assets/projects/web/01_web.png'
const Projects = () => {

  const [projectsCategories, setProjectsCategories] = useState([{ categorie: 'web', active: true }, { categorie: 'ml', active: false }])

  const starredProjectsWeb = projectsWeb.filter(project => project?.starred == true)

  const handleCategoriesSelector = (e) => {
    const clickedLi = e.target.id.split(`/`)[1]
    setProjectsCategories(prev => (
      prev.map((categorieObj, id) => {
        categorieObj.active = id == clickedLi ? true : false
        return categorieObj
      }) // al estao anterior, pongo en active al que di click

    ))
  }

  //projects archive transition
  const [idleTransition, setIdleTransition] = useState(true)
  const childIconTransition = '-translate-y-1 scale-110 opacity-0'


  const handleOnLinkClick = () => {
    setIdleTransition(prev => !prev)
  }

  return (
    <section id="projects" className="projects w-full h-fit mb-24">
      <SectionsTitle number={'3'} text={'Projects'} />

      <div className="projects-content flex justify-between w-full flex-col md:flex-row">

        <div className="projects-selector h-fit">
          <ul className="gl-txt-main-font h-fit flex flex-row md:flex-col">
            {
              projectsCategories.map((categorieObj, id) => (
                <li
                  className={` border-b-2 md:border-l-2 md:border-b-0
                  py-2 px-7 w-fit text-slate-400 tracking-widest  ${projectsCategories[id].active ? 'border-[#4F96CC] bg-[#4F96CC]/10' : 'border-white/20'} transition duration-300 prueba`}
                  key={id}
                  id={`li-selector/${id}`}
                  onClick={handleCategoriesSelector}
                >{categorieObj.categorie.toUpperCase()}</li>
              ))
            }
          </ul>
        </div>
        <div className="projects-cards-container flex flex-col gap-y-4 md:w-[70vw] lg:w-[55vw] max-w-3xl">
          {
            starredProjectsWeb.map((project, id) => (
              <ProjectCard key={id} project={project} />
            ))

          }

          <Link to={'projects'} className="hover:text-[#e2e8f0]" >
            <p
              className={`text-base gl-txt-main-font`}
              onMouseEnter={handleOnLinkClick}
              onMouseLeave={handleOnLinkClick}
            >
              <span className={`${idleTransition ? 'no-underline' : 'underline'} decoration-[#4F96CC] underline-offset-4`}>View Projects Archive</span> <span className={`relative ${idleTransition ? '' : 'text-[#4F96CC]'} `}>
                <FolderPlusIcon className={`ml-1 h-5 w-auto inline transition duration-500 ease-in-out transform ${idleTransition ? '' : childIconTransition}`} />
                <FolderOpenIcon className={`ml-1 h-5 w-auto inline absolute top-0 left-0 transition duration-[0.8s] ease-in-out transform ${idleTransition ? childIconTransition : ''}`} />
              </span>
            </p>
          </Link>
        </div>


      </div>


    </section >
  )
}

export default Projects
