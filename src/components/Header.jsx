import Ham from '../assets/icons/Ham'
import logo from '../assets/logo.svg'

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
    <header className='gl-font-sans w-[inherit] h-24 fixed z-10 top-0'>
      <nav className="header-container flex justify-between items-center w-full h-full">
        <div className="header-logo h-auto">
          <img src={logo} className='h-16 w-auto' alt="logo" />
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

