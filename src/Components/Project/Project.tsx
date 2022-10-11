import './Project.css'
import githubIcon from '../../assets/icons/github.svg';
import playIcon from '../../assets/icons/play.svg';
type ProjectProps = {
    isFeaturedProject?: boolean,
    projectTitle: String,
    projectDesc: String,
    projectTags: String[]
}

export default function Project(props:ProjectProps){

   


    return(
        <div className="Project">
             <div className="project-info">
            {props.isFeaturedProject ? <span className='project-featured'>FEATURED PROJECT</span> : ''}

                <div className="project-header">
                <h4 className='project-title'>Project Name</h4>
                <div className="project-links">
                    <a href=""><img src={githubIcon} alt="github" /></a>
                    <a href=""><img src={playIcon} alt="play" /></a>
                </div>
                </div>
                
                <p className="project-desc">{props.projectDesc}</p>
                <h5 className='project-tags-title'>Technologies Used</h5>
                <div className="project-tags">
                    {props.projectTags.map(tag =>(
                        <div className="project-tag">{tag}</div>
                    ))}
                </div>
                
            </div>
            <img src="" alt="Project" className="project-img" />
            
        </div>
    );
}