import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { BarChart } from "@mui/x-charts/BarChart";

// const commonTransportation = [
//   6.5, 12.5, 17.2, 19.6, 20.1, 20.0, 19.5, 18.8, 18.2, 17.3, 16.4, 15.9, 15.2, 14.7,
//   14.3, 14.3, 14.3, 14.1, 14.2, 14.2, 14.0, 13.8, 13.8, 13.9, 13.6, 14.0, 14.9, 14.8,
//   15.2, 21.1,
// ];

// const car = [
//   48.8, 56.3, 63.2, 67.3, 70.2, 72.3, 74.1, 75.8, 76.9, 78.4, 79.7, 80.5, 81.5, 82.4,
//   83.0, 83.1, 83.2, 83.6, 83.6, 83.8, 83.9, 84.3, 84.4, 84.4, 84.6, 84.4, 83.6, 83.9,
//   83.6, 77.6,
// ];

// const motorcycle = [
//   1.3, 2.1, 2.5, 2.6, 2.7, 2.7, 2.6, 2.6, 2.6, 2.5, 2.5, 2.3, 2.2, 2.1, 1.9, 1.9,
//   1.8, 1.7, 1.6, 1.6, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.0, 0.9, 0.8, 0.7,
// ];

// const biking = [
//   4.0, 5.9, 5.8, 5.0, 4.0, 3.1, 2.4, 1.8, 1.5, 1.2, 0.9, 0.8, 0.7, 0.5, 0.5, 0.4,
//   0.4, 0.3, 0.3, 0.2, 0.3, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.1, 0.1, 0.3,
// ];

// const walking = [
//   39.4, 23.2, 11.3, 5.5, 3.0, 1.9, 1.4, 1.0, 0.8, 0.6, 0.5, 0.5, 0.4, 0.3, 0.3, 0.3,
//   0.3, 0.3, 0.3, 0.2, 0.2, 0.2, 0.3, 0.2, 0.3, 0.2, 0.3, 0.3, 0.3, 0.3,
// ];

// const xAxis = {
//   label: 'Distance between home and office (km)',
//   data: [
//     '0-1',
//     '1-2',
//     '2-3',
//     '3-4',
//     '4-5',
//     '5-6',
//     '6-7',
//     '7-8',
//     '8-9',
//     '9-10',
//     '10-11',
//     '11-12',
//     '12-13',
//     '13-14',
//     '14-15',
//     '15-16',
//     '16-17',
//     '17-18',
//     '18-19',
//     '19-20',
//     '20-21',
//     '21-22',
//     '22-23',
//     '23-24',
//     '24-25',
//     '25-30',
//     '30-35',
//     '35-40',
//     '40-50',
//     '>50',
//   ],
// };

// const series = [
//   { label: 'Car', data: car, stack: 'total' },
//   { label: 'Public T.', data: commonTransportation, stack: 'total' },
//   { label: 'Motorcycle', data: motorcycle, stack: 'total' },
//   { label: 'Walk', data: walking, stack: 'total' },
//   { label: 'Bike', data: biking, stack: 'total' },
// ];

export default function StackOrderDemo({ ismobile,data }) {
  //   const [stackOrder, setStackOrder] = React.useState('none');

  //   const modifiedSeries = [{ ...series[0], stackOrder }, ...series.slice(1)];

  let modified = data.map((e,ind)=> (ind<=6) ? e.ordered_day : undefined)
  let pending = data.map((e,ind) => (ind <=6) ? e.order_approval_pending : undefined)
  let received = data.map((e,ind)=> (ind <=6) ? e.total_order_received : undefined)

  modified = modified.filter( Boolean );
  pending = pending.filter(Boolean);
  received = received.filter(Boolean);
  const chartProp = ismobile
    ? {
        height : 300,
        xAxis: [{ min: 0, max: 750 }],
        yAxis: [
          {
            data: modified,
            scaleType: "band",
            id: "x-axis",
            width:75
          },
        ],
      }
    : {
        yAxis: [{ min: 0, max: 750 }],
        xAxis: [
          {
            data: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            scaleType: "band",
            id: "x-axis",
          },
        ],
      };
  return (
    <BarChart
    {...chartProp}
      layout={`${ismobile ? "horizontal" : "vertical"}`}
      className="graphicalRep"

      // layout="horizontal"
      series={[
        {
          type: "bar",
          data: pending,
          stack: "day",
          color: "#EA232B",
        },
        {
          type: "bar",
          data: received,
          stack: "day",
          color: "#FBD7D9",
        },
      ]}
    />
  );
}
