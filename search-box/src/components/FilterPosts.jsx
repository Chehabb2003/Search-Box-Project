import { useEffect, useState } from "react";
import DisplayPosts from "./DisplayPosts";
import { faker } from '@faker-js/faker';


const FilterPosts = ({ searchValue}) => {
    
    const [matchedCount, setMatchedCount] = useState(0);

    const [articles, setArticles] = useState([]);

  useEffect(() => {
    const articlesGenerator = () => {
        const data = []
        for (let i = 0; i < 25; ++i) {
          data.push({
            title: faker.lorem.sentence(),
            date: faker.date.past().toISOString().split('T')[0],
            content: faker.lorem.paragraphs()
          });
        }
        return data;
      }

    const storedArticles = localStorage.getItem('articles');
    if (storedArticles) {
      setArticles(JSON.parse(storedArticles));
    }
    else {

      const data = articlesGenerator();
      localStorage.setItem('articles', JSON.stringify(data));
      setArticles(data);
    }
  },[])

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