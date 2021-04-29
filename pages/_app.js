import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css' // css読み込みは後勝ち


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}