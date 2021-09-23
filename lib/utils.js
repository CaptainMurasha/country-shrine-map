import fs from 'fs'
import path from 'path'

import { generatePageNumber, getContentsIndex} from './pagination'

/** 各ページのトップコンテンツを格納するファイル名 */
const TOP_JSON = 'top.json';

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
    const serialArray = generatePageNumber(detailContents.length);
    for (const pagenumber of serialArray) {
      pathArray.push({
        params: {
          categoryId: [topContent.categoryId, pagenumber.toString()]
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
 * @param {string} pageName /直下のパス
 * @param {string} categoryId カテゴリID
 * @returns {Array[Object]} カテゴリIDに対応するコンテンツ一覧
 */
export function readDetailContents(pageName, categoryId) {
  // JSONを文字列として読み取る
  const fullPath = path.join(process.cwd(), `contents/${pageName}/list/${categoryId}.json`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // JSON文字列をjsonオブジェクトに変換
  return JSON.parse(fileContents);
}

/**
 * カテゴリIDに対応するコンテンツ一覧を特定数取得
 * @param {Array[Object]} allDetail 詳細コンテンツ
 * @param {string} pagenumber ページ数
 * @returns {Array[Object]} カテゴリIDに対応するコンテンツ一覧
 */
export function generateContents(allDetail, pagenumber) {
  //　詳細コンテンツを取得
  const { start, end } = getContentsIndex(pagenumber, allDetail.length);
  return allDetail.slice(start, end);
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