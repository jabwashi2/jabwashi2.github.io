import { Link } from "react-router-dom";
import { motion } from "motion/react"

/*\
    category thumbnails need the following:
    - Title
    - Link to respective project page (link in the div)
*/

export function CategoryThumbnail(props) {
    return (
        <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.2 }}} transition={{ duration: 0.3 }} id={props.id} class="category" >
            <Link to={props.path} id="category-link"><h1>{props.title}</h1></Link>
        </motion.div>
    );
};