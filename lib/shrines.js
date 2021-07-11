import fs from 'fs'
import path from 'path'

const shrinesDirectory = path.join(process.cwd(), 'contents/shrines')

/** contents/shrines配下のファイル名を全件取得 */
export function getAllShrines() {
  const fileNames = fs.readdirSync(shrinesDirectory)

  return fileNames.map(fileName => {
    return fileName.replace(/\.json$/, '')
  })
}

/** contents/shrines配下のファイル名から各カテゴリへのパスを作成 */
export function getAllShrinesIds() {
  const fileNames = fs.readdirSync(shrinesDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        categoryId: fileName.replace(/\.json$/, '')
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
  const fullPath = path.join(shrinesDirectory, `${categoryId}.json`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // JSON文字列をjsonオブジェクトに変換
  const matterResult = JSON.parse(fileContents)

  // データを id と合わせて返す
  return {
    categoryId,
    ...matterResult
  }
}
