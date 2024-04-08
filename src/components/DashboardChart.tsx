import React from "react";
import ReactApexChart from "react-apexcharts";

const DashboardChart = ({ colors, categories, title, data }) => {
  return (
    <div className="border mx-3 my-2">
      <h6 className="border-b py-4 ps-6">{title}</h6>
      <div id="chart">
        <ReactApexChart
          options={{
            chart: {
              height: 350,
              type: "bar",
              events: {
                click: function (chart, w, e) {
                  // console.log(chart, w, e)
                },
              },
            },
            colors: colors,
            plotOptions: {
              bar: {
                columnWidth: "50%",
                distributed: true,
              },
            },
            dataLabels: {
              enabled: false,
            },
            legend: {
              show: false,
            },
            xaxis: {
              categories: categories, // ex:[`Live 0`, `Recent 1`, `Upcoming 2`]
              labels: {
                style: {
                  colors: colors, // ex:["#1E9F4D", "#E2922F", "#E573A4"]
                  fontSize: "12px",
                },
              },
            },
          }}
          series={[
            {
              data: data, // ex:[0, 1, 2]
            },
          ]}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default DashboardChart;
