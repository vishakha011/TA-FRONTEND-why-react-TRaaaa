import data from "../data/blogData.json";

function Blog(){
    return (
        <>
        <section className="blog padding">
        <div className="container">
          <header className="sec-header text-center">
            <h2 className="heading">Our Blog</h2>
            <div className="dot-wrapper">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </header>
          <div className="flex wrap">
                {data.map((article) => {
                    return <Article {...article}/>
                    })
                }
            </div>
        </div>
</section>
           
        </>
    )
}


function Article(props) {
    return (
        <>
            <article className="flex article flex-48">
              <div className="flex-40 font-0">
                <img
                  className="flexible-img"
                  src={props.imgUrl}
                  alt={props.imgAlt}
                />
              </div>

              <div className="flex-60 article-content">
                <time datetime="">
                  <i className="far fa-clock"></i>
                  {props.date}
                </time>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <a className="btn btn-tertiary" href="javascipt:;">Read Article</a>
              </div>
            </article>
        </>
    )
}


export default Blog;

