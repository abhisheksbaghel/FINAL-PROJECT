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
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9]
          }
        },
        series: [
          {
            name: "Daily Burns",
            data: [600, 400, 450, 300, 590, 200, 700, 310]
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

      <div className="container-fluid">    
      <div id="counter" style={{backgroundColor:"#ffffff"}} className=" row">
  <div className="item col-3">
    <h1 className="count" data-number={50}/>
    <h3 className="text">Reward Achieved</h3>
  </div>
  <div className="item col-3">
    <h1 className="count" data-number={30} />
    <h3 className="text">year+ Eexperience</h3>
  </div>
  <div className="item col-3">
    <h1 className="count" data-number={20}/>
    <h3 className="text">project completed</h3>
  </div>
  <div className="item col-3">
    <h1 className="count" data-number={10}/>
    <h3 className="text">happy clients</h3>
  </div>
</div>
 
        <div className="dashb " style={{backgroundColor:"#ffffff"}}>
        <Chart2/>
            <h1>Daily burns</h1>
            <div className="row" style={{display: "flex", justifyContent:"space-around" }}>
            <div className="col-6" style={{overflow:"hidden" }}>
            <Chart
              options={barItem.options}
              series={barItem.series}
              type="bar"
              width="500"
            />
            </div>
            <div className="col-6" style={{overflow:"hidden" }}>
            <Chart
              options={barItem.options}
              series={barItem.series}
              type="area"
              width="500"
            />
            </div>
            </div>
        </div>
        </div>
        </>

    )
}
export default Dashboard;