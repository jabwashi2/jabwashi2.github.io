import { Link } from "react-router-dom";

export function ProjectThumbnail(props) {
    // let project = props.projects.find(project => project.title === props.title);
    return (
        <>
            <div class="project-thumbnail" id={props.title}>
                <Link to={ props.category === "web" ? "/Web-Projects/" + props.id : props.category === "unity" ? "/Unity-Projects/" + props.id : "/DirectX11-Projects/" + props.id}>
                    <h1 class="projthumb-text" id="projthumb-title">{props.title}</h1>
                </Link>
                {/* ^will link to a custom version of ProjectPage.js */}
                <p class="projthumb-text" id="projthumb-desc">{props.desc}</p>
                <div id="proj-tools-thumb">
                    {props.tools.map((tool) => <p>{tool}</p>)}
                </div>
                <p class="projthumb-text" id="projthumb-status"><em>{props.status}</em></p>
            </div>
            
        </>
    );
};

/* when you click the thumbnail, i want:
    - create the thumbail for the project you clicked on (pass in title)
    - load the new page with the thumbnail (maybe open a new page?)
*/