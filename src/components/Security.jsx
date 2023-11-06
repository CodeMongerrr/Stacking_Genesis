import { card } from "../assets";
import styles, { layout } from "../style";

const Security = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Transparency & Security <br className="sm:block hidden" />Powered by Blockchain
      </h2>
      <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
      Discover how Stacked Genesis utilizes blockchain technology to ensure transparency, immutability, and security. Built on a decentralized blockchain platform, our collection safeguards NFT ownership and authenticity. Smart contracts automate stacking, ROI distribution, and membership access, reducing intermediary reliance and minimizing fraud risk.
      </p>

    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Security;
