import Header from './layouts/Header';

export default function Home() {

  return (
    <>
      <header>
        <Header />
      </header>
      <button type="button">
        <a href="/shrines" >田舎神社</a>
      </button>
      <button type="button">
        <a href="/miyabori" >宮彫</a>
      </button>
    </>
  );
};
