import CardCategorie from "../components/CardCategorie";
import SectionsTitle from "../components/SectionsTitle";
import { technologies } from "../data"
import { sortJSONByCategorieAndString } from "../utils";

const Skills = () => {

  const skillsList = sortJSONByCategorieAndString(technologies, 'priority', 'name')

  const services = [
    'Build landing pages.',
    'Development of corporate pages.',
    'Development of personal portfolios.',
    'Brand portfolio development.',
    'Maintenance and updating of websites.',
    'Online store design.',
    'Websites for events and conferences.',
    'Responsive website development.',
  ]

  return (
    <>
      <section id="skills" className="skills gl-txt-main-font">
        <SectionsTitle number={'2'} text={'Skills'} />
        <div className="skills-lists flex justify-around w-full flex-wrap gap-x-2 gap-y-3 max-w-[840px] mb-24">
          {
            skillsList.map((skill, id) => (
              <CardCategorie
                key={id}
                skill={skill}
                isFullList={true}
              />
            ))
          }

        </div>
      </section>

      <section id="services" className="skills gl-txt-main-font">
        <SectionsTitle number={'3'} text={'Services'} />

        <div className="mb-10 max-[767px]:flex-col text-lg max-[640px]:text-base text-slate-300/60 leading-5 h-full flex w-full justify-evenly max-[768px]:gap-y-8">
          <figure className="h-fit w-2/5 max-[767px]:w-full flex justify-center mb-0 max-[767px]:top-[-100px] max-[640px]:top-[-50px] max-[400px]:top-0 relative" >
            <img src="servicesImage.png" alt="services image" className="max-[767px]:w-1/2  max-[400px]:w-2/3 h-auto" />
          </figure>

          <div className="h-auto w-2/5 flex items-center max-[767px]:pl-12 max-[767px]:w-full max-[767px]:mt-[-100px] max-[640px]:mt-[-50px] max-[400px]:mt-0 max-[400px]:pl-4">
            <ul className="list-disc pl-4 mb-0">
              {
                services.map((service, id) => (
                  <li key={id} className="mb-3 media-icons opacity-[75%]">
                    {service[0].toUpperCase() + service.substring(1)}
                  </li>
                ))
              }
            </ul>
          </div>

        </div>

      </section>

    </>
  )




}

export default Skills
