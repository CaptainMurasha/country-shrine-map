import { HotokamiPage, GoogleOnMarker } from '../icons/SocialMedia';

const Album = ({categoryId, contents}) => {
  const contentList = [];
  for (let i = 0; i < contents.length; i++) {
    const content = contents[i];
    contentList.push(
      <div className="col-md-4" key={i + 1}>
        <div className="card mb-4 shadow-sm">
          <img className="card-img-top" src={process.env.NODE_ENV === 'development' ? 
            `/images/contents/shrines/${categoryId}/${content.city}${content.aza}${content.name}.jpeg`
            : content.imageUrl} />
          <div className="card-body">
            <p className="card-text">
              {content.city} {content.aza}<br />
              {content.name}<br />
              {HotokamiPage(content.url)} {GoogleOnMarker(content.lat, content.lang)}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="album py-5 bg-light">
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {contentList}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Album