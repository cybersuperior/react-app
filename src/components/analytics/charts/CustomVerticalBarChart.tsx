import { BarChart } from "@mui/x-charts";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
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

      series={[
        { data: pData, label: 'pv', id: 'pvId', stack: 'total' },
        { data: uData, label: 'uv', id: 'uvId', stack: 'total' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
      sx={{
        marginTop: "-50px",
        marginLeft: "20px"
      }}
    />
  );
}