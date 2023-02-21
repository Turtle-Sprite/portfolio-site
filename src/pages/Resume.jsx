import { Link } from 'react-router-dom'
import Loader from 'react-loaders';
import GeneralAssembly from './resume/GeneralAssembly';
import ProjectManagement from './resume/ProjectManagement';
import Teaching from './resume/Teaching';

function Resume() {


    return (
        <>
            <div className="container">
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