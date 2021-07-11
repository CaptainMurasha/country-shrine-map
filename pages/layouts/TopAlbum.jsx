const TopAlbum = ({categoriesData}) => {
  const contentList = [];
  for (let i = 0; i < categoriesData.length; i++) {
    const content = categoriesData[i];
    contentList.push(
      <div className="col-4" key={content.categoryId}>
        <div className="card mb-4 shadow-sm">
          <img className="card-img-top" src={`/images/top/shrines/${content.categoryId}.jpeg`} />
          <div className="card-body">
            <p className="card-text">
              {content.categoryName}<br />
              {content.overview}<br />
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

export default TopAlbum