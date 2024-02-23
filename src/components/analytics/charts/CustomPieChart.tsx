import { blue,  deepOrange } from "@mui/material/colors";
import { PieChart } from "@mui/x-charts"

const data = [
    { label: 'Available', value: 210, color: deepOrange[300] },
    { label: 'Leased', value: 790, color: blue[300] }
  ];

export const CustomPieChart = ({}) => {
   const total = 1000;
    return (
        <PieChart
      series={[
        {
          arcLabel: (item) => `${(item.value/total * 100).toFixed(0)}% ${item.label}`,
          arcLabelMinAngle: 90,
          arcLabelRadius: 18,
          data: data
        },
      ]}
      slotProps={{
        legend: {hidden: true}
      }}
      
      sx={{marginTop: "-40px", marginLeft: "90px"}}
    />
    )
}