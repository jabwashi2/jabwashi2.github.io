# Welcome to my portfolio!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This portfolio contains projects within the following categories:
- **Web**
- **DirectX 11**
- **UI/UX**

More projects will be added in the future as I work on them :)

# Development Breakdown
In recreating my website, I had a simple goal: to be able to update the entire website with only one file. Currently, I'm almost there.

All of the content on my website is held within [content.json](https://github.com/jabwashi2/jabwashi2.github.io/blob/main/src/content.json). Each category is organized according to the needs of its respective page. For example, each object within the 'projects' category has a title, category, a list of tools, project content, a project id, and images. These items are used for the individual project pages as well as the project thumbnails.

Speaking of the project pages, they are all made using the [ProjectPage](https://github.com/jabwashi2/jabwashi2.github.io/blob/main/src/pages/ProjectPage.js) component. This is the backbone of the updates made to this website. Each specific page is generated when you click on the project's respective thumbnail. For example, selecting the Audio Visualizer Project on the web projects page will create the Audio Visualizer project page automatically. This way, there is no need to store individual files for each project I have featured on my website. This will be helpful in the future as the number of projects I work on continues to grow.

Utilizing React components made this website much more flexible and scalable. Now, if I wish to add more categories, or more projects, all I have to do is go to the JSON file I have created an the components will handle the rest. Unfortunately, I currently need to make each category page myself, but I am working on having those generate similarly to the project pages.

You can see more of my thought process, planning, and other comments in my [documentation](https://github.com/jabwashi2/jabwashi2.github.io/blob/main/src/documentation.txt).

## Updates to Come
- [x] Update personal photo
- [x] Rewrite personal statement/about me
- [ ] Add ChangelingVR to projects
- [ ] Add other side projects
- [ ] More animations :D
  - [ ] Fade in on page load
  - [ ] Text to move with boxes on hover
  - [x] Smoother on hover animations for project thumbnails
  - [ ] Smoother on hover animations for navbar and dropdown
  - [ ] Text animation on scroll
- [ ] Give project thumbnails a background image
- [ ] Add tools section to about section on home page
- [ ] (stretch) Add interactive version of projects onto project pages
- [ ] Embed links in paragraphs in JSON file
- [x] Order of sections in navbar is inconsistent with order on main screen
- [ ] Include videos in image carousel
- [x] Italicize tools on project specific pages
