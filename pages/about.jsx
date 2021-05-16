import Head from 'next/head';
import Link from 'next/link';

const aboutPage = () => {
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

      <div>
        <p>
          自己紹介、サイトの紹介、SNSリンクを載せる
        </p>
      </div>
    </>
  );
};

export default aboutPage;