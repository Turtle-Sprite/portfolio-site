import Loader from 'react-loaders';
import "../index.scss"
import "../partials/AnimatedLetters.scss"
import AnimatedAbout from './about/AnimatedAbout';
import AnimatedCube from './about/AnimatedCube';
import TextZone from './about/TextZone';

function About() {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('C-Sheeley-Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'C-Sheeley-Resume.pdf';
                alink.click();
            })
        })
    }
    
    return (
        <>
            <div className='about-container flex gap-5 flex-wrap'>
                <div className='aboutImg m-3 '>
                    <AnimatedAbout />
                </div>
               <button className='btn hover:bg-yellow-400' onClick={() => onButtonClick()}>Hire me</button>

                <div className='text-zone m-3'>
                    <TextZone />
                </div>              
                
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default About;