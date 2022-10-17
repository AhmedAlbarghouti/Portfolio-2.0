
import Contact from '../Contact/Contact'
import Hero from '../Hero/Hero'
import Project from '../Project/Project'
import githubIcon from '../../assets/icons/github.svg'
import './Home.css'
import {projects} from '../../data/projects'



export default function Home (){
    return(
        <div className='Home'>
        <Hero></Hero>

        <div className="projects">
        <div className="projects-header"><h2 className='section-header' >Projects</h2>
        <a className='section-header' href="https://github.com/AhmedAlbarghouti">Github <img className='social-icon' src={githubIcon} alt="github" /></a></div>


        {projects.map( (p) =>{
           return <Project key={p.projectID} projectID={p.projectID} projectTitle={p.projectTitle} isFeaturedProject={p.projectFeatured} projectDesc={p.projectDesc} projectTags={p.projectTags} projectGithub={p.projectGithub} projectLive={p.projectLive} projectImgFileName={p.projectImgFileName} />
        })}
        </div>
        

      
        <Contact></Contact>
        </div>
    )
}