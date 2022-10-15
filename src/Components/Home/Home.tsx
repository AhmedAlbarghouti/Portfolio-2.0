
import Contact from '../Contact/Contact'
import Hero from '../Hero/Hero'
import Project from '../Project/Project'
import githubIcon from '../../assets/icons/github.svg'
import './Home.css'
export default function Home (){
    return(
        <div className='Home'>
        <Hero></Hero>
        <div className="projects-header"><h2 className='section-header' >Projects</h2>
        <a className='section-header' href="https://github.com/AhmedAlbarghouti">Github <img className='social-icon' src={githubIcon} alt="github" /></a></div>
      
      
        <Project  isFeaturedProject={true} projectTitle="nice" projectDesc="Black is a very powerful color... Well kind of. Black is the absence of color (ie light), which means it is not really a color itself. It has very high contrast, especially with white, so it's a popular color to use on the web.Black is a very powerful color... Well kind of. Black is the absenc Black is a very powerful color... Well kind of. Black is the absenc" projectTags={["HTML","CSS","123",'lol','test','Node']}></Project>
        <Project   projectTitle="nice" projectDesc="descc" projectTags={["HTML","CSS","123"]}></Project>
        <Project   projectTitle="nice" projectDesc="descc" projectTags={["HTML","CSS","123"]}></Project>
      
        <Contact></Contact>
        </div>
    )
}