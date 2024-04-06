const DisplayPosts = ({searchValue}) => {
    const articles = []
    return (
        <div className="articles">
            {articles.map((article) => {
                <div className="article">
                    <h1 className="title">{article.title}</h1>
                    <p className="Date">{article.date}</p>
                    <div className="article-content">{article.content}</div>
            </div>
            })}
        </div>
    )
}

export default DisplayPosts;