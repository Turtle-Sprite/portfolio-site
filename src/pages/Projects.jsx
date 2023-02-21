import AnimatedLetters from '../partials/AnimatedLetters'
import bingeflicks from "../images/WideBingFlicks.png"
import project3 from "../images/Project-3.png"
import project1 from "../images/Project-1.png"
import ProjectDescription from './projects/ProjectDescription'

function Project() {
    const projects = [
        {
            name: "Binge Flicks",
            img: bingeflicks,
            alt: "Binge Flicks Project",
            description: "Created BingeFlicks to replicate a movie rental service using a MERN stack. Integrated a payment system using Stripe and user authentication and authorization with json web tokens.",
            DeployLink: "https://binge-flicks.herokuapp.com",
            Gitlink: "https://github.com/Turtle-Sprite/bingeflicks-Project4",

        },
        {
            name: "Hungry Hippos",
            img: project3,
            alt: "Food delivery app.",
            description: "Working with a team, we created a food delivery app using React, Express, and MongoDB to practice user authentication and Git workflows.",
            DeployLink: "https://hungryhipposdelivery.netlify.app",
            Gitlink: "https://github.com/Turtle-Sprite/project-3-client",

        },
        {
            name: "Archaeology",
            img: project1,
            alt: "Archaeology hunt game",
            description: "Designed and created a crawler game using vanilla Javascript, Canvas, HTML and CSS, demonstrating mastery of basic principles.",
            DeployLink: "https://turtle-sprite.github.io/archaeology-hunt",
            Gitlink: "https://github.com/Turtle-Sprite/archaeology-hunt",
        }
    ]

    const projectComponents = projects.map((project, idx) => {
        return <ProjectDescription key={idx} projects={project}/>
    })

    return ( 
        <div className='project-container'>
            <div className='m-4'>
            <h1>Projects</h1>
            <h3>Over the course of four months, I learned web development from the ground up. We went from basic HTML, to calling on APIs using Express, and grew to create and deploy fullstack web applications. Check out my projects below. </h3>
            </div>
            {projectComponents}
        </div>
     );
}

export default Project;