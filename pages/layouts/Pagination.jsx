import Link from 'next/link';

const Pagination = ({ pageName, categoryId, totalCount }) => {
  const PER_PAGE = 3;

  const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <>
      <ul>
        {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
          <li key={index}>
            <Link href={ `/${pageName}/${categoryId}/${number}`}>
              <a>{number}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Pagination