import Clientele from "@components/Clientele"
import AboutDemand from "@sections/About/AboutDemand"
import AboutFounder from "@sections/About/AboutFounder"
import AboutHero from "@sections/About/AboutHero"
import WhyMedi from "@sections/About/WhyMedi"




const AboutPage = () => {
  return (
    <>

    <AboutHero/>
    <AboutDemand/>
    {/* <WhyMedi /> */}
    <AboutFounder/>
    <Clientele />
   
    </>
  )
}

export default AboutPage