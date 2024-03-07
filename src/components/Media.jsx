import IconUpwork from "../assets/icons/upwork"
import IconLinkedin from "../assets/icons/linkedin"

const Media = () => {

  return (
    <ul className="media-list w-full h-full flex justify-between m-0">
      <li className="w-auto h-full pr-5">
        <a href="https://www.linkedin.com/in/puentes-de-bytes-5924512b8/" target="_blank" rel="noreferrer">
          <IconLinkedin />
        </a>
      </li>
      <li className="w-auto h-full pl-5">
        <a href="https://www.upwork.com/freelancers/~010eea89cf3dc3f0d7" target="_blank" rel="noreferrer">
          <IconUpwork />
        </a>
      </li>
    </ul>
  )
}

export default Media
