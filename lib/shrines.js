import fs from 'fs'
import path from 'path'

const shrineListDirectory = path.join(process.cwd(), 'contents/shrines/list')

/** 
 * contents/shrines/top.jsonのコンテンツを取得
 */
export function getAllShrines() {
  // ディレクトリパスを取得
  const shrinesTopDirectory = path.join(process.cwd(), 'contents/shrines');
  // ファイルパスを取得
  const fullPath = path.join(shrinesTopDirectory, 'top.json');
  // ファイルの中身を取得
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // JSON文字列をjsonオブジェクトに変換しコンテンツの配列を取得
  return JSON.parse(fileContents);
}

/** 
 * contents/shrines/top.jsonのコンテンツから引数に一致するIDのカテゴリを取得
 * @param categoryIds ページID
 */
 export function getShrines(categoryId) {
  // ディレクトリパスを取得
  const shrinesTopDirectory = path.join(process.cwd(), 'contents/shrines');
  // ファイルパスを取得
  const fullPath = path.join(shrinesTopDirectory, 'top.json');
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

/** 
 * contents/shrines配下のファイル名から各カテゴリへのパスを作成
 */
export function getAllShrinesIds() {
  const fileNames = fs.readdirSync(shrineListDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        categoryIds: fileName.replace(/\.json$/, '')
      }
    }
  })
}

/** 
 * 各カテゴリのコンテンツを取得
 * @param categoryId ページID
 */
export function getAllShrinesData(categoryId) {
  // JSONを文字列として読み取る
  const fullPath = path.join(shrineListDirectory, `${categoryId}.json`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // JSON文字列をjsonオブジェクトに変換
  return JSON.parse(fileContents);
}
