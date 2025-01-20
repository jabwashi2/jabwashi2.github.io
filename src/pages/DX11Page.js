import { ProjectThumbnail } from "../components/ProjectThumbnail";
import dataJSON from '../content.json'
import { Navbar } from "../components/Navbar";

// category name: "directx11"

export function DX11Page(props) {
    return(
        <div id="catpage-dx11">
            <Navbar />
            <div class="catpagecontent">
                <h1 id="cat-title">DX11 Projects</h1>
                {dataJSON.projects.map((project) => project.category === "directx11" ? <ProjectThumbnail path={project.path} title={project.title} desc={project.shortdesc} status={project.status} id={project.id} category={project.category} tools={project.tools}/> : "")}
            </div>
        </div>
    );
};

