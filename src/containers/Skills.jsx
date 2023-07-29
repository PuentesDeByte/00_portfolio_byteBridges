import { technologies } from "../data"
import { sortJSON, sortJSONByCategorieAndString } from "../utils";

const Skills = () => {

  const skillsList = sortJSONByCategorieAndString(technologies, 'priority', 'name')

  return (
    <section id="skills" className="skills gl-txt-main-font">
      <h1 className="skills-title text-4xl mb-10">
        <span className="gl-txt-highlight">02. </span> Skills
      </h1>
      <div className="skills-lists flex justify-around w-full flex-wrap max-w-[840px] mb-24">
        {
          skillsList.map((skill, id) => (
            <span
              key={id}
              className="card-categorie gl-txt-highlight text-sm sm:text-base h-full px-4 py-2 mb-3 border-transparent rounded-3xl"
            > {skill.name[0].toUpperCase() + skill.name.substring(1)} </span>
          ))
        }

      </div>
    </section>
  )
}

export default Skills
