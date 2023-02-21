import Loader from 'react-loaders';
import "../index.scss"
import "../partials/AnimatedLetters.scss"
import AnimatedAbout from './about/AnimatedAbout';
import AnimatedCube from './about/AnimatedCube';
import TextZone from './about/TextZone';
import ThinkingGirl from '../images/PersonThinking.png'

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
            <div className='about-container gap-5 block content-center text-center mx-auto'>
                <div className='aboutImg flex justify-evenly mx-5 flex-wrap'>
                    <div className='block mt-12'>
                    <AnimatedAbout />
                    <div className="mt-10 mb-7">
                        <h2 className='m-2'>Looking for your next web developer?</h2>
                    <button className='btn hire-btn' onClick={() => onButtonClick()}>Hire me</button>
                    </div>
                    </div>
                    <div className='thinkImgWrapper flex justify-center'>
                    <img className="thinkingImg shadow rounded-full" src={ThinkingGirl} alt="Thinking girl"/>
                    </div>
                </div>

                <div className='text-zone'>
                    <TextZone />
                </div>

            </div>
            <Loader type="pacman" />
        </>
    );
}

export default About;