import style from "./Home.module.css";
import Homeimg from "../../assets/images/home.webp";
import AuthorImg from "../../assets/images/author.png";

const Home = () => {
  return (
    <>
      <div className={style.homepage}>
        <section className={style.blog_section}>
          <div className={style.articleSide}>
            <span className={style.content}>
              <ul>
                <li>10 min read</li>
              </ul>
              <h3>Best Free Fonts for Web Design in 2024</h3>
            </span>
            <span className={style.author}>
              <span className={style.author_img}>
                <figure>
                  <img src={AuthorImg} alt="Author" />
                </figure>
              </span>
              <span className={style.author_desc}>
                <p>Written by</p>
                <strong>Jeeban Giri</strong>
                <p>Developer</p>
              </span>
            </span>
          </div>
          <div className={style.imageSide}>
            <figure>
              <img src={Homeimg} alt="Home" />
            </figure>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
