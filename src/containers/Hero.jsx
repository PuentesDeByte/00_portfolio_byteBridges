import Media from "../components/Media"


const Hero = () => {
  return (
    <section id='about' className="hero w-full h-[100vh] items-start justify-center flex flex-col max-[280px]:pt-24 max-[280px]:h-auto">

      <div className="hero-intro w-full">
        <h1 className="gl-txt-highlight text-xl mb-5 sm:mb-8">Hi, my name is</h1>
        <h2 className="hero-intro--higher">Nicole Venachi.</h2>
        <h3 className="hero-intro--higher text-slate-300/60">Frontend developer.</h3>
      </div>
      <div className="hero-info text-xl text-slate-500 max-w-[540px] mb-4 md:mb-10">
        I’m an electronic engineer passionate about software development. Focused on building intuitive and accessible web applications. In my free time, I enjoy learning new technologies and developing machine-learning solutions for diverse situations I face in my daily life.
      </div>
      <div className="hero-footer h-10">
        <Media />
      </div>
    </section>
  )
}

export default Hero
