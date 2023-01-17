import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import WhatWeServe from "../components/WhatWeServe";

export default function Home() {
  return (
    <div className="max-w-screen-2xl px-10 mx-auto flex flex-col bg-[#E9F3FD]">
      <Navbar />
      <Hero />
      <WhatWeServe />
      <Testimonials />
    </div>
  )
}
