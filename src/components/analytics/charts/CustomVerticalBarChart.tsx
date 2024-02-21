import { blue, deepOrange } from "@mui/material/colors";
import { BarChart } from "@mui/x-charts";

const availableData = [325, 400, 325, 350, 325];
const leasedData = [1700, 1300, 2800, 800, 1200];
const xLabels = [
  'Bldg A',
  'Bldg B',
  'Bldg C',
  'Bldg D',
  'Bldg E'
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
        { data: leasedData, label: 'leased', id: 'uvId', stack: 'total', color: blue[300] },
        { data: availableData, label: 'available', id: 'pvId', stack: 'total' , color: deepOrange[300]},
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