
function ProjectDescription({ projects }) {
    return (
        <div className="flex m-4">
            <div className="flipcard">
                <div className="flipcardinner">
                    <div className="flipcardfront rounded">
                        <img src={projects.img} alt={projects.alt} />
                    </div>
                    <div className="flipcardback rounded">
                        <h1>{projects.name}</h1>
                        <h3>{projects.description}</h3>
                    </div>
                </div>
            </div>
            <div className="m-4">
                <div className="mb-4">
                <a href={projects.DeployLink}  target="_blank" rel="noreferrer"><button className="btn font-bold hover:bg-gray-200 hover:text-gray-800" >Site Link</button></a>
                </div>
                <div className=" ">
                <a href={projects.Gitlink}  target="_blank" rel="noreferrer"><button className="btn font-bold hover:bg-gray-200 hover:text-gray-800">Github code</button></a>
                </div>
            </div>
        </div>
    );
}

export default ProjectDescription;