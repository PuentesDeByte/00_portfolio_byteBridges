import CardCategorie from "../components/CardCategorie";
import { technologies } from "../data";
import { sortJSONByCategorieAndString } from "../utils";

const ProjectsTable = ({ projectsData }) => {

  let projectsColsLarge = { date: 'year', name: 'project', technologies: 'build with', important: 'important', details: 'details' }

  // console.log(Object.keys(projectsData[0]));

  const projectTechnologiesSorted = (projectTechnologies) => {
    //saco technologies en el formato necesario y soteto
    const projectSkills = technologies.filter(technologie => projectTechnologies.technologies.includes(technologie.name))
    return sortJSONByCategorieAndString(projectSkills, 'priority', 'name')
  }

  return (
    <table className="w-full">
      <thead>
        <tr className="border-b-[1px] border-slate-300/10">
          {
            Object.entries(projectsColsLarge).map((projectsCol, id) => (
              <th key={id} className="py-4 pr-8"> {
                projectsCol[1] == 'important' ?
                  `⚠️${projectsCol[1][0].toUpperCase() + projectsCol[1].substring(1)}⚠️` :
                  projectsCol[1][0].toUpperCase() + projectsCol[1].substring(1)

              } </th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          projectsData.map((project, id) => (
            <tr key={id} className="border-b-[1px] border-slate-300/10">
              <td className="py-4 pr-4 align-top">{project.date.getFullYear()}</td>
              <td className="py-4 pr-4 align-top">{project.name[0].toUpperCase() + project.name.substring(1)}</td>
              <td className="py-4 pr-4 align-top">{project.details[0].toUpperCase() + project.details.substring(1)}</td>

              <td className="py-4 pr-4 align-top">
                <div className="card-technologies flex  w-full flex-wrap gap-x-2 gap-y-3 max-w-[840px] mb-0 gl-txt-main-font">
                  {

                    projectTechnologiesSorted(project).map((skill, id) => (
                      <CardCategorie
                        key={id}
                        skill={skill}
                        isFullList={false}
                      />
                    ))
                  }

                </div>
              </td>

              <td className="py-4 pr-4 align-top">
                {(project.important[0] !== '') && (
                  <div className="card-important text-base text-slate-500 leading-5 h-fit">
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
              </td>
            </tr>
          ))
        }

      </tbody>
    </table>
  )
}

export default ProjectsTable
