import { card } from "../assets";
import styles, { layout } from "../style";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Accelerate Trading Skills <br className="sm:block hidden" />with Expert-led Courses
      </h2>
      <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
      Explore a diverse library of trading courses curated by seasoned financial market experts. Learn about technical analysis, fundamental analysis, risk management, and trading psychology, empowering you to make informed investment decisions and improve your trading abilities.
      </p>

    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
