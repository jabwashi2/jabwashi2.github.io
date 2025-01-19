import { ProjectThumbnail } from "../components/ProjectThumbnail";
import dataJSON from '../content.json'
import { Navbar } from "../components/Navbar";

// category name: "web"

export function WebPage(props) {
    return(
        <div class="catpage-web">
            <Navbar />
            <div class="catpagecontent">
                <h1 id="cat-title">Web Projects</h1>
                <div class="catpage-thumb">
                    {dataJSON.projects.map((project) => project.category === "web" ? <ProjectThumbnail title={project.title} desc={project.shortdesc} status={project.status} id={project.id} category={project.category} tools={project.tools} />  : "")} {/*<-- ternary operator filters out projects that don't have the web category*/}
                </div>
            </div>
        </div>
    );
};