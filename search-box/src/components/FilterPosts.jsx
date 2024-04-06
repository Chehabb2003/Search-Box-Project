import { useEffect, useState } from "react";
import DisplayPosts from "./DisplayPosts";

const FilterPosts = ({ searchValue }) => {
    
    const articles = [{ title: 'Css Grid', date: 'Oct 09, 2018', content: 'Just Testing the Css Grid' },
    { title: 'Css Grid2', date: 'Oct 09, 2018', content: 'Just Testing the Css Grid2' },
    ]

    const [matchedCount, setMatchedCount] = useState(0);

    const filteredArticles = articles.filter(article => 
        article.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        article.content.toLowerCase().includes(searchValue.toLowerCase())
    )

     useEffect(() => {
        setMatchedCount(filteredArticles.length);
    },[filteredArticles])

    return (
        <div className="articles">
            <DisplayPosts matchedCount={matchedCount} filteredArticles={filteredArticles} searchValue={searchValue}/>
        </div>
    )
}

export default FilterPosts;