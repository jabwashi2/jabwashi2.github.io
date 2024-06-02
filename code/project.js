// the popup window component that shows up when a project tab is clicked on; has a title, description, and demo video (upload to youtube, make unlisted)
// invisible element that is static and floats above the rest of the page, content is dynamically created
// clicking the thumbnail's "see more" button will create one of these components

const template = document.createElement("template");
    template.innerHTML = `
    <style>
        
    </style>
    <h1></h1>
    <iframe></iframe>
    <p></p>
    `;