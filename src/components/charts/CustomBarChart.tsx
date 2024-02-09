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
        width={300}
        height={300}
      />)
}