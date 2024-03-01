import { useTheme } from "@mui/material";
import { PieChart } from "@mui/x-charts"

export const CustomPieChart = () => {
  const theme = useTheme()
  const chartColors = theme.palette.charts
  const data = [
    { label: 'Available', value: 210, color: chartColors.deepOrange.main },
    { label: 'Leased', value: 790, color: chartColors.blue.main }
  ];
  const total = 1000;

  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${(item.value / total * 100).toFixed(0)}% ${item.label}`,
          arcLabelMinAngle: 90,
          arcLabelRadius: 18,
          data: data
        },
      ]}
      slotProps={{
        legend: { hidden: true }
      }}
      sx={{ marginTop: "-40px", marginLeft: "90px" }}
    />
  )
}