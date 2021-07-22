/** 1ページあたりの詳細コンテンツ表示数 */
const PER_PAGE = 6;

/**
 * 1から始まる連番の配列を生成
 * @param {number} contentsNumber コンテンツ総数
 * @returns {Array[number]} ページ数分の連番配列
 */
export function genarateSerialArray(contentsNumber) {
  // ページ数
  const totalPage = Math.ceil(contentsNumber/PER_PAGE);
  return [...Array(totalPage)].map((_, i) => i + 1);
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
  const end = ((pageNumber - 1) * PER_PAGE) < lastContentIndex ? start + PER_PAGE : lastContentIndex;
  return { start, end }
}