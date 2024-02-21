import { cyan, green } from "@mui/material/colors";
import { BarChart } from "@mui/x-charts"


const dataset = [
  
  {
    expirations: 400,
    month: 'Mar',
  },
  {
    expirations: 200,
    month: 'Apr',
  },
  {
    expirations: 850,
    month: 'May',
  },
  {
    expirations: 700,
    month: 'June',
  },
  {
    expirations: 400,
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