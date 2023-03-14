import axios from "axios";
import Chart from "react-apexcharts";
import { ReactSession }  from 'react-client-session';
import { useEffect } from "react";

const Chart2 = () =>{

  useEffect(()=>{
  
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

    //var i=ReactSession.get("targetIntake");
    var j=ReactSession.get("targetBurn");
    const barItem2={
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
            name: "Your Intake",
            data: [ReactSession.get("day0Intake"), ReactSession.get("day1Intake"), ReactSession.get("day2Intake"), ReactSession.get("day3Intake"), ReactSession.get("day4Intake")]
          },
          {
            name: "Daily target",
            data: [ReactSession.get("targetIntake"), ReactSession.get("targetIntake"), ReactSession.get("targetIntake"), ReactSession.get("targetIntake"), ReactSession.get("targetIntake")]
          }
        ]
      };

      const barItem3={
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
            name: "Your Burns",
            data: [ReactSession.get("day0burn"), ReactSession.get("day1burn"), ReactSession.get("day2burn"), ReactSession.get("day3burn"), ReactSession.get("day4burn")]
          },
          {
            name: "Daily target",
            data: [j, j, j, j, j]
          }
        ]
      };


    return(
        
        <div className="dashb" style={{backgroundColor:"#ffffff"}}>
            <h1>Comparative burns and intakes</h1>
            <div className="row" style={{display: "flex", justifyContent:"space-around" }}>
              <div className="col-6"  style={{overflow:"hidden" }}>
            <Chart
              options={barItem2.options}
              series={barItem2.series}
              type="bar"
              width="500"
            />
            </div>
            <div className="col-6">
            <Chart
              options={barItem3.options}
              series={barItem3.series}
              type="line"
              width="500"
            />
            </div>
            </div>
        </div>
    )
  
}
export default Chart2;