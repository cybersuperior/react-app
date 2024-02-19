import { cyan, green } from "@mui/material/colors";
import { BarChart } from "@mui/x-charts"


const dataset = [
  
  {
    expirations: 400,
    month: 'Oct',
  },
  {
    expirations: 200,
    month: 'Nov',
  },
  {
    expirations: 850,
    month: 'Dec',
  },
  {
    expirations: 700,
    month: 'Jan',
  },
  {
    expirations: 400,
    month: 'Feb',
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