import { useEffect, useRef } from "react";
import { Outlet } from 'react-router-dom'

import Footer from "../components/Footer";

function Layout() {

  const mouseRef = useRef(null); //ref a estilos del layout

  useEffect(() => {
    const updateMousePosition = (ev) => {
      if (!mouseRef.current) return; //si aun no hay ref en en DOM, manda nada
      // console.log(ev);
      const { clientX, clientY } = ev;
      // console.log(mouseRef.current.style); // con set property, las setea como inline styles
      mouseRef.current.style.setProperty("--x", `${clientX}px`);
      mouseRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition); //agrego listener de mouse movey se lo paso  l funcion

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    }; //clean up function para quitar el listener por si el efecto rerun
  }, []);

  // addEventListener("scroll", (event) => {});

  useEffect(() => {
    const updateMouseScroll = (ev) => {
      if (!mouseRef.current) return;
      console.log(ev);
      // const { clientX, clientY } = ev;
      // // console.log(mouseRef.current.style); // con set property, las setea como inline styles
      // mouseRef.current.style.setProperty("--x", `${clientX}px`);
      // mouseRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("scroll", updateMouseScroll); //agrego listener de mouse movey se lo paso  l funcion

    return () => {
      window.removeEventListener("scroll", updateMouseScroll);
    }; //clean up function para quitar el listener por si el efecto rerun
  }, []);


  return (

    <div className='layout flex justify-center h-fit w-full' ref={mouseRef}>
      {/* <div className="layout-mouse absolute w-[inherit] h-screen z-30" ref={mouseRef}>

      </div> */}
      <div className='layout-container w-[90vw] lg:w-[80vw] md:w-[85vw] max-w-6xl'>
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>

    </div>

  )
}

export { Layout }
