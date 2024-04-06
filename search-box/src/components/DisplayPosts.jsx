import { useEffect, useState } from "react";

const DisplayPosts = ({searchValue}) => {
    const articles = [{ title: 'Css Grid', date: 'Oct 09, 2018', content: 'Just Testing the Css Grid' },
    { title: 'Css Grid2', date: 'Oct 09, 2018', content: 'Just Testing the Css Grid2' },
    ]

    const [matchedCount, setMatchedCount] = useState(0);

    const filteredArticles = articles.filter(article => 
        article.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        article.content.toLowerCase().includes(searchValue.toLowerCase())
    )
    console.log(filteredArticles);

     useEffect(() => {
        setMatchedCount(filteredArticles.length);
    },[searchValue])



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
        <div className="articles">
            {filteredArticles.length > 0 && searchValue !== '' & searchValue!== ' ' ? (
                <div>
                    {matchedCount > 1 ? <div>{`${matchedCount} posts were found`}</div> : (
                        <div>{`${matchedCount} post was found`}</div>
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
                    <div></div>
            )}

        </div>
    )
}

export default DisplayPosts;