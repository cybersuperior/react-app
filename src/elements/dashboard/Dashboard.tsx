import { Card, CardContent, Grid } from "@mui/material"
import { BarChart } from "@mui/x-charts"

export const Dashboard = () => {
    return (
    <Grid container spacing={8}>
        <Grid item xs={4}>    
    <Card sx={{ boxShadow: 3 }} >
        <CardContent>
        <BarChart
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
  sx={{ width: 1, height: 1 }}
  height={20}
/>


        </CardContent>
           </Card>
        </Grid>
    </Grid>)
}