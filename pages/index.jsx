// ここに一覧的なオブジェクトを作ってforで回す

import Head from 'next/head';
import Link from 'next/link';


export default function home() {
  return (
    <>
      <Head>
        <title>田舎神社へ行こう</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=yes,maximum-scale=2.0" />
      <h1>田舎神社へ行こう</h1>
      <ul className="shrine-tiles">
        <li><Link href="/articles/ishidan"><a><img src="/images/top/石段.jpeg" alt="石段" title="石段" /></a></Link></li>
        <li><Link href="/articles/torii"><a><img src="/images/top/鳥居.jpeg" alt="鳥居" title="鳥居" /></a></Link></li>
        <li><Link href="/articles/komainu"><a><img src="/images/top/狛犬.jpeg" alt="狛犬" title="狛犬" /></a></Link></li>
      </ul>
      <ul className="shrine-tiles">
        <li><Link href="/articles/sugibayashi"><a><img src="/images/top/杉林.jpeg" alt="杉林" title="杉林" /></a></Link></li>
        <li><Link href="/articles/hikyou"><a><img src="/images/top/秘境.jpeg" alt="秘境" title="秘境" /></a></Link></li>
        <li><Link href="/articles/umi"><a><img src="/images/top/海.jpeg" alt="海" title="海" /></a></Link></li>
      </ul>
      <ul className="shrine-tiles">
        <li><Link href="/articles/yama"><a><img src="/images/top/山.jpeg" alt="山" title="山" /></a></Link></li>
        <li><Link href="/articles/tanbo"><a><img src="/images/top/田んぼ.jpeg" alt="田んぼ" title="田んぼ" /></a></Link></li>
        <li><Link href="/articles/koke"><a><img src="/images/top/苔.jpeg" alt="苔" title="苔" /></a></Link></li>
      </ul>
      <ul className="shrine-tiles">
        <li><Link href="/articles/takebayashi"><a><img src="/images/top/竹林.jpeg" alt="竹林" title="竹林" /></a></Link></li>
        <li><Link href="/articles/iwakabe"><a><img src="/images/top/岩壁.jpeg" alt="岩壁" title="岩壁" /></a></Link></li>
        <li><Link href="/articles/kyoboku"><a><img src="/images/top/巨木.jpeg" alt="巨木" title="巨木" /></a></Link></li>
      </ul>
    </>
  );
};
