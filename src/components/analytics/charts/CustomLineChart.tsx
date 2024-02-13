import { LineChart } from "@mui/x-charts"

export const CustomLineChart = () => {
    return (
    <>
    <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            color: "#11FFEE",
            showMark: false
          },
        ]}
        slotProps={{legend:{hidden: true}}}
        sx={{marginTop: "-50px"}}
      />
    </>)
}