import Head from 'next/head';
import Link from 'next/link';

const categories = [
  {link:"ishidan", name:"石段"},
  {link:"komainu", name:"狛犬"},
  {link:"torii", name:"鳥居"},
  {link:"sugibayashi", name:"杉林"},
  {link:"hikyou", name:"秘境"},
  {link:"umi", name:"海"},
  {link:"yama", name:"山"},
  {link:"tanbo", name:"田んぼ"},
  {link:"koke", name:"苔"},
  {link:"takebayashi", name:"竹林"},
  {link:"iwakabe", name:"岩壁"},
  {link:"kyoboku", name:"巨木"}
]
  
export default function home() {

  // 画像リスト生成
  const categoryList = [];
  categories.forEach(category => {
    categoryList.push(
      <div className="col-4" key={category.link}>
        <Link href={`/articles/${category.link}`}>
          <a><img src={`/images/top/${category.name}.jpeg`}
          alt={category.name}
          title={category.name} /></a></Link></div>
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
