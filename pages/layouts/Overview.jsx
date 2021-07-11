const Overview = ({categoryIds, categoryName, overview}) => {
  // 背景画像を設定 透過のためのbefore設定はcssに切り出す
  const jumbotronStyle = {
    background:`url(${`/images/top/shrines/${categoryIds}.jpeg`}) center no-repeat; background-size: cover`,
    background: '#242134',
    background: '-webkit-linear-gradient(to right, #9E9AB4, #242134)',
    background: 'linear-gradient(to right, #9E9AB4, #242134)'
  }

  return (
    <>
      <div className="overview">
        <div className="jumbotron p-4 p-md-5 rounded text-white" style={jumbotronStyle}>
          <div className="page-header">
            <h2>{categoryName}</h2>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Overview