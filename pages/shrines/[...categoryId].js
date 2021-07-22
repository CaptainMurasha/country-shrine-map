import Header from '../layouts/Header';
import Overview from '../layouts/Overview';
import Album from '../layouts/Album';
import Pagination from '../layouts/Pagination';

import { generatePaths, readDetailContents, generateContents, getOverview } from "../../lib/utils"

const pageName = 'shrines';

export default function Post({ categoryId, pageNumber, categoryOverview, categoriyList, totalCount }) {

  return (
    <>
      <header>
        <Header />
      </header>

      <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=yes,maximum-scale=2.0" />
      <Overview categoryName={categoryOverview.categoryName} overview={categoryOverview.overview} />

      <Album categoryId={categoryId} contents={categoriyList} />

      <Pagination pageName={pageName} categoryId={categoryId} totalCount={totalCount} pageNumber={pageNumber} />
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
  // ページ先頭に表示するコンテンツを取得
  const categoryOverview = getOverview(pageName, categoryId);
  // 詳細コンテンツをすべて取得
  const allDetail = readDetailContents(pageName, categoryId);
  //　画面に表示するコンテンツを切り出す
  const categoriyList = generateContents(allDetail, pageNumber);
  return {
    props: {
      categoryId,
      pageNumber,
      categoryOverview,
      categoriyList,
      totalCount : allDetail.length
    }
  }
}
