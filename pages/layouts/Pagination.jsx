import Link from 'next/link';

import { generatePageNumber } from '../../lib/pagination'

const Pagination = ({ pageName, categoryId, totalCount, current }) => {

  const pageNumbers = generatePageNumber(totalCount, current);
  const buttons = [];
  for (const pageNumber of pageNumbers) {
    buttons.push(
      <li className={`page-item ${(current === pageNumber) ? "disabled" : ""}`} key={pageNumber}>
        <Link href={`/${pageName}/${categoryId}/${pageNumber}`}>
          <a className="page-link">{pageNumber}</a>
        </Link>
      </li>
    );
  }

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {buttons}
        </ul>
      </nav>
    </>
  );
};

export default Pagination