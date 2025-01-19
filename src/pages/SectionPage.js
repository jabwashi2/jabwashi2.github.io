// pass in the chosen category from ProjectCategoriesPage.js and populate this page with projects based on that category

import { ProjectThumbnail } from "../components/ProjectThumbnail";

// props.projects is an array of available project objects
// each object will have a title, desc, status, and other data

export function SectionPage(props) {
    
    return(

        <div id={props.sectionTitle}>
        {/* //     <h1>{props.sectionTitle}</h1>
        //     <ProjectThumbnail title="Placeholder Project" desc="Placeholder Desc" status="WIP" />
        //     <ProjectThumbnail title="Placeholder Project" desc="Placeholder Desc" status="WIP" />
        //     <ProjectThumbnail title="Placeholder Project" desc="Placeholder Desc" status="WIP" /> */}
        </div>

    );
};

function GenerateThumbnails(props) {
    // access section div
    // make new thumbnail
    // append to section

    // option 2: create div on your own, add content to div, then return the div

    //let currentSection = document.getElementById(props.sectionTitle);

    // let currentSection = document.createElement('div');
    // currentSection.id = props.props.sectionTitle;
    // console.log(currentSection)

    // looping through array of projects to get relevant thumbnail info
    for (let i = 0; i < props.projects.length; i++){
        let currentProject = props.projects[i];

        let currentThumbnail = <ProjectThumbnail title={currentProject.title} desc={currentProject.shortdesc} status={currentProject.status} />

        //currentSection.appendChild(currentThumbnail);
    }

}