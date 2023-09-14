const Article = (props) => {
  return (
    <section className="article">
      <h2>{props.content.h2Content}</h2>
      <p>{props.content.pContent}</p>
    </section>
  );
};

export default Article;
