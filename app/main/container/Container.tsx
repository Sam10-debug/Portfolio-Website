import Hero from "../(hero)/Hero"
import About from "../(about)/About"
import SuperPowers from "../(sup)/SuperPowers"
import Project from "../(projects)/Project"
import Contact from "../(contact)/Contact"

const Container = () => {
  return (
   <main className="mt-24 ">
    <Hero />
     <About />
     <SuperPowers />
     <Project />
     <Contact />
   </main>
  )
}

export default Container
