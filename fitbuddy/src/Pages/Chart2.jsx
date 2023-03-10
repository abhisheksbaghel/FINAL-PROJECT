import Chart from "react-apexcharts";


const Chart2 = () =>{
    const barItem2={
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
            name: "Your Burns",
            data: [600, 400, 450, 300, 590, 200, 700, 310]
          },
          {
            name: "Daily target",
            data: [500, 500, 500, 500, 500, 500, 500, 500]
          }
        ]
      };
    return(
        
        <div className="dashb" style={{backgroundColor:"#ffffff"}}>
            <h1>Comparative burns</h1>
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
              options={barItem2.options}
              series={barItem2.series}
              type="line"
              width="500"
            />
            </div>
            </div>
        </div>
    )
}
export default Chart2;