import Header from '../layouts/Header';
import Overview from '../layouts/Overview';
import Album from '../layouts/Album';

import { getAllShrinesIds, getAllShrinesData } from "../../lib/shrines"

export default function Post({ categoriesData }) {
  const categoryIds = categoriesData.categoryIds;
  const categoryName = categoriesData.categoryName;
  const overview = categoriesData.overview;
  const contents = categoriesData.contents;

  return (
    <>
      <header>
        <Header />
      </header>

      <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=yes,maximum-scale=2.0" />
      <Overview categoryIds={categoryIds} categoryName={categoryName} overview={overview} />

      <Album categoryIds={categoryIds} contents={contents} />
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
  const categoriesData = getAllShrinesData(params.categoryIds)
  return {
    props: {
      categoriesData
    }
  }
}
