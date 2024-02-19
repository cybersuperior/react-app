import { green } from "@mui/material/colors"
import { LineChart } from "@mui/x-charts"

export const CustomLineChart = () => {
  return (
    <>
      <LineChart
        xAxis={[{
          data: [
            0,1,2,3,4,5,6],
    
        }]}
        series={[
          {
            id: "Line-Area-Series1",
            data: [1000, 1200, 800, 700, 1100, 900, 600],
            area: true,
            color: green["A400"],
            showMark: false,

          },
        ]}
        slotProps={{ legend: { hidden: true } }}
        sx={{
          marginTop: "-50px",
          '& .MuiAreaElement-series-Line-Area-Series1': {
            fill: "url('#lineAreaSeries1Gradient')",
          },
        }}
      >
        <defs>
          <linearGradient id="lineAreaSeries1Gradient" gradientTransform="rotate(90)">

            <stop offset="100%" stopColor={green["A400"]} stopOpacity={.1} />
          </linearGradient>
        </defs>
      </LineChart>
    </>)
}