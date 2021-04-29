
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
      <section className="wrapper">
        <div className="container">
          <div className="content">
            <div className="content-item">
              <img src="/images/top/石段.jpeg" className="image" />
            </div>
            <div className="content-item">
              <div className="text">
                <h2 className="heading">石段</h2>
                <p>神社へと続くどこかへ吸い込まれそうな石段。悠久の時の中で苔むして摩耗したさまは神社の歴史を今に伝える。転びやすいので登る時は要注意。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="recommends">
        <h1>おすすめ</h1>
        <article className="recommend">
          <p>君津市東粟倉 愛宕神社</p>
          <img src="/images/srticles/ishidan/君津市東粟倉愛宕神社.jpeg" />
        </article>
      </article>
    </>
  );
}