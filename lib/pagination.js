/** 1ページあたりの詳細コンテンツ表示数 */
const PER_PAGE = 9;
/** 現在ページの◯ページ前後を表示する */
const PAGE_RANGE = 2;

/**
 * 連番配列をページネーション用に加工
 * 最初と最後の2ページと現在ページの前後2ページを表示
 * @param {number} totalCount　コンテンツ総数
 * @param {number} current 現在ページ
 * @returns {Array[number]} ページ数分の連番配列
 */
export function generatePageNumber(totalCount, current) {
  // ページ数
  const totalPage = Math.ceil(totalCount/PER_PAGE);
  const array = [];
  for (let i = 1; i <= totalPage; i++) {
    if (i >= current - PAGE_RANGE && i <= current + PAGE_RANGE) {
      array.push(i);
    }
  }
  return array;
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