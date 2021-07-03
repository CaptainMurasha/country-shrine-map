import Header from './layouts/Header';
import {Google, Instagram, Hotokami, Twitter} from './icons/SocialMedia'

const aboutPage = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=yes,maximum-scale=2.0" />

      <div>
        <h2>
          このサイトについて
        </h2>
        <p>
          鳥居の傍らにそびえる巨木<br />
          ガタガタの手彫りの石段<br />
          参道を覆う杉林<br />
          社叢に差し込む陽光<br />
          苔むした狛犬<br />
          眼下に広がる田園<br />
          社殿を彩る彫刻...<br />
          
          「ジブリみたいな世界」「本当に神様がいそう」「幻想郷の入り口」<br />
          そんな言葉で言い表せそうな世界の一端を紹介します。
        </p>
        <h2>
          自己紹介
        </h2>
        <p>
          <Google />
          <Instagram />
          <Hotokami />
          <Twitter />
       </p>
      </div>
    </>
  );
};

export default aboutPage;