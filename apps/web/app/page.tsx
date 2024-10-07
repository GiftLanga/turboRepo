
import styles from "./page.module.css";
import { Button } from "@repo/ui/components/ui/button";
import { GetStaticProps } from "next";
import { getFeeds } from "./dbfunctions";
import { Post } from "./models/types";


export default async function Home() {
  let posts: Post[] = [];
  posts = await getFeeds();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div> Defualt</div>
        {
          posts.map((post) =>
            (<div>{post.content}</div>)
          )
        }
      </main>
    </div>
  );
}
