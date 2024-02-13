import { BarChart } from "@mui/x-charts"

export const CustomBarChart = () => {
    return (<BarChart
        xAxis={[
          {
            id: 'barCategories',
            data: ['bar A', 'bar B', 'bar C'],
            scaleType: 'band',
          },
        ]}
        series={[
          {
            data: [2, 5, 3],
          },
        ]}
        layout="horizontal"
        sx={{marginTop: "-50px"}}
      />)
}