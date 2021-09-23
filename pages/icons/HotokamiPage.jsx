import Link from 'next/link'

/**
 * ホトカミの寺社ページに遷移するボタンを取得
 * @param {string} url 寺社ページリンク
 * @returns ホトカミの寺社ページに遷移するボタン
 */
export default function HotokamiPage(url) {
  return (
    <>
      <Link href={url}>
        <a target="_blank" rel="noopener noreferrer">
          <button type="button" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journal" viewBox="0 0 16 16">
            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
          </svg>
          </button>
        </a>
      </Link>
    </>
  )
}