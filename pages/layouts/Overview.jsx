const Overview = ({categoryName, overview}) => {
  return (
    <>
      <div className="overview">
        <div className="jumbotron p-4 p-md-5 rounded text-white">
          <h2>{categoryName}</h2>
          <p>{overview}</p>
        </div>
      </div>
    </>
  )
}

export default Overview