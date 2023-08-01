import { useEffect, useRef } from "react";
import { Outlet } from 'react-router-dom'

import Header from '../components/Header'
import Footer from "../components/Footer";

function Layout() {

  const mouseRef = useRef(null);

  // useEffect(() => {
  //   const updateMousePosition = (ev) => {
  //     if (!mouseRef.current) return;
  //     const { clientX, clientY } = ev;
  //     console.log(mouseRef.current.style);
  //     mouseRef.current.style.setProperty("--x", `${clientX}px`);
  //     mouseRef.current.style.setProperty("--y", `${clientY}px`);
  //   };

  //   window.addEventListener("mousemove", updateMousePosition);

  //   return () => {
  //     window.removeEventListener("mousemove", updateMousePosition);
  //   };
  // }, []);


  return (

    <div className='layout flex justify-center' ref={mouseRef}>
      <div className='layout-container w-[90vw] lg:w-[80vw] md:w-[85vw] max-w-6xl'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export { Layout }
