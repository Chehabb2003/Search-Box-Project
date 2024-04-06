import '../styles/DisplayPosts.css'
const DisplayPosts = ({ matchedCount, filteredArticles, searchValue }) => {
    
    const highightText = (text, hightlightWord) => {
        const partsOfText = text.split(new RegExp(`(${hightlightWord})`, 'gi'))
        return partsOfText.map((partOfText) => {
            if (partOfText.toLowerCase() === hightlightWord.toLowerCase()) {
                return <span style={{ backgroundColor: 'yellow' }}>{partOfText}</span>
            }
            else {
                return partOfText;
            }
        })
    }

    return (
        <div className="display-posts">
            {filteredArticles.length > 0 && searchValue !== '' & searchValue!== ' ' ? (
                <div className="displayed">
                    {matchedCount > 1 ? <div className="displayed-count">{`${matchedCount} posts were found`}</div> : (
                        <div className="displayed-count">{`${matchedCount} post was found`}</div>
                    )}
                    {filteredArticles.map(article => 
                        <div className="article">
                            <h1 className="title">{highightText(article.title, searchValue)}</h1>
                            <p className="Date">{article.date}</p>
                            <div className="article-content">{highightText(article.content, searchValue)}</div>
                        </div>
                    )}
                    </div>    
            ) : (
                    <div className="nodisplay">No posts where found</div>
            )}
        </div>
    )
}

export default DisplayPosts;