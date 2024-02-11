import { LineChart } from "@mui/x-charts"

export const CustomLineChart = () => {
    return (
    <>
    <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            color: "#CD34B5",
            showMark: false,
            area: true
          },
        ]}
        height={250}
        slotProps={{legend:{hidden: true}}}
      />
    </>)
}