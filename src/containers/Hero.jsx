import Media from "../components/Media"

const Hero = () => {
  return (
    <section id='about' className="hero w-full h-fit items-start justify-center flex flex-col my-4 max-[280px]:pt-24 max-[280px]:h-auto max-[280px]:mb-24">

      <div className="hero-intro w-full">
        <h1 className="gl-txt-highlight text-xl mb-5 sm:mb-8">Hi, we are </h1>
        <h2 className="hero-intro--higher">Bytebridges.</h2>
        <h3 className="hero-intro--medium text-slate-300/60">A software development company</h3>
      </div>
      <div className="hero-info text-xl text-slate-500 max-w-[740px] mb-4 md:mb-10">
        We have 2.5 years of hands-on experience. We offer a full range of <span className="gl-txt-highlight">web design and development services</span> to help our clients expand their businesses and get noticed in the online world. We are focused on building integral <span className="gl-txt-highlight">fronted solutions</span>, creating unique and charming websites that not only <span className="gl-txt-highlight">impress visually</span> (our strength is a strong sense of aesthetics), but also generate tangible results for our clients. You can trust us to deliver the best results for your project. Founded with a vision to <span className="gl-txt-highlight">close the gender gap in technology</span>, our company boasts a team where women make up an impressive 75%. <span className="gl-txt-highlight">We believe in the power of diversity</span> to drive innovation and excellence in the tech industry. Our mission is clear: to <span className="gl-txt-highlight">empower women in engineering</span>, amplifying their voices in the eve. <span className="gl-txt-highlight">Diversity isn't just a goal; it's our strength</span>. By fostering a culture of inclusivity and equality, we harness the unique perspectives and experiences of our diverse team to deliver cutting-edge software solutions that drive real-world impact.
        <br />
        <br />
        <span className="gl-txt-highlight">¡¡ Join us on our journey to redefine the future of technology !!</span>



      </div>
      <div className="hero-footer h-10 relative">
        <Media />
      </div>
    </section>
  )
}

export default Hero
