import { blue, deepOrange } from "@mui/material/colors";
import { BarChart } from "@mui/x-charts";

const availableData = [75, 150, 125, 150, 125, 200, 175];
const leasedData = [2000, 1500, 3000, 1000, 1500, 1200, 800];
const xLabels = [
  'Bldg A',
  'Bldg B',
  'Bldg C',
  'Bldg D',
  'Bldg E',
  'Bldg F'
];

export const CustomVerticalBarChart = () => {
  return (
    <BarChart
    slotProps={{
        legend: {
            hidden: true
        }
      }}
      series={[
        { data: leasedData, label: 'leased', id: 'uvId', stack: 'total', color: blue[400] },
        { data: availableData, label: 'available', id: 'pvId', stack: 'total' , color: deepOrange[400]},
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
      sx={{
        marginTop: "-50px",
        marginLeft: "20px",
        overflow: "visible"
      }}
    />
  );
}