import { Link } from 'react-router-dom'
import Loader from 'react-loaders';
import GeneralAssembly from './GeneralAssembly';
import ProjectManagement from './ProjectManagement';
import Teaching from './Teaching';


function Resume() {


    return (
        <>
            <div className="resume-container">
                <div className="text-zone">
                    
                    <div className="generalassembly">
                        
                        <GeneralAssembly />
                    </div>

                    <div className="projectmanagement">
                        <ProjectManagement />
                    </div>
                    <div className="teaching">
                        <Teaching />
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    );
}

export default Resume;