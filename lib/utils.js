import fs from 'fs'
import path from 'path'

/** 各ページのトップコンテンツを格納するファイル名 */
const TOP_JSON = 'top.json';

/** 1ページあたりの詳細コンテンツ表示数 */
const CONTENTS_AMOUNT = 3;

/**
 * ページネーションを考慮したコンテンツのパスを取得
 * @param {string} pageName /直下のパス
 * @returns {Array[Array[string, number]]} 例　[['ishidan','1'], ['ishidan','2'], ['umi','1'], ['umi','2']...]
 */
 export function generatePaths(pageName) {
  // top.jsonのコンテンツ一覧を取得
  const topContents = readTopContents(pageName);
  // すべてのコンテンツのパス
  const pathArray = [];
  // トップコンテンツの分だけ詳細コンテンツを取得
  for (const topContent of topContents) {
    //　詳細コンテンツを取得
    const detailContents = readDetailContents(pageName, topContent.categoryId);
    const totalPages = getTotalPages(detailContents.length);
    // 各コンテンツのパス
    for (let i = 0; i < totalPages; i++) {
      pathArray.push({
        params: {
          categoryId: [topContent.categoryId, (i + 1).toString()]
        }
      });
    }
  }
  return pathArray;
}

/**
 * top.jsonに定義したコンテンツ一覧を取得
 * @param {string} pageName /直下のパス
 * @returns {Array[Object]} top.jsonに定義したコンテンツ一覧
 */
export function readTopContents(pageName) {
  // JSONを文字列として読み取る
  const fullPath = path.join(process.cwd(), `contents/${pageName}/${TOP_JSON}`);
  const topContents = fs.readFileSync(fullPath, 'utf8');
  // JSON文字列をjsonオブジェクトに変換しコンテンツの配列を取得
  return JSON.parse(topContents);
}

/**
 * カテゴリIDに対応するコンテンツ一覧を取得
 * @param {string} categoryId カテゴリID
 * @param {string} pageName /直下のパス
 * @returns {Array[Object]} カテゴリIDに対応するコンテンツ一覧
 */
function readDetailContents(pageName, categoryId) {
  // JSONを文字列として読み取る
  const fullPath = path.join(process.cwd(), `contents/${pageName}/list/${categoryId}.json`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // JSON文字列をjsonオブジェクトに変換
  return JSON.parse(fileContents);
}

/**
 * コンテンツ総数を取得
 * @param {string} pageName 
 * @param {string} categoryId 
 * @returns コンテンツ総数
 */
export function getTotal(pageName, categoryId) {
  return readDetailContents(pageName, categoryId).length;
}

/**
 * カテゴリIDに対応するコンテンツ一覧を特定数取得
 * @param {string} pageName /直下のパス
 * @param {string} categoryId カテゴリID
 * @param {string} pagenumber ページ数
 * @returns {Array[Object]} カテゴリIDに対応するコンテンツ一覧
 */
export function generateContents(pageName, categoryId, pagenumber) {
  //　詳細コンテンツを取得
  const detailContents = readDetailContents(pageName, categoryId);
  // 表示するコンテンツのインデックスを取得
  const start = (pagenumber - 1) * CONTENTS_AMOUNT;
  // 詳細コンテンツの末尾インデックス
  const lastContentIndex = detailContents.length - 1
  // インデックスのendがコンテンツ数を上回っているか判定
  const end = ((pagenumber - 1) * CONTENTS_AMOUNT) < lastContentIndex ? start + CONTENTS_AMOUNT : lastContentIndex;
  return detailContents.slice(start, end);
}

/**
 * コンテンツ総数からページ数を算出
 * @param {number} contentsNumber コンテンツ総数
 * @returns {number} ページ数
 */
function getTotalPages(contentsNumber) {
  return Math.ceil(contentsNumber/CONTENTS_AMOUNT);
}

/** 
 * contents/{パス}/top.jsonのコンテンツから引数に一致するIDのカテゴリを取得
 * @param {string} pageName /直下のパス
 * @param {string} categoryId ページID
 */
 export function getOverview(pageName, categoryId) {
  // ディレクトリパスを取得
  const topDirectory = path.join(process.cwd(), `contents/${pageName}`);
  // ファイルパスを取得
  const fullPath = path.join(topDirectory, 'top.json');
  // ファイルの中身を取得
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // JSON文字列をjsonオブジェクトに変換しコンテンツの配列を取得
  const jsonContents = JSON.parse(fileContents);
  // カテゴリIDに一致する情報のみ取得
  const filtered = jsonContents.filter(content => {
    return content.categoryId == categoryId ? true : false;
  });
  return filtered[0];
}