import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Unlock the future of NFT investments!</h2>
      <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
      Join Stacked Genesis and experience secure stacking for financial growth and learning opportunities worldwide.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button buttonText={"Contact Us"}/>
    </div>
  </section>
);

export default CTA;
