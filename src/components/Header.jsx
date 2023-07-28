import Ham from '../assets/icons/Ham'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header>
      <nav className="header-container">
        <div className="header-logo">
          <img src={logo} alt="as" />
        </div>
        <div className="header-links"></div>
        <div className="header-menu">
          <Ham />
        </div>
      </nav>
    </header>
  )
}

export default Header

