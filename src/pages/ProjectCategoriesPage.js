import { CategoryThumbnail } from '../components/CategoryThumbnail.js';

function ProjectCategoriesPage(props) {
  return (
    <div id="categories-page">
        {props.props.categories.map((category) => <CategoryThumbnail title={category.title} path={category.id === "freelance-link" ? "/Freelance" : category.id === "sidequests-link" ? "/Side-Quests" : category.path} id={category.id} />)}
    </div>
  );
};

export default ProjectCategoriesPage;

// if the category.id is freelance-link, set thee path to /Freelance
// if the category.id is sidequests-link, set the path to /Side-Quests