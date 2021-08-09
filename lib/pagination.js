/** 1ページあたりの詳細コンテンツ表示数 */
const PER_PAGE = 16;
/** 現在ページの◯ページ前後を表示する */
const PAGE_RANGE = 3;
/** 3ページ前に遷移するボタンのラベル */
const PREV = "<<";
/** 3ページ後に遷移するボタンのラベル */
const NEXT = ">>";

/**
 * 連番配列をページネーション用に加工
 * 最初と最後の2ページと現在ページの前後2ページを表示
 * @param {number} totalCount　コンテンツ総数
 * @param {number} current 現在ページ
 * @returns {Array[number]} ページ数分の連番配列
 */
export function generatePageNumber(totalCount, current) {
  // ページ数
  const totalPage = getTotalPage(totalCount);
  const array = [];
  for (let i = 1; i <= totalPage; i++) {
    if (i >= current - PAGE_RANGE && i <= current + PAGE_RANGE) {
      array.push(i);
    }
  }
  return array;
}

/**
 * ページネーションのラベルを判定する
 * [<],2,3,4,[>]
 * @param {number} pageNumber 現在ページ番号
 * @param {Array[number]} totalPage ページ数分の連番配列
 * @param {number} totalCount　コンテンツ総数
 * @param {number} current 現在ページ
 * @returns {string} 両端ラベル or pageNumberそのまま
 */
export function isEnds(pageNumber, pageNumbers, totalCount, current) {
  if (pageNumber === pageNumbers[0] && pageNumbers[0] !== 1) {
    // 連番配列の先頭が1以外のとき、先頭だけPREVにする
    return PREV;
  } else if (pageNumber === pageNumbers.slice(-1)[0] && current + PAGE_RANGE < getTotalPage(totalCount) ) {
    // 現在ページがとページ範囲の和がページ総数より小さいとき、末尾だけNEXTにする
    return NEXT;
  } else {
    return pageNumber;
  }
}

/**
 * 詳細コンテンツのうち何番目を表示するのか算出
 * @param {number} pageNumber 現在ページ
 * @param {number} total コンテンツ総数
 * @returns {number, number} 開始インデックス, 終了インデックス 
 */
export function getContentsIndex(pageNumber, total) {
  const start = (pageNumber - 1) * PER_PAGE;
  const lastContentIndex = total - 1;
  // インデックスのendがコンテンツ数を上回っているか判定
  const end = start <= lastContentIndex ? start + PER_PAGE : lastContentIndex;
  return { start, end }
}

/**
 * コンテンツ総数からページ総数を求める
 * @param {number} totalCount コンテンツ総数
 * @returns ページ総数
 */
function getTotalPage(totalCount) {
  return Math.ceil(totalCount/PER_PAGE);
}