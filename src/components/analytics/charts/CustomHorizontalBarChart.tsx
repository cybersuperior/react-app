import { green } from "@mui/material/colors";
import { BarChart } from "@mui/x-charts"


const dataset = [
  
  {
    expirations: 85,
    month: 'Mar',
  },
  {
    expirations: 40,
    month: 'Apr',
  },
  {
    expirations: 50,
    month: 'May',
  },
  {
    expirations: 30,
    month: 'June',
  },
  {
    expirations: 80,
    month: 'July',
  },
];

export const CustomHorizontalBarChart = () => {
    return (<BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ id:"Transfers-Series1", dataKey: 'expirations', color:  green["A400"] }]}
      layout="horizontal"
      sx={{
        marginTop: "-60px"
      }}
      >
      </BarChart>)
}