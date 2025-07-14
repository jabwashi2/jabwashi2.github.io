import { ProjectThumbnail } from "../components/ProjectThumbnail";
import dataJSON from '../content.json'
import { Navbar } from "../components/Navbar";


// category name: "uiux"

export function UIUXPage(props) {
    return(
        <div id="catpage-uiux">
            <Navbar />
            <div class="catpagecontent">
                <h1 id="cat-title">UI/UX Projects</h1>
                <div class="catpage-thumb">
                    {dataJSON.projects.map((project) => project.category === "uiux" ? <ProjectThumbnail  title={project.title} desc={project.shortdesc} status={project.status} id={project.id} category={project.category} tools={project.tools}/> : "")}
                </div>
            </div>
        </div>
    );
};