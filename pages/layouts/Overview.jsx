const Overview = ({categoryIds, categoryName, overview}) => {
  return (
    <>
      <div className="page-header">
        <h1>田舎神社へ行こう - {categoryName}</h1>
        <img src={`/images/top/shrines/${categoryIds}.jpeg`} className="image" />
        <h2>{categoryName}</h2>
        <p>{overview}</p>
      </div>
    </>
  )
}

export default Overview