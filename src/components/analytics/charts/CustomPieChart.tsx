import { blue,  deepOrange } from "@mui/material/colors";
import { PieChart } from "@mui/x-charts"

const data = [
    { label: 'Available', value: 1500, color: deepOrange[300] },
    { label: 'Leased', value: 10500, color: blue[300] }
  ];

export const CustomPieChart = ({}) => {
    return (
        <PieChart
      series={[
        {
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