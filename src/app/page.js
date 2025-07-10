import styles from "./page.module.css";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <>
    <div className={styles.page}>
      <h1>
        hellomate
      </h1>
      <Header/>
   
    </div>
    </>
  );
}
