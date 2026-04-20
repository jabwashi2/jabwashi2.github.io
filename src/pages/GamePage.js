import { ProjectThumbnail } from "../components/ProjectThumbnail";
import dataJSON from '../content.json'
import { Navbar } from "../components/Navbar";

// category name: "game"

export function GamePage(props) {
    return(
        <div class="catpage-game">
            <Navbar />
            <div class="catpagecontent">
                <h1 id="cat-title">Game Projects</h1>
                <div class="catpage-thumb">
                    {dataJSON.projects.map((project) => project.category === "game" ? <ProjectThumbnail path={project.path} title={project.title} desc={project.shortdesc} status={project.status} id={project.id} category={project.category} tools={project.tools}/> : "")}
                </div>
            </div>
        </div>
    );
};

