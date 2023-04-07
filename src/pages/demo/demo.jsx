import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchArticles } from '../../api/demo';


const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

const Demo = () => {
    
    // INITIAL STATE
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    // COMPONENT DID MOUNT HANDLER
    useEffect(() => {
        const whatever = async () => {
        
            try {
                const res = await fetchArticles();
                setArticles(res);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        whatever();
        
    }, [])



    // RETURNS JSX/HTML
    return (
        <div>
            {error && <p>Whoops, something went wrong: {error.message}</p>}
            {loading ? <p>loading.....</p> : <ArticleList articles={articles} />}
      </div>
    );
}

export default Demo;