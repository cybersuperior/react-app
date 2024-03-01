import { useTheme } from "@mui/material";
import { BarChart } from "@mui/x-charts";

const availableData = [55, 45, 10, 60, 40];
const leasedData = [200, 160, 120, 140, 170];
const xLabels = [
  'Bldg A',
  'Bldg B',
  'Bldg C',
  'Bldg D',
  'Bldg E'
];

export const CustomVerticalBarChart = () => {
  const theme = useTheme()
  const chartColors = theme.palette.charts

  return (
    <BarChart
      slotProps={{
        legend: {
          hidden: true
        }
      }}
      series={[
        { data: leasedData, label: 'leased', id: 'uvId', stack: 'total', color: chartColors.blue.main },
        { data: availableData, label: 'available', id: 'pvId', stack: 'total', color: chartColors.deepOrange.main },
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