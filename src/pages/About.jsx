import Loader from 'react-loaders';
import "../index.scss"
import photo from '../images/Photo.jpg'
import AnimatedAbout from './about/AnimatedAbout';
import AnimatedCube from './about/AnimatedCube';
import TextZone from './about/TextZone';

function About() {
    
    return (
        <>
            <div className='about-container flex gap-5 flex-wrap'>
                <div className="image-container m-3">
                    <img className='photo' src={photo} alt="Crystal Sheeley"/>
                </div>
                <div className='intro m-3 '>
                    <AnimatedAbout />
                </div>

                <div className='text-zone m-3'>
                    <TextZone />
                </div>              
                
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default About;