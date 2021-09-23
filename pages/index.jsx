import Link from 'next/link'
import Header from './layouts/Header';

export default function Home() {

  return (
    <>
      <header>
        <Header />
      </header>
      <div className="col-md-4" key="index">
        <div className="mb-4 shadow-sm">
          <Link href="/shrines">
            <a><img className="ruralshrine" src="/images/index/shrines.jpeg" alt="田舎神社"/></a>
          </Link>
        </div>
        <div className="mb-4 shadow-sm">
        <Link href="/miyabori">
          <a><img className="miyabori" src="/images/index/miyabori.jpeg" alt="宮彫"/></a>
        </Link>
        </div>
      </div>
    </>
  );
};
