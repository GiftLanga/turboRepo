import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@repo/ui/components/ui/button";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div> Defualt</div>
      </main>
    </div>
  );
}
