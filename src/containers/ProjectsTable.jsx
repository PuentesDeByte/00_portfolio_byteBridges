import CardCategorie from "../components/CardCategorie";
import { technologies } from "../data";
import { sortJSONByCategorieAndString } from "../utils";

const ProjectsTable = ({ projectsData }) => {

  let projectsColsLarge = { date: 'year', name: 'project', technologies: 'build with', important: 'important', details: 'details' }

  // console.log(Object.keys(projectsData[0]));

  const projectTechnologiesSorted = (projectTechnologies) => {
    //saco technologies en el formato necesario y soteto
    const projectSkills = technologies.filter(technologie => projectTechnologies.technologies.includes(technologie.name))
    console.log(projectSkills);
    return sortJSONByCategorieAndString(projectSkills, 'priority', 'name')
  }

  let a = projectTechnologiesSorted({
    categorie: "web",
    name: "bootsrap Course",
    details: "a dummy static web page builded into a Bootstrap course",
    important: [""],
    technologies: ["hTML", "cSS"],
    date: new Date("2019-09-02T00:00:00.000-06:00"),
    link: "https://nicolevenachi.github.io/curso_bootstrap_4/"
  })
  console.log(a);

  return (
    <table className="w-full">
      <thead>
        <tr>
          {
            Object.entries(projectsColsLarge).map((projectsCol, id) => (
              <th key={id}> {
                projectsCol[1] == 'important' ?
                  `⚠️ ${projectsCol[1][0].toUpperCase() + projectsCol[1].substring(1)} ⚠️` :
                  projectsCol[1][0].toUpperCase() + projectsCol[1].substring(1)

              } </th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          projectsData.map((project, id) => (
            <tr key={id}>
              <td>{project.date.getFullYear()}</td>
              <td>{project.name[0].toUpperCase() + project.name.substring(1)}</td>
              <td>{project.details[0].toUpperCase() + project.details.substring(1)}</td>

              <td>
                <div className="card-technologies flex  w-full flex-wrap gap-x-2 gap-y-3 max-w-[840px] mb-0 gl-txt-main-font">
                  {

                  }
                  {
                    // console.log(projectTechnologiesSorted(project))
                  }
                  {

                    // projectTechnologiesSorted(project).map((skill, id) => (
                    //   <CardCategorie
                    //     key={id}
                    //     skill={skill}
                    //     isFullList={false}
                    //   />
                    // ))
                  }

                </div>
              </td>

              <td>
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
