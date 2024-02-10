import { Grid } from "@mui/material"
import { CustomBarChart } from "../../components/analytics/charts/CustomBarChart"
import { CustomLineChart } from "../../components/analytics/charts/CustomLineChart"
import { CustomPieChart } from "../../components/analytics/charts/CustomPieChart"
import { CustomChartCard } from "../../components/analytics/cards/CustomChartCard"


export const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={4}>
          <CustomChartCard chart={<CustomBarChart />}/>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        
      <CustomChartCard chart={<CustomLineChart />}/>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CustomChartCard chart={<CustomPieChart />}/>
      </Grid>
    </Grid>)
}