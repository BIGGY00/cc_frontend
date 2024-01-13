import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import moment from "moment";

const ApexChart = () => {
  // Sample data
  const dataSet = [
    ["2024-01-01", 25000000], // January 1, 2024
    ["2024-01-02", 30000000], // January 2, 2024
    ["2024-01-03", 18000000], // January 3, 2024
    ["2024-01-04", 35000000], // January 4, 2024
    ["2024-01-05", 42000000], // January 5, 2024
    ["2024-01-06", 28000000], // January 6, 2024
    ["2024-01-07", 20000000], // January 7, 2024
    ["2024-01-08", 32000000], // January 8, 2024
    ["2024-01-09", 27000000], // January 9, 2024
    ["2024-01-10", 57000000], // January 10, 2024
  ];

  const [series, setSeries] = useState([
    {
      name: "Total Coin",
      data: dataSet,
    },
  ]);

  const [options, setOptions] = useState({
    chart: {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100],
        },
      },
    yaxis: {
      labels: {
        style: {
          colors: "#8e8da4",
        },
        offsetX: 0,
        formatter: function (val: any) {
          return (val / 1000000).toFixed(2);
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    xaxis: {
      type: "datetime",
      tickAmount: 8,
      labels: {
        rotate: -15,
        rotateAlways: true,
        formatter: function (val: any) {
          return moment(val).format("DD MMM YYYY");
        },
      },
    },
    title: {
      text: "Total coins",
      align: "left",
      offsetX: 14,
    },
    tooltip: {
      shared: false,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      offsetX: -10,
    },
  });

  const [isDataSelectionOpen, setIsDataSelectionOpen] = useState(false);

  const handleDataSelection = () => {
    setIsDataSelectionOpen(true);
  };

  const handleDataSelectionClose = () => {
    setIsDataSelectionOpen(false);
    // Add logic to handle selected data here
  };

  return (
    <div>
      {/* Button to choose data */}
      <button onClick={handleDataSelection}>Choose Data</button>

      {/* Chart */}
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={350}
        />
      </div>

      {/* Data Selection Modal/Dialog */}
      {isDataSelectionOpen && (
        <div className="data-selection-modal">
          {/* Add your data selection UI here */}
          <p>Sample Data Selection UI</p>
          <button onClick={handleDataSelectionClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ApexChart;
