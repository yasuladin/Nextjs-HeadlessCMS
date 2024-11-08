import Image from 'next/image';
import styles from './page.module.css';

import NewsList from './_components/NewsList';
import ButtonLink from './_components/ButtonLink';
import type { News } from '@/app/_lib/microcms';

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: '1',
      title: '渋谷にオフィスを移転しました',
      category: {
        name: '更新情報',
      },
      publishedAt: '2023/05/19',
      createdAt: '2023/05/19',
    },
    {
      id: '2',
      title: '当社CEOが業界リーダーTOP30に選出されました',
      category: {
        name: '更新情報',
      },
      publishedAt: '2023/05/19',
      createdAt: '2023/05/19',
    },
    {
      id: '3',
      title: 'テストの記事です',
      category: {
        name: '更新情報',
      },
      publishedAt: '2023/04/19',
      createdAt: '2023/04/19',
    },
  ],
};

export default function Home() {
  const sliceData = data.contents.slice(0, 2);
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
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
