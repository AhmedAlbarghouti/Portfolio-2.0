export default interface ProjectProps  {
    projectID: string,
    isFeaturedProject?: boolean,
    projectTitle: string,
    projectDesc: string,
    projectTags: string[],
    projectGithub: string,
    projectLive: string,
    projectImgFileName: string,
}