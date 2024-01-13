import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import moment from "moment";
import { ApexOptions } from "apexcharts";

interface DataPoint {
  x: string;
  y: number;
}

interface Series {
  name: string;
  data: DataPoint[];
}

const ApexChart: React.FC = () => {
  // Sample data
  const dataSet: DataPoint[] = [
    { x: "2024-01-01", y: 25000000 },
    { x: "2024-01-02", y: 30000000 },
    { x: "2024-01-03", y: 18000000 },
    { x: "2024-01-04", y: 35000000 },
    { x: "2024-01-05", y: 42000000 },
    { x: "2024-01-06", y: 28000000 },
    { x: "2024-01-07", y: 20000000 },
    { x: "2024-01-08", y: 32000000 },
    { x: "2024-01-09", y: 27000000 },
    { x: "2024-01-10", y: 57000000 },
  ];

  const [series, setSeries] = useState<Series[]>([
    {
      name: "Total Coin",
      data: dataSet,
    },
  ]);

  const [options, setOptions] = useState<ApexOptions>({
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
        formatter: (val: number) => (val / 1000000).toFixed(2),
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
        formatter: (val: string) => moment(val).format("DD MMM YYYY"),
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

  const [isDataSelectionOpen, setIsDataSelectionOpen] = useState<boolean>(
    false
  );

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
