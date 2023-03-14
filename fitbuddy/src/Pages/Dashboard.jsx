import { useEffect } from "react";
import Chart from "react-apexcharts";
import Chart2 from "./Chart2";
import { ReactSession }  from 'react-client-session';
import axios from "axios";

const Dashboard = () =>{

  var len1;
  var len2;
  let count = document.querySelectorAll(".count");
      console.log(count);

let arr = Array.from(count);
console.log(arr);
useEffect(()=>{
  axios.get("http://localhost:8080/users/getList").then((response)=>{
    len1=(response.data.length);
    console.log("length"+len1);
    console.log("Hiii axios users");
  });

  var urlLink="http://localhost:8080/fitness/getById/"+ReactSession.get("id");
  axios.get(urlLink).then((response)=>{
    ReactSession.set("targetIntake",response.data.targetIntake);
    ReactSession.set("targetBurn",response.data.targetBurn);
    console.log("Hiii axios users");
  });

  axios.get("http://localhost:8080/fitness/getList").then((response)=>{
    len2=(response.data.length);
    console.log("Length"+len2);
    console.log("Hiii axios fitness");
    onload();
  });

  let link1="http://localhost:8080/dailyactivity/top5/"+ReactSession.get("id");
  axios.get(link1).then((response)=>{

    console.log(response.data[0].date);
    ReactSession.set("day0burn",response.data[4].dailyBurn)
    ReactSession.set("day1burn",response.data[3].dailyBurn)
    ReactSession.set("day2burn",response.data[2].dailyBurn)
    ReactSession.set("day3burn",response.data[1].dailyBurn)
    ReactSession.set("day4burn",response.data[0].dailyBurn)

    ReactSession.set("day0Intake",response.data[4].dailyIntake)
    ReactSession.set("day1Intake",response.data[3].dailyIntake)
    ReactSession.set("day2Intake",response.data[2].dailyIntake)
    ReactSession.set("day3Intake",response.data[1].dailyIntake)
    ReactSession.set("day4Intake",response.data[0].dailyIntake)
    
    console.log("bolone lagiiii");
  });

},[]);
const onload = () => {
  let count = document.querySelectorAll(".count");
  let arr = Array.from(count);
  arr.map(function(item){

    console.log(item);
    console.log(item.getAttribute("data-number"));
    let startnumber = 0
  
    function counterup(){
    startnumber++;
    item.innerHTML= startnumber;
     if(item.getAttribute("data-number")==11)
     {
      if(startnumber == len1){

        console.log("Hiiiii"+len1);
        clearInterval(stop);
    }

     }
    else if(item.getAttribute("data-number")==22)
     {
      if(startnumber == len2){
        console.log("Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"+len2);
        clearInterval(stop);
    }

     }

    else{ if(startnumber == item.getAttribute("data-number")){
        clearInterval(stop);
        console.log("Hii default");
    }
  }
  }
  
  let stop =setInterval(function(){
    counterup();
  },50)
  
  });
}
  
    const barItem={
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1, 2, 3, 4, 5]
          }
        },
        series: [
          {
            name: "Daily Burns",
            data: [ReactSession.get("day0burn"), ReactSession.get("day1burn"), ReactSession.get("day2burn"), ReactSession.get("day3burn"), ReactSession.get("day4burn")]
          }
        ]
      };
      const barItem1={
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1, 2, 3, 4, 5]
          }
        },
        series: [
          {
            name: "Daily intake",
            data: [ReactSession.get("day0Intake"),ReactSession.get("day1Intake"),ReactSession.get("day2Intake"), ReactSession.get("day3Intake"), ReactSession.get("day4Intake")]
          }
        ]
      };
    return(

      <>   

      <div className="container-fluid">    
      <div id="counter" style={{backgroundColor:"#ffffff"}} className=" row">
  <div className="item col-3">
    <h1 className="count" data-number={11}/>
    <h3 className="text">Users Registered</h3>
  </div>
  <div className="item col-3">
    <h1 className="count" data-number={5}/>
    <h3 className="text">year+ Exp</h3>
  </div>
  <div className="item col-3">
    <h1 className="count" data-number={22}/>
    <h3 className="text">Profile setups</h3>
  </div>
  <div className="item col-3">
    <h1 className="count" data-number={10}/>
    <h3 className="text">Awards Won</h3>
  </div>
</div>
 
        <div className="dashb " style={{backgroundColor:"#ffffff"}}>
        <Chart2/>
            <h1>Last 5 days burns and Intake</h1>
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
              options={barItem1.options}
              series={barItem1.series}
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