import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/articles`)
      .then((response) => setArticles(response.data.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>NordicBridge CMS</h1>

      {articles.map((article) => {
        const imageUrl = article.image?.[0]?.url
          ? `http://localhost:1337${article.image[0].url}`
          : null;

        return (
          <div key={article.id} style={{ border: "1px solid #7eb3f1", padding: "20px", marginBottom: "20px" }}>
            {imageUrl && <img src={imageUrl} alt={article.title} style={{ maxWidth: "300px" }} />}
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <p><strong>Author:</strong> {article.author?.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;