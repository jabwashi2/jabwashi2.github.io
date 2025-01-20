import { Link } from "react-router-dom";

/*\
    category thumbnails need the following:
    - Title
    - Link to respective project page (link in the div)
*/

export function CategoryThumbnail(props) {
    return (
        <div id={props.id} class="category" >
            <Link to={props.path} id="category-link"><h1>{props.title}</h1></Link>
            {/* <a id="category-link" href={props.path}>
                <div>
                    <h1>{props.title}</h1>
                </div>
            </a> */}
        </div>
    );
};