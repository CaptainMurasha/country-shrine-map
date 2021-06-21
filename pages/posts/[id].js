import Head from 'next/head';
import { getAllCategoriesIds, getAllCategoriesData } from "../../lib/posts"

export default function Post({ categoriesData }) {
  const id = categoriesData.id;
  const categoryName = categoriesData.categoryName;
  const overview = categoriesData.overview;
  const contents = categoriesData.contents;

  // コンテンツリスト生成
  const contentList = [];
  contents.forEach(content => {
    contentList.push(
      <div className="col-4" key={content.key}>
        <div className="card mb-4 shadow-sm">
          <img className="card-img-top" src={`/images/articles/${id}/${content.city}${content.aza}${content.name}.jpeg`} />
          <div className="card-body">
            <p className="card-text">
              {content.city} {content.aza} {content.name}
            </p>
          </div>
        </div>
      </div>
    )
  });

  return (
    <>
      <Head>
        <title>田舎神社へ行こう - {categoryName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=yes,maximum-scale=2.0" />
      <div className="page-header">
        <h1>田舎神社へ行こう - {categoryName}</h1>
        <img src={`/images/top/${id}.jpeg`} className="image" />
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
    </>
  );
}

export function getStaticPaths() {
  const paths = getAllCategoriesIds()
  return {
    paths,
    fallback: true
  }
}

export function getStaticProps({ params }) {
  const categoriesData = getAllCategoriesData(params.id)
  return {
    props: {
      categoriesData
    }
  }
}
