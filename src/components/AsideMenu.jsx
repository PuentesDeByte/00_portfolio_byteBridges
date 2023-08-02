
const AsideMenu = ({ isCheckoutSideMenuOpen, children }) => {


  return (
    <aside
      className={`aside-navbar ${isCheckoutSideMenuOpen ? 'flex' : 'hidden'}  flex-col justify-center w-fit h-[100vh] fixed right-0 top-0 z-10 bg-slate-900/75 backdrop-blur`}
    >
      <div className="flex flex-col justify-between h-full max-h-[250px] w-[100vw] min-[400px]:w-[300px]">
        {children}
      </div>
    </aside>

  )
}

export default AsideMenu
