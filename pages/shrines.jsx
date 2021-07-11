import Header from './layouts/Header';
import Overview from './layouts/Overview';
import TopAlbum from './layouts/TopAlbum';
import { getAllShrines } from '../lib/shrines'

export async function getStaticProps() {
  const categoriesData = getAllShrines()
  return {
    props: {
      categoriesData
    }
  }
}

export default function Shrines({ categoriesData }) {

  return (
    <>
      <header>
        <Header />
      </header>

      <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=yes,maximum-scale=2.0" />
      
      <Overview categoryName={"田舎神社に行こう"} overview={"「ジブリみたいな世界」「本当に神様がいそう」「幻想郷の入り口」...そんな言葉で言い表せそうな世界の一端を紹介します。"} />

      <TopAlbum categoriesData={categoriesData} />
    </>
  );
};
