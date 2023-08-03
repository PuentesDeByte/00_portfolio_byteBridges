
import ProjectsPageTitle from "../containers/ProjectsPageTitle"
import ProjectsTable from "../containers/ProjectsTable"
import { projectsWeb } from "../data"

const ProjectsPage = () => {

  return (
    <section className="projects-page w-full py-20">
      <ProjectsPageTitle />
      <ProjectsTable projectsData={projectsWeb} />
    </section>

  )
}

export default ProjectsPage
