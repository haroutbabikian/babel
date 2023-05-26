import { useState, useEffect } from "react";
import { useQuery } from "react-query";

/*const fetchMostReadArticles = async () => {
  // Simulate an API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

   Dummy data for most read articles
  const articles = [
    {
      id: 1,
      title: "Article 1",
      glimpse: "This is the glimpse of Article 1",
    },
    {
      id: 2,
      title: "Article 2",
      glimpse: "This is the glimpse of Article 2",
    },
    {
      id: 3,
      title: "Article 3",
      glimpse: "This is the glimpse of Article 3",
    },
    {
      id: 4,
      title: "Article 4",
      glimpse: "This is the glimpse of Article 4",
    },
    {
      id: 5,
      title: "Article 5",
      glimpse: "This is the glimpse of Article 5",
    },
    {
      id: 6,
      title: "Article 6",
      glimpse: "This is the glimpse of Article 6",
    },
    {
      id: 7,
      title: "Article 7",
      glimpse: "This is the glimpse of Article 7",
    },
  ];

  return articles;
}; */

const fetchMostReadArticles = async () => {
  const response = await fetch("http://localhost:8000/api/articles");
  const data = await response.json();
  return data;
};


const MostReadSection = () => {
  const [isCollapsed, setIsCollapsed] = useState([]);
  const { data: articles, isLoading } = useQuery(
    "mostReadArticles",
    fetchMostReadArticles
  );

  useEffect(() => {
    if (articles && articles.length > 0) {
      articles.sort(
        (a, b) => b.click_count - a.click_count
      );

      const initialState = new Array(articles.length).fill(true);
      initialState[0] = false;
      setIsCollapsed(initialState);
    }
  }, [articles]);

  const toggleCollapse = (index) => {
    setIsCollapsed((prevState) => {
      const newState = [...prevState];
      newState.fill(true);
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="p-4">
      <h2 className="flex flex-row-reverse text-2xl font-bold mb-4 text-emerald-400">
        الاكثر قراءة
      </h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {articles?.slice(0, 4).map((article, index) => (
            <div
              key={article.id}
              className="bg-slate-200 rounded-lg shadow mb-4 border border-gray-300"
            >
              <div className="flex flex-row-reverse">
                <button
                  className={`w-11 h-11 rounded-tr-lg bg-${
                    isCollapsed[index]
                      ? "emerald-400 rounded-br-lg"
                      : "orange-600"
                  } text-white flex items-center justify-center transition-colors text-3xl`}
                  onClick={() => toggleCollapse(index)}
                >
                  {isCollapsed[index] ? "+" : "-"}
                </button>
                <h3
                  className={`grow flex flex-row-reverse text-lg font-bold rounded-tl-lg p-2 pr-4 ${
                    isCollapsed[index]
                      ? "text-emerald-400 bg-white rounded-bl-lg"
                      : "text-gray-100 bg-slate-700"
                  }`}
                >
                  {article.title.substr(0, 20)}
                </h3>
              </div>
              <p
                className={`flex flex-row-reverse justify p-4 pr-14 text-gray-500 ${
                  isCollapsed[index] ? "hidden" : "block"
                }`}
              >
                {article.body}
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default MostReadSection;
