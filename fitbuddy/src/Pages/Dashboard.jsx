import { useEffect } from "react";
import Chart from "react-apexcharts";
import Chart2 from "./Chart2";


const Dashboard = () =>{
    const barItem={
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ]
      };
      let count = document.querySelectorAll(".count");
      console.log(count);
let arr = Array.from(count);
console.log(arr);
useEffect(()=>{
  onload();
  
},[])
const onload = () => {
  let count = document.querySelectorAll(".count");
  let arr = Array.from(count);
  arr.map(function(item){
    let startnumber = 0
  
    function counterup(){
    startnumber++;
    item.innerHTML= startnumber;
     
    if(startnumber == item.dataset.number){
        clearInterval(stop)
    }
  }
  
  let stop =setInterval(function(){
    counterup();
  },50)
  
  });
}
    return(

      <>       
      <div id="counter">
  <div className="item">
    <h1 className="count" data-number={50}/>
    <h3 className="text">Reward Achieved</h3>
  </div>
  <div className="item">
    <h1 className="count" data-number={15} />
    <h3 className="text">year+ Eexperience</h3>
  </div>
  <div className="item">
    <h1 className="count" data-number={20}/>
    <h3 className="text">project completed</h3>
  </div>
  <div className="item">
    <h1 className="count" data-number={10}/>
    <h3 className="text">happy clients</h3>
  </div>
</div>
 
        <div className="dashb">
            <h1>Dashboard page</h1>
            <div style={{display: "flex", justifyContent:"space-around" }}>
            <Chart
              options={barItem.options}
              series={barItem.series}
              type="bar"
              width="500"
            />
            <Chart
              options={barItem.options}
              series={barItem.series}
              type="area"
              width="500"
            />
            </div>
            <Chart2/>
        </div>
        </>

    )
}
export default Dashboard;