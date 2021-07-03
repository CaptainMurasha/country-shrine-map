import Header from './layouts/Header';
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
      <header>
        <Header />
      </header>

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
