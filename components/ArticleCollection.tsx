export const ArticleCollection = ({ collection,data }) => {
  return (
    <ul>
    {collection.map(article =>  (
      <li>{article.title}</li>
    ))}
  </ul>
  );
};
