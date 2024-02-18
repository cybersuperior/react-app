import { cyan } from "@mui/material/colors";
import { PieChart } from "@mui/x-charts"

const data = [
    { label: 'On-Premises', value: 3000, color: '#64b5f6' },
    { label: 'Off-Premises', value: 9000, color: cyan[300] }
  ];

export const CustomPieChart = ({}) => {
    return (
        <PieChart
      series={[
        {
          data: data,
          innerRadius: 50
        },
      ]}
      slotProps={{
        legend: {hidden: true}
      }}
      
      sx={{marginTop: "-40px", marginLeft: "90px"}}
    />
    )
}