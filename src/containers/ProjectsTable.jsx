
import TableRow from "../components/TableRow";

const ProjectsTable = ({ projectsData }) => {

  const projectsColsLarge = { date: 'year', name: 'project', details: 'details', technologies: 'built with', important: 'important' }
  const protectsColsToHide = ['technologies', 'details', 'important']
  const projectsColsHideOnLg = ['technologies']
  const projectsColsHideOnMd = ['details']
  const projectsColsHideOnXsm = ['important']


  // console.log(Object.keys(projectsData[0]));

  // const projectTechnologiesSorted = (projectTechnologies) => {
  //   //saco technologies en el formato necesario y soteto
  //   const projectSkills = technologies.filter(technologie => projectTechnologies.technologies.includes(technologie.name))
  //   return sortJSONByCategorieAndString(projectSkills, 'priority', 'name')
  // }

  return (
    <table className="w-full mt-12">
      <thead className="sticky top-0 z-10 bg-slate-900/75 backdrop-blur">
        <tr className="border-b-[1px] border-slate-300/10">
          {
            Object.entries(projectsColsLarge).map((projectsCol, id) => (
              <th key={id}
                className={`py-4 pr-8 font-medium opacity-[85%] text-lg tracking-wider
                 ${protectsColsToHide.includes(projectsCol[0]) ? 'hidden' : ''}
                 ${projectsColsHideOnLg.includes(projectsCol[0]) ? 'lg:table-cell' : ''}
                 ${projectsColsHideOnMd.includes(projectsCol[0]) ? 'md:table-cell' : ''}
                 ${projectsColsHideOnXsm.includes(projectsCol[0]) ? 'min-[400px]:table-cell' : ''}
                 `}
              > {
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
            <TableRow project={project} key={id} />
          ))
        }

      </tbody>
    </table>
  )
}

export default ProjectsTable
