
import Head from 'next/head';

export default function articleIshidan() {
  return (
    <>
      <link rel="stylesheet" href="./category.css"></link>
      <Head>
        <title>田舎神社へ行こう - 石段</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=yes,maximum-scale=2.0" />
      <div className="page-header">
        <h1>田舎神社へ行こう - 石段</h1>
        <img src="/images/top/石段.jpeg" className="image" />
        <h2>石段</h2>
        <p>神社へと続くどこかへ吸い込まれそうな石段。悠久の時の中で苔むして摩耗したさまは神社の歴史を今に伝える。転びやすいので登る時は要注意。</p>
      </div>

      <div className="album py-5 bg-light">
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="card mb-4 shadow-sm">
                  <img className="card-img-top" src="/images/articles/ishidan/君津市東粟倉愛宕神社.jpeg" />
                  <div className="card-body">
                    <p className="card-text">
                      君津市 東粟倉<br />
                      愛宕神社
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card mb-4 shadow-sm">
                  <img className="card-img-top" src="/images/articles/ishidan/君津市東粟倉愛宕神社.jpeg" />
                  <div className="card-body">
                    <p className="card-text">
                      君津市 東粟倉<br />
                      愛宕神社
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card mb-4 shadow-sm">
                  <img className="card-img-top" src="/images/articles/ishidan/君津市東粟倉愛宕神社.jpeg" />
                  <div className="card-body">
                    <p className="card-text">
                      君津市 東粟倉<br />
                      愛宕神社
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}