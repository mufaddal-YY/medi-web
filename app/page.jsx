import HomeHero from "@/sections/Home/HomeHero"
import Clientele from "@components/Clientele"
import Cta from "@components/Cta"
import Testimonials from "@components/Testimonials"
import HomeBlogs from "@sections/Home/HomeBlogs"
import HomeHired from "@sections/Home/HomeHired"
import HomeHowWeWork from "@sections/Home/HomeHowWeWork"
import HomeRecentJobs from "@sections/Home/HomeRecentJobs"
import HomeStats from "@sections/Home/HomeStats"
import HomeWhyUs from "@sections/Home/HomeWhyUs"

const HomePage = () => {
  return (
    <>
    <HomeHero/>
    <HomeStats/>
    <HomeHired/>
    <HomeRecentJobs/>
    <HomeWhyUs/>
    <HomeHowWeWork />
    <Cta/>
    <Testimonials/>
    <Clientele/>
    <HomeBlogs/>




   
    </>
  )
}

export default HomePage