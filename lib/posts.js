import fs from 'fs'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'posts')

/** /posts配下のファイル名を全件取得 */
export function getAllCategories() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map(fileName => {
    return fileName.replace(/\.json$/, '')
  })
}

/** /posts配下のファイル名から各カテゴリへのパスを作成 */
export function getAllCategoriesIds() {
  const fileNames = fs.readdirSync(postsDirectory)

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
 * @param categoryIds ページID
 */
export function getAllCategoriesData(categoryIds) {
  // JSONを文字列として読み取る
  const fullPath = path.join(postsDirectory, `${categoryIds}.json`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // JSON文字列をjsonオブジェクトに変換
  const matterResult = JSON.parse(fileContents)

  // データを id と合わせて返す
  return {
    categoryIds,
    ...matterResult
  }
}
