import Header from './layouts/Header';
import {Google, Instagram, Hotokami, Twitter} from './icons/SocialMedia'

const aboutPage = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=yes,maximum-scale=2.0" />

      <div className="about">
        <h2>
          このサイトについて
        </h2>
        <p>
          徒歩で神社仏閣を参拝する中で<br />
          これはと思ったものを紹介します<br />
        </p>
        <h2>
          自己紹介
        </h2>
        <p>
          週末のたびに電車で千葉県内のどこかに降り立ち散策しています<br />
          普段はプログラムを書くお仕事をしています<br />
          主にjavaでサーバサイドの処理を書いています<br />
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