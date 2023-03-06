import Chart from "react-apexcharts";


const Chart2 = () =>{
    const barItem2={
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
          },
          {
            name: "series-2",
            data: [75, 30, 65, 12, 40, 70, 60, 31]
          }
        ]
      };
    return(
        
        <div className="dashb">
            <h1>Dashboard page</h1>
            <div style={{display: "flex", justifyContent:"space-around" }}>
            <Chart
              options={barItem2.options}
              series={barItem2.series}
              type="bar"
              width="500"
            />
            <Chart
              options={barItem2.options}
              series={barItem2.series}
              type="line"
              width="500"
            />
            </div>
        </div>
    )
}
export default Chart2;