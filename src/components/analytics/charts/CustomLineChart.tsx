import { green, purple } from "@mui/material/colors"
import { LineChart } from "@mui/x-charts"

export const CustomLineChart = () => {
  const monthToNumber = ["Mar", "Apr", "May", "June", "July", "Aug", "Sept"]
  return (
    <>
      <LineChart
        xAxis={[{
          data: [0,1,2,3,4,5,6],
          valueFormatter: (value: number) => monthToNumber[value]
        }]}
        series={[
          {
            id: "Line-Area-Series1",
            data: [40000, 50000, 30000, 35000, 40000, 20000, 10000],
            area: true,
            color: purple[300],
            showMark: false,

          },
        ]}
        slotProps={{ legend: { hidden: true }}}
        sx={{
          marginTop: "-50px",
          marginLeft: "30px",
          '& .MuiAreaElement-series-Line-Area-Series1': {
            fill: "url('#lineAreaSeries1Gradient')",
          },
        }}
      >
        <defs>
          <linearGradient id="lineAreaSeries1Gradient" gradientTransform="rotate(90)">

            <stop offset="100%" stopColor={purple[300]} stopOpacity={.1} />
          </linearGradient>
        </defs>
      </LineChart>
    </>)
}