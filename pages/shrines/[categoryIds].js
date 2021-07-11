import Header from '../layouts/Header';
import Overview from '../layouts/Overview';
import Album from '../layouts/Album';

import { getShrines, getAllShrinesIds, getAllShrinesData } from "../../lib/shrines"

export default function Post({ categoryIds, categoriyList, categoryData }) {
  
  return (
    <>
      <header>
        <Header />
      </header>

      <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=yes,maximum-scale=2.0" />
      <Overview categoryName={categoryData.categoryName} overview={categoryData.overview} />

      <Album categoryIds={categoryIds} contents={categoriyList} />
    </>
  );
}

export function getStaticPaths() {
  const paths = getAllShrinesIds()
  return {
    paths,
    fallback: true
  }
}

export function getStaticProps({ params }) {
  const categoryIds = params.categoryIds;
  const categoriyList = getAllShrinesData(params.categoryIds)

  const categoryData = getShrines(categoryIds);
  return {
    props: {
      categoryIds,
      categoriyList,
      categoryData
    }
  }
}
