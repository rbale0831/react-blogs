// import { useParams } from "react-router";

// const BlogDetails = () => {
//     const { id } = useParams()

//     return ( 
//         <div className="blog-details">
//             <h2>Blog Details - { id }</h2>
//         </div>
//      );
// }
 

// 26
import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        });
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{error}</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Writtn by {blog.author} </p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                    <Link className="link" to="/">Back</Link>
                </article>
            ) }
        </div>
     );
};

export default BlogDetails;

