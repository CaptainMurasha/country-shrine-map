
import Head from 'next/head';

const contents = [
  {key: 1, city: "君津市", aza: "東粟倉", name: "愛宕神社"},
  {key: 2, city: "鴨川市", aza: "上小原", name: "白滝山不動教会"},
  {key: 3, city: "君津市", aza: "坂畑", name: "山神社"},
]

export default function articleIshidan() {

  // コンテンツリスト生成
  const contentList = [];
  contents.forEach(content => {
    contentList.push(
      <div className="col-4" key={content.key}>
        <div className="card mb-4 shadow-sm">
          <img className="card-img-top" src={`/images/articles/ishidan/${content.city}${content.aza}${content.name}.jpeg`} />
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
      <link rel="stylesheet" href="./category.css"></link>
      <Head>
        <title>田舎神社へ行こう - 苔</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=yes,maximum-scale=2.0" />
      <div className="page-header">
        <h1>田舎神社へ行こう - 苔</h1>
        <img src="/images/top/苔.jpeg" className="image" />
        <h2>苔</h2>
        <p></p>
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