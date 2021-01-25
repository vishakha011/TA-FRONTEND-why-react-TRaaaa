import PropTypes from "prop-types";
import {data} from "../data";

function Articles() {
    return (
        <>
        <div className="grid article-wrapper">
            {data.map((book) => (
                <Card {...book}/>
            ))}
        </div>
           
        </>
    )
}

function Card(props) {
    return (
        
        <article className="card articles">
        <div className="card-img">
            <img className="img-responsive article-img" src={props.urlToImage} alt="" />
        </div>
        <div className="card-details">
            <p><a className="article-name" href={props.url}>{props.title}</a></p>
            <p className="description">{props.description}</p>
            <div className="author-block flex-between">
                <span className="author">{props.author}</span>
                <span className="date">{props.publishedAt.split("T")[0]}</span>
            </div>
        </div>
    </article>
    )
}


Card.propTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired
    // content: PropTypes.string

};

export default Articles;