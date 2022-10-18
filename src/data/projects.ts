import { v4 as uuidv4 } from 'uuid'

export const projects = [
	{
		projectID: uuidv4(),
		projectTitle: "Weather App",
		projectFeatured: true,
		projectDesc:
			"Fetches data from both OpenWeatherMap.org and Unsplash upon user entering a city and searching for it. then, the data shown will be of the searched city and the background will be changed to an image taken at the city from Unsplash.",
		projectTags: ["HTML", "CSS", "JS","OpenWeatherMap.org","Unsplash"],
		projectGithub: "https://github.com/AhmedAlbarghouti/Weather-app",
		projectLive: "https://ahmed-weather-app.netlify.app/",
		projectImgFileName: "weather-app.png",
	},
	{
		projectID: uuidv4(),
		projectTitle: "Etch-a-sketch",
		projectFeatured: false,
		projectDesc: "Something between a sketchpad and an Etch-A-Sketch. Starts off with a 16x16 grid that can be changed up to 128x128. You can change color and change from Color Mode to Random mode or Eraser.",
		projectTags: ["HTML", "CSS", "JS"],
		projectGithub: "https://github.com/AhmedAlbarghouti/Etch-a-sketch",
		projectLive: "https://ahmedalbarghouti-etch-a-sketch.netlify.app/",
		projectImgFileName: "etch-a-sketch.png",
	},
	{
		projectID: uuidv4(),
		projectTitle: "Portfolio-2.0",
		projectFeatured: false,
		projectDesc:
			"Remake of my portfolio. New design, using React, Typescript and EmailJS to create a working contact form with only React. Fully mobile and tablet responsive. I will be planning a 3.0 soon with more functionalities.",
		projectTags: ["HTML", "CSS", "JS", "React", "Typescript","EmailJS"],
		projectGithub: "https://github.com/AhmedAlbarghouti/Weather-app",
		projectLive: "https://ahmed-weather-app.netlify.app/",
		projectImgFileName: "portfolio-2.0.png",
	},
];
