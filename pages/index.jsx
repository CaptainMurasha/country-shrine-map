import Head from 'next/head';
import Link from 'next/link';
import { getAllCategories } from '../lib/posts'

export async function getStaticProps() {
  const allCategories = getAllCategories()
  return {
    props: {
      allCategories
    }
  }
}

export default function Home({ allCategories }) {

  // 画像リスト生成
  const categoryList = [];
  allCategories.forEach(category => {
    categoryList.push(
      <div className="col-4" key={category}>
        <Link href={`/posts/${category}`}>
          <a><img src={`/images/top/${category}.jpeg`}
          title={category} /></a></Link></div>
    );
  });

  return (
    <>
      <Head>
        <title>田舎神社へ行こう</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link href="/about"><a className="nav-link">About</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/"><a className="nav-link">田舎神社</a></Link>
            </li>
          </ul>
        </div>
      </div>

      <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=yes,maximum-scale=2.0" />
      <div className="page-header">
        <h1>田舎神社へ行こう</h1>
      </div>
      <div className="row shrine-tiles">
        {categoryList}
      </div>
    </>
  );
};
