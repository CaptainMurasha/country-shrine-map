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
      
      <Overview categoryName={"田舎神社に行こう"} overview={"overview"} />

      <TopAlbum categoriesData={categoriesData} />
    </>
  );
};
