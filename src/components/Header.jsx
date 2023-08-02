import Ham from '../assets/icons/Ham'
import logoBG from '../assets/logo-bg.svg'
import IconLogoN from '../assets/icons/logoN'

const Header = () => {
  const categories = ['about', 'skills', 'projects']

  // const links = <p> asas </p>
  const links = () => (
    categories.map((categorie, id) => (
      <a key={id} className='text-sm px-5' href={`#${categorie}`}>
        <span className='gl-txt-highlight'> 0{id + 1}. </span> {categorie[0].toUpperCase() + categorie.substring(1)}
      </a>
    ))
  )

  return (
    <header className='gl-font-sans w-[inherit] h-24 z-10 top-0 sticky bg-slate-900/75 backdrop-blur '>
      <nav className="header-container flex justify-between items-center w-full h-full">
        <div className="header-logo h-16 w-auto relative">
          <IconLogoN />
          <img src={logoBG} className='h-16 w-auto absolute top-0 -z-10' alt="logo" />
        </div>

        <div className="header-info">
          <div className="header-links hidden md:block">
            {links()}
          </div>
          <div className="header-menu md:hidden h-16">
            <Ham />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

