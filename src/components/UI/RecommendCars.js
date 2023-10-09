import React from 'react'

const RecommendCars = (props) => {
  const {carName, rateweet, imgUrl, rentPrice, Percentage} = props.item
  return (
    <div className="recomment__car-card">
    <div className="recomment__car-top">
      <h5><span><i class="ri-restart-line"></i>{Percentage}% Recommended</span></h5>
    </div>
    <div className="recomment__car-img">
      <img src={imgUrl} alt="" />
    </div>
    <div className="recomment-car-bottom">
      <h4>{carName}</h4>
      <div>
        <div className="recomment__car-other">
      <div className="recomment__icons">
      <p><i class="ri-repeat-fill"></i>{rateweet}</p>
      <p><i class="ri-settings-5-line"></i></p>
        <p><i class="ri-timer-flash-line"></i></p>
      </div>
      <span>{rentPrice}</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RecommendCars