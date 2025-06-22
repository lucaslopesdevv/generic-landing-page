import About from "@/components/about"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />      
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
