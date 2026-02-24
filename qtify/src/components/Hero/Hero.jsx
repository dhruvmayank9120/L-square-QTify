import styles from "./Hero.module.css";
import heroImage from "../../assets/hero_headphones.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>100 Thousand Songs, ad-free</h1>
        <p>Over thousands podcast episodes</p>
      </div>

      <div className={styles.heroImage}>
        <img src={heroImage} alt="headphones" />
      </div>
    </div>
  );
}

export default Hero;
