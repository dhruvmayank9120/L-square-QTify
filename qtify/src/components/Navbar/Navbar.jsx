import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>

      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search a song of your choice"
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>🔍</button>
      </div>

      <button className={styles.feedbackButton}>
        Give Feedback
      </button>
    </div>
  );
}

export default Navbar;
