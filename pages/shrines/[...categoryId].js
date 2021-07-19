import Header from '../layouts/Header';
import Overview from '../layouts/Overview';
import Album from '../layouts/Album';
import Pagination from '../layouts/Pagination';

import { generatePaths, getTotal, generateContents, getOverview } from "../../lib/utils"

const pageName = 'shrines';

export default function Post({ categoryId, categoriyList, categoryOverview, totalCount }) {
  
  return (
    <>
      <header>
        <Header />
      </header>

      <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=yes,maximum-scale=2.0" />
      <Overview categoryName={categoryOverview.categoryName} overview={categoryOverview.overview} />

      <Album categoryId={categoryId} contents={categoriyList} />

      <Pagination pageName={pageName} categoryId={categoryId} totalCount={totalCount} />
    </>
  );
}

export function getStaticPaths() {
  const paths = generatePaths(pageName);
  return {
    paths,
    fallback: true
  }
}

export function getStaticProps({ params }) {
  const categoryId = params.categoryId[0];
  const pageNumber = Number(params.categoryId[1]);
  const categoriyList = generateContents(pageName, categoryId, pageNumber);
  const categoryOverview = getOverview(pageName, categoryId);
  const totalCount = getTotal(pageName, categoryId);
  return {
    props: {
      categoryId,
      categoriyList,
      categoryOverview,
      totalCount
    }
  }
}
