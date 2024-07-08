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
      name: "    By Claire Robinson ",
      title: "f  Receive money in any currency with no fees      ",
      content:
        "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    },
    {
      image: article2,
      name: "By Wilson Hutton",
      title: "Treat yourself without worrying about money",
      content:
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    },
    {
      image: article3,
      name: "By Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      content:
        "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    },
    {
      image: article4,
      name: "By Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      content:
        "After a lot of hard work by the whole team, we’re excited to launch our closed beta.It’s easy to request an invite through the site ...",
    },
  ];
  return (
    <>
      <div className="section3">
        <div className="section3-hedding">
          <p>Latest Articles</p>
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
