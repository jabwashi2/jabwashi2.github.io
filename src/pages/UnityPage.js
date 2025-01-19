import { ProjectThumbnail } from "../components/ProjectThumbnail";
import dataJSON from '../content.json'
import { Navbar } from "../components/Navbar";


// category name: "unity"

export function UnityPage(props) {
    return(
        <div id="catpage-unity">
            <Navbar />
            <div class="catpagecontent">
                <h1 id="cat-title">Unity Projects</h1>
                {dataJSON.projects.map((project) => project.category === "unity" ? <ProjectThumbnail path={project.path} title={project.title} desc={project.shortdesc} status={project.status} id={project.id} category={project.category} tools={project.tools}/> : "Coming Soon!")}
            </div>
        </div>
    );
};

