import "./Section3.css";
import article1 from "../assets/image-currency.jpg";
import article2 from "../assets/image-restaurant.jpg";
import article3 from "../assets/image-confetti.jpg";
import article4 from "../assets/image-plane.jpg";
import Card from "../Card/Card";
const Section3 = () => {
  let arr = [
    {
      image: article1,
      name: "aaaa",
      title: "fgfgfgrgfgfgggtgtgtybgyh",
      content: "lote feafervgfgvfgvtrdgfvfdgbthstzgvfdvgfbghxhgstrgszgs",
    },
    {
      image: article2,
      name: "aaaa",
      title: "fgfgfgrgfgfgggtgtgtybgyh",
      content: "lote feafervgfgvfgvtrdgfvfdgbthstzgvfdvgfbghxhgstrgszgs",
    },
    {
      image: article3,
      name: "aaaa",
      title: "fgfgfgrgfgfgggtgtgtybgyh",
      content: "lote feafervgfgvfgvtrdgfvfdgbthstzgvfdvgfbghxhgstrgszgs",
    },
    {
      image: article4,
      name: "aaaa",
      title: "fgfgfgrgfgfgggtgtgtybgyh",
      content: "lote feafervgfgvfgvtrdgfvfdgbthstzgvfdvgfbghxhgstrgszgs",
    },
  ];
  return (
    <>
      <div className="section3">
        <div className="section3-hedding">
          <p>
            Latest Articles
            </p>
            </div>
        <div className="articles">
          {arr.map((val, i) => (
            <div className="article-card">
              <Card
                content={val.content}
                image={val.image}
                title={val.title}
                name={val.name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section3;
