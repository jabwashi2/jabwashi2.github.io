import { useParams } from 'react-router-dom'
import { ImageCarousel } from '../components/ImageCarousel';
import dataJSON from '../content.json'
import { Navbar } from '../components/Navbar.js';

export function ProjectPage() {

    const {id} = useParams();
    let project = dataJSON.projects.find(project => project.id === id);

    return (
        <div id="proj-page">
            <Navbar />
            <div class="proj-content" id={id}>
                <a href={project.link}><h1 id="proj-title">{project.title}</h1></a>
                <div id="proj-tools">
                    {project.tools.map((tool) => <p>{tool}</p>)}
                </div>
                <ImageCarousel images={project.images} id="proj-carousel"/>
                <br></br>
                
                <h1 class="proj-subhead" id="breakdown-title">Breakdown</h1>
                <h2 class="proj-subhead" id="proj-desc-title">Project Description</h2>
                <p class="proj-content-text" id="proj-desc">{project.pagecontent[0]}</p>
                <h2 class="proj-subhead" id="process-desc-title">Process & Problems & Solutions</h2>
                <p class="proj-content-text" id="process-desc">{project.pagecontent[1]}</p>
                <h2 class="proj-subhead" id="next-desc-title">What's Next?</h2>
                <p class="proj-content-text" id="next-desc">{project.pagecontent[2]}</p>
            </div>
        </div>
    )
}