import styles from "../styles/Landing.module.scss";
import RegisterForm from "../components/RegisterForm";
import zeus from "../assets/hero-zeus.png";
import logo from "../assets/logo-casinobet.svg";
import freeSpins from "../assets/free-spins.png";

export default function Landing() {
  return (
    <section className={styles.wrap}>
      <img
        src={logo}
        alt="CASINOBET"
        className={styles.centerLogo}
        draggable={false}
      />
      <img src={zeus} alt="zeus" className={styles.zeus} draggable={false} />
      <div className={styles.container}>
        <img
          src={freeSpins}
          alt="freeSpins"
          className={styles.freeSpins}
          draggable={false}
        />
      </div>
      <div className={styles.darkEdge}>
        <RegisterForm />
      </div>
    </section>
  );
}
