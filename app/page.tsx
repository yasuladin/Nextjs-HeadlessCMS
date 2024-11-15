import Image from 'next/image';
import styles from './page.module.css';

import NewsList from './_components/NewsList';
import ButtonLink from './_components/ButtonLink';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import { getNewsList } from '@/app/_lib/microcms';

export const revalidate = 60;

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT
  });

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>
            私達は市場をリードしているグローバルテックカンパニーです。
          </p>
        </div>
        <Image
          src="/img-mv.jpg"
          alt=""
          className={styles.bgimg}
          width={4000}
          height={1200}
          priority
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
