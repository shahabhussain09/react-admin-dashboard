import React from 'react'
import '../styles/dashboard.css'
import SingleCards from '../components/reusible/SingleCards'
import Charts from '../charts/Charts';
import StateCharts from '../charts/StateCharts';
import RecommendCars from '../components/UI/RecommendCars';
import recommendCarsData from '../assets/dummy-data/recommendCars'
const Dashboard = () => {
  const CarObj = {
    title:'Total Cars',
    totalNumber:'750+',
    icon: "ri-police-car-line"
  };

  const TripObj = {
    title:'Daily Trip',
    totalNumber:'1977+',
    icon: "ri-steering-2-line"
  };

  const ClientObj = {
    title:'Client Anually',
    totalNumber:'85k+',
    icon: "ri-user-line"
  };

  const DistanceObj = {
    title:'Kilometers daily',
    totalNumber:'1226+',
    icon: "ri-timer-flash-line"
  };
  return (
   <div className="dashboard">
    <div className="dashboard__wrapper">
      <div className="dashboard__cards">
       <SingleCards item={CarObj} />
       <SingleCards item={TripObj} />
       <SingleCards item={ClientObj} />
       <SingleCards item={DistanceObj} />
      </div>
      <div className="statics">
      <div className="stats">
      <h3 className="stats__title">Miles Statics</h3>
         <Charts/>
         </div>

         <div className="stats">
      <h3 className="stats__title"> Cars Static Miles</h3>
         <StateCharts/>
         </div>
         </div>

         <div className="recomment__car-wrapper">
         {
          recommendCarsData.map(item=> <RecommendCars item={item} key={item.id} />)
         }
         </div>
    </div>
   </div>
  )
}

export default Dashboard