import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import OurMenu from "../components/OurMenu";
import Testimonials from "../components/Testimonials";
import WhatWeServe from "../components/WhatWeServe";

export default function Home() {
  return (
    <div className="max-w-screen-2xl px-10 mx-auto flex flex-col bg-[#E9F3FD]">
      <Navbar />
      <Hero />
      <WhatWeServe />
      <OurMenu />
      <Testimonials />
      <Footer />
    </div>
  )
}
