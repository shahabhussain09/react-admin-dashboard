import React from 'react'
import sellCar from '../assets/images/sell-car.png'
import '../styles/sellCar.css'
import Tracking from '../charts/Tracking'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
const SellCar = () => {
  const percentage = 55
  return (
    <div className='sell__car'>
      <h2 className="sell__car-title">Sell Car</h2>
      <div className="sell__car-wrapper">
        <div className="sell__car-top">
          <div className="sell__car-img">
            <h2>Mercedes Benze</h2>
            <img src={sellCar} alt="" />
          </div>

          <div className="tracking__history">
            <h3>Tracking History</h3>
            <Tracking />
          </div>
        </div>

        <div className="offer__wrapper">
          <div className="offer__top">
          <h2 className="sell__car-title">Offers</h2>

          <div className="filter__widget-01">
          <select>
            <option value="New">New</option>
            <option value="Popular">Popular</option>
            <option value="Upcomming">Upcomming</option>
          </select>
        </div>
          </div>

          <div className="offer__list">
            <div className="offer__item">
              <div className="box__01">
                <h3 className='client__name'>Killiam James</h3>
                <h6 className="ave__price">$1603 <span>Average Price</span></h6>
                <h6 className="market__price">Market Price is $16,244</h6>
                <span className="arrow__key"><i class="ri-arrow-right-line"></i></span>
              </div>

             <div className="circle__wrapper">
             <div className="box__02">
              <CircularProgressbar value={percentage} text={`${percentage}%`}
              styles={buildStyles({
                pathColor: "#01d293",
                textColor: '#fff',
                trailColor: '#0b0c28',
                backgroundColor: '#01d293',
                textSize: "18px"
              })}
              />
              </div>
              <h4>Impression Share</h4>
             </div>

             <div className="box__03">
              <span className="model__spend-icon"><i class="ri-car-line"></i></span>
              <h6 className="spend__amount">$1117</h6>
              <p className="spend__title">Model Spand</p>
             </div>


             <div className="box__04">
              <span className="model__spend-icon"><i class="ri-car-line"></i></span>
              <h6 className="spend__amount">$1117</h6>
              <p className="spend__title">Model Spand</p>
             </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellCar