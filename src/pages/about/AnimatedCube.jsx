import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGithub, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

function AnimatedCube() {
    return (
        <div className='cubespinner'>
            <div className='face1'>
                <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
            </div>
            <div className='face2'>
                <FontAwesomeIcon icon={faReact} color="#F06529" />
            </div>
            <div className='face3'>
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className='face4'>
                <FontAwesomeIcon icon={faNodeJs} color="#5ED4f4" />
            </div>
            <div className='face5'>
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className='face6'>
                <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
            </div>
        </div>
    );
}

export default AnimatedCube;