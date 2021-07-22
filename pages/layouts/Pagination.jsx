import Link from 'next/link';

import { genarateSerialArray } from '../../lib/pagination'

const Pagination = ({ pageName, categoryId, totalCount, current }) => {

  const serialArary = genarateSerialArray(totalCount);
  const buttons = [];
  for (const pagenumber of serialArary) {
    buttons.push(
      <button type="button" className="btn btn-secondary" key={pagenumber}>
        <Link href={`/${pageName}/${categoryId}/${pagenumber}`}>
          <a>{pagenumber}</a>
        </Link>
      </button>
    );
  }
  
  return (
    <>
      <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div className="btn-group mr-2" role="group">
          {buttons}
        </div>
      </div>
    </>
  );
};

export default Pagination