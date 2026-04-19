import { ProjectThumbnail } from "../components/ProjectThumbnail";
import dataJSON from '../content.json'
import { Navbar } from "../components/Navbar";

// category name: "dx11"

export function DX11Page(props) {
    return(
        <div id="catpage-dx11">
            <Navbar />
            <div class="catpagecontent">
                <h1 id="cat-title">DX11 Projects</h1>
                <div class="catpage-thumb">
                    {dataJSON.projects.map((project) => project.category === "dx11" ? <ProjectThumbnail path={project.path} title={project.title} desc={project.shortdesc} status={project.status} id={project.id} category={project.category} tools={project.tools}/> : "")}
                </div>

            </div>
        </div>
    );
};

