import { PieChart } from "@mui/x-charts"

const data = [
    { label: 'Group A', value: 400, color: '#FFD700' },
    { label: 'Group B', value: 300, color: '#FFB14E' },
    { label: 'Group C', value: 300, color: '#FA8775' },
    { label: 'Group D', value: 200, color: "#EA5F94" },
    { label: 'Group E', value: 278, color: "#CD34B5" },
    { label: 'Group F', value: 189, color: "#0000FF" },
  ];

export const CustomPieChart = ({}) => {
    return (
        <PieChart
      series={[
        {
          data: data,
          innerRadius: 90
        },
      ]}
      slotProps={{
        legend: {hidden: true}
      }}
      height={250}
    />
    )
}