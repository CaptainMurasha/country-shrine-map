import Header from '../layouts/Header';

import { getAllShrinesIds, getAllShrinesData } from "../../lib/shrines"
import { HotokamiPage, GoogleOnMarker } from '../icons/SocialMedia';
import { Pagination } from '../layouts/Pagination'

export default function Post({ categoriesData }) {
  const categoryId = categoriesData.categoryId;
  const categoryName = categoriesData.categoryName;
  const overview = categoriesData.overview;
  const contents = categoriesData.contents;

  // コンテンツリスト生成
  const contentList = [];
  for (let i = 0; i < contents.length; i++) {
    const content = contents[i];
    contentList.push(
      <div className="col-4" key={i + 1}>
        <div className="card mb-4 shadow-sm">
          <img className="card-img-top" src={process.env.NODE_ENV === 'development' ? 
            `/images/contents/shrines/${categoryId}/${content.city}${content.aza}${content.name}.jpeg`
            : content.imageUrl} />
          <div className="card-body">
            <p className="card-text">
              {content.city} {content.aza}<br />
              {content.name}<br />
              {HotokamiPage(content.url)} {GoogleOnMarker(content.lat, content.lang)}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <header>
        <Header />
      </header>

      <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=yes,maximum-scale=2.0" />
      <div className="page-header">
        <h1>田舎神社へ行こう - {categoryName}</h1>
        <img src={`/images/top/shrines/${categoryId}.jpeg`} className="image" />
        <h2>{categoryName}</h2>
        <p>{overview}</p>
      </div>

      <div className="album py-5 bg-light">
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {contentList}
            </div>
          </div>
        </div>
      </div>
      <Pagination totalCount={contentList.length} categoryName={categoryId}/>
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
  const categoriesData = getAllShrinesData(params.categoryId)
  return {
    props: {
      categoriesData
    }
  }
}
