import './Project.css'
import { useEffect} from "react";
import githubIcon from '../../assets/icons/github.svg';
import playIcon from '../../assets/icons/play.svg';
import ProjectProps from '../../interface/project';

export default function Project(props:ProjectProps){


    
   useEffect(() => {


    const reveal = () => {
        
        var project = document.getElementsByClassName("Project")
        
        for (var i = 0; i < project.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = project[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                project[i].classList.add("active");
            } else {
                project[i].classList.remove("active");
        }
    }
}
    
        window.addEventListener("scroll",reveal)

        reveal();
},[])


    return(
        <div className="Project">
            <div className="project-info">
            {props.isFeaturedProject ? <span className='project-featured'>FEATURED PROJECT</span> : ''}

                <div className="project-header">
                <h4 className='project-title'>{props.projectTitle}</h4>
                <div className="project-links">
                    <a href={props.projectGithub}><img src={githubIcon} alt="github" /></a>
                    <a href={props.projectLive}><img src={playIcon} alt="play" /></a>
                </div>
                </div>
                
                <p className="project-desc">{props.projectDesc}</p>
                <h5 className='project-tags-title'>Technologies Used</h5>
                <div className="project-tags">
                    
                    {props.projectTags.map(tag =>(
                        <div key={tag} className="project-tag">{tag}</div>
                    ))}
                </div>
                
            </div>
            <img src={require(`../../assets/images/${props.projectImgFileName}`)} alt="Project" className="project-img" />
            
        </div>
    );
}